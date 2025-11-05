
import { useState } from "react";
import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
export default function Register({ onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // نوع المستخدم
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // حفظ البيانات في قاعدة Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        role,
        createdAt: new Date().toISOString(),
      });

      setMessage("✅ تم إنشاء الحساب بنجاح!");
      setEmail("");
      setPassword("");
      setName("");
    } catch (error) {
      console.error(error);
      setMessage("❌ حدث خطأ أثناء التسجيل: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>إنشاء حساب جديد</h2>

        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            placeholder="الاسم الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.select}
          >
            <option value="student">👨‍🎓 طالب</option>
            <option value="teacher">👩‍🏫 أستاذ</option>
            <option value="admin">⚙️ إدارة</option>
          </select>

          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "جاري التسجيل..." : "تسجيل"}
          </button>

          {message && <p style={styles.message}>{message}</p>}

          <button type="button" style={styles.backButton} onClick={onBack}>
            ← العودة
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    direction: "rtl",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(to bottom right, #64b5f6, #81c784, #a5d6a7)",
    fontFamily: "'Cairo', sans-serif",
  },
  card: {
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: "35px 25px",
    borderRadius: "18px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    fontSize: "24px",
    color: "#1565c0",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    fontSize: "16px",
  },
  select: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#1565c0",
    color: "white",
    border: "none",
    padding: "12px",
    borderRadius: "10px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  backButton: {
    marginTop: "10px",
    backgroundColor: "#aaa",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "10px",
    fontSize: "14px",
    cursor: "pointer",
  },
  message: {
    marginTop: "10px",
    color: "#2e7d32",
    fontWeight: "bold",
  },
};
