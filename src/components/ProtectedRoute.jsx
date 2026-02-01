import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuthStore();

  if (!user) {
    // ถ้ายัง Login ให้ไปหน้า Login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // ถ้า Role ไม่ตรง ให้ alert แล้ว redirect ไป Dashboard
    alert("Access Denied: Admin Only!");
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
