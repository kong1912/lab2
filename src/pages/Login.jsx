import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleLoginAdmin = () => {
    login({ name: "Admin User", role: "admin" });
    navigate("/dashboard");
  };

  const handleLoginUser = () => {
    login({ name: "Regular User", role: "user" });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        {/* Admin Login */}
        <button
          onClick={handleLoginAdmin}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold mb-3"
        >
          Login as Admin
        </button>

        {/* User Login */}
        <button
          onClick={handleLoginUser}
          className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-semibold"
        >
          Login as User
        </button>
      </div>
    </div>
  );
};

export default Login;
