import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");

  const userRole =
    localStorage.getItem("role") || sessionStorage.getItem("role");

  // 🔐 Not logged in
  if (!token || !userRole) {
    return <Navigate to="/auth" replace />;
  }

  // 🚫 Role not allowed
  if (role && userRole !== role) {
    return <Navigate to="/" replace />;
  }

  // ✅ Access granted
  return children;
};

export default ProtectedRoute;
