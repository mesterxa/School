import { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import AdminDashboard from "./AdminDashboard"; // ✅ استيراد لوحة المشرف

export default function App() {
  const [page, setPage] = useState("home");
  const [userRole, setUserRole] = useState(""); // دور المستخدم (student, admin, ...)

  // عند تسجيل الدخول، نحدد الدور وننتقل إلى الصفحة المناسبة
  const handleLoginSuccess = (role) => {
    setUserRole(role);
    if (role === "admin") {
      setPage("admin");
    } else {
      setPage("home");
    }
  };

  // عند تسجيل الخروج
  const handleLogout = () => {
    setUserRole("");
    setPage("home");
  };

  return (
    <>
      {page === "home" && <Home onLogin={() => setPage("login")} />}
      {page === "login" && (
        <Login onRegister={() => setPage("register")} onLoginSuccess={handleLoginSuccess} />
      )}
      {page === "register" && <Register onBack={() => setPage("login")} />}
      
      {/* ✅ شرط عرض لوحة التحكم إذا كان المستخدم مشرف */}
      {page === "admin" && userRole === "admin" && (
        <AdminDashboard onLogout={handleLogout} />
      )}
    </>
  );
}
