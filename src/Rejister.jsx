import { useState } from "react";

export default function Register({ onBack }) {
  const [fade, setFade] = useState(true);

  return (
    <div
      style={{
        ...styles.container,
        opacity: fade ? 1 : 0,
        transform: fade ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <div style={styles.card}>
        <h2 style={styles.title}>إنشاء حساب جديد</h2>
        <p style={styles.subtitle}>املأ المعلومات لإنشاء حسابك المدرسي</p>

        <form style={styles.form}>
          <input type="text" placeholder="الاسم الكامل" style={styles.input} />
          <input type="text" placeholder="اسم المستخدم" style={styles.input} />
          <input type="email" placeholder="البريد الإلكتروني" style={styles.input} />
          <input type="password" placeholder="كلمة المرور" style={styles.input} />

          <button type="submit" style={styles.button}>
            إنشاء الحساب
          </button>
        </form>

        <p style={styles.backText}>
          لديك حساب؟{" "}
          <span style={styles.link} onClick={onBack}>
            عودة للرئيسية
          </span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    direction: "rtl",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #e3f2fd 0%, #f1f8e9 100%)",
    fontFamily: "'Cairo', sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "90%",
    maxWidth: "420px",
    textAlign: "center",
  },
  title: { fontSize: "26px", color: "#0d47a1", marginBottom: "10px" },
  subtitle: { color: "#555", marginBottom: "25px" },
  form: { display: "flex", flexDirection: "column", gap: "15px" },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#2e7d32",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
  link: {
    color: "#2e7d32",
    cursor: "pointer",
    fontWeight: "600",
  },
  backText: { marginTop: "20px", color: "#333" },
};
