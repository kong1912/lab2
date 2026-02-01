import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const AdminSettings = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleDeleteProject = (id) => {
    alert(`Project ${id} deleted (Admin only feature)`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Admin Settings</h1>
            <p className="text-gray-600 mt-2">Logged in as: <strong>{user.name}</strong></p>
          </div>
          <div className="space-x-3">
            <button
              onClick={() => navigate("/dashboard")}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition font-medium"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Admin Panel */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2d font-bold mb-4">Project Management</h2>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <h3 className="font-semibold">Website Redesign</h3>
                <p className="text-gray-500 text-sm">Status: Done</p>
              </div>
              <button
                onClick={() => handleDeleteProject(1)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete Project
              </button>
            </div>

            <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <h3 className="font-semibold">Mobile App</h3>
                <p className="text-gray-500 text-sm">Status: Todo</p>
              </div>
              <button
                onClick={() => handleDeleteProject(2)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete Project
              </button>
            </div>

            <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <h3 className="font-semibold">Database Migration</h3>
                <p className="text-gray-500 text-sm">Status: Done</p>
              </div>
              <button
                onClick={() => handleDeleteProject(3)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Delete Project
              </button>
            </div>
          </div>
        </div>

        {/* Admin Info */}
        <div className="mt-6 bg-purple-50 border border-purple-200 p-6 rounded-lg">
          <h3 className="font-semibold text-purple-900">Admin Features</h3>
          <ul className="mt-3 text-purple-800 text-sm space-y-2">
            <li>✓ Delete projects</li>
            <li>✓ Manage user roles</li>
            <li>✓ View system analytics</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
