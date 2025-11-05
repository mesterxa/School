import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Home() {
  const [page, setPage] = useState("home");
  const [fade, setFade] = useState(true);

  const navigateTo = (target) => {
    setFade(false);
    setTimeout(() => {
      setPage(target);
      setFade(true);
    }, 300);
  };

  if (page === "login") return <Login onBack={() => navigateTo("home")} />;
  if (page === "register") return <Register onBack={() => navigateTo("home")} />;

  return (
    <div
      style={{
        ...styles.container,
        opacity: fade ? 1 : 0,
        transform: fade ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {/* Header */}
      <header style={styles.header}>
        <img src="/images/photo1.png" alt="Logo" style={styles.logo} />
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>الرئيسية</a>
          <a href="#" style={styles.navLink}>عن المدرسة</a>
          <a href="#" style={styles.navLink}>الخدمات</a>
          <a href="#" style={styles.navLink}>تواصل معنا</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={styles.main}>
        <div style={styles.heroText}>
          <h1 style={styles.title}>مرحبًا بكم في منصة المدرسة الذكية</h1>
          <p style={styles.subtitle}>
            إدارة الغيابات، الحضور، والدفع بسهولة واحترافية عبر واجهة بسيطة ومتكاملة.
          </p>

          <div style={styles.buttonGroup}>
            <button
              style={{ ...styles.button, backgroundColor: "#1565c0" }}
              onClick={() => navigateTo("login")}
            >
              تسجيل الدخول
            </button>
            <button
              style={{ ...styles.button, backgroundColor: "#2e7d32" }}
              onClick={() => navigateTo("register")}
            >
              إنشاء حساب
            </button>
          </div>
        </div>

        <div style={styles.heroImageContainer}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6615/6615454.png"
            alt="School Illustration"
            style={{
              ...styles.heroImage,
              transform: fade ? "translateY(0)" : "translateY(30px)",
              transition: "transform 0.8s ease",
            }}
          />
        </div>
      </main>

      {/* Features */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>مميزات النظام</h2>
        <div style={styles.featureGrid}>
          {[
            {
              title: "إدارة الطلاب",
              desc: "عرض بيانات الطلاب، الغيابات، والعلامات بسهولة.",
              icon: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
            },
            {
              title: "لوحة الأساتذة",
              desc: "إدارة الدروس والحصص، وتسجيل الحضور بنقرة واحدة.",
              icon: "https://cdn-icons-png.flaticon.com/512/2989/2989988.png",
            },
            {
              title: "إدارة الدفع",
              desc: "نظام آمن لتتبع ودفع المستحقات المالية.",
              icon: "https://cdn-icons-png.flaticon.com/512/2331/2331970.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                ...styles.featureCard,
                transform: fade ? "scale(1)" : "scale(0.95)",
                opacity: fade ? 1 : 0.5,
                transition: `all 0.6s ease ${i * 0.1}s`,
              }}
            >
              <img src={item.icon} alt={item.title} style={styles.featureIcon} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>
          📞 الهاتف / واتساب:{" "}
          <a href="https://wa.me/213656687281" style={styles.link}>
            0656687281
          </a>
        </p>
        <p>
          🌐 صفحتنا على الفايسبوك:{" "}
          <a href="https://www.facebook.com/acm.ei.2025" style={styles.link}>
            facebook.com/acm.ei.2025
          </a>
        </p>
        <p>© 2025 مدرسة النخبة الخاصة - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    direction: "rtl",
    fontFamily: "'Cairo', sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f7f9fc",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 40px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  logo: { width: "60px", borderRadius: "50%" },
  nav: { display: "flex", gap: "25px" },
  navLink: {
    color: "#333",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "15px",
    transition: "color 0.3s",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "60px 10%",
    flexWrap: "wrap",
    background: "linear-gradient(135deg, #e3f2fd 0%, #f1f8e9 100%)",
  },
  heroText: { flex: "1 1 400px", textAlign: "right" },
  title: { fontSize: "32px", color: "#0d47a1", marginBottom: "15px" },
  subtitle: { fontSize: "18px", color: "#333", marginBottom: "25px" },
  buttonGroup: { display: "flex", gap: "15px", justifyContent: "flex-end" },
  button: {
    padding: "12px 25px",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background 0.3s, transform 0.2s",
  },
  heroImageContainer: { flex: "1 1 400px", textAlign: "center" },
  heroImage: { width: "320px", maxWidth: "100%" },
  features: { padding: "60px 10%", backgroundColor: "#fff" },
  sectionTitle: { fontSize: "26px", color: "#0d47a1", marginBottom: "40px", textAlign: "center" },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },
  featureCard: {
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    textAlign: "center",
  },
  featureIcon: { width: "70px", marginBottom: "15px" },
  footer: {
    backgroundColor: "#0d47a1",
    color: "white",
    textAlign: "center",
    padding: "20px",
    fontSize: "14px",
    lineHeight: "1.6",
  },
  link: {
    color: "#ffeb3b",
    textDecoration: "none",
    fontWeight: "bold",
  },
};
