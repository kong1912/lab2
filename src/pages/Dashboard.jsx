import { useSearchParams, Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Dashboard = () => {
  const { user, logout } = useAuthStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("status") || "all";

  const projects = [
    { id: 1, name: "Website Redesign", status: "done" },
    { id: 2, name: "Mobile App", status: "todo" },
    { id: 3, name: "Database Migration", status: "done" },
    { id: 4, name: "API Development", status: "todo" },
  ];

  const handleFilterChange = (status) => {
    setSearchParams({ status }); // อัพเดท URL
  };

  const filteredProjects =
    currentFilter === "all"
      ? projects
      : projects.filter((p) => p.status === currentFilter);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold">Project Dashboard</h1>
            <p className="text-gray-600 mt-2">
              Welcome, <strong>{user.name}</strong> ({user.role})
            </p>
          </div>
          <div className="space-x-3">
            {user.role === "admin" && (
              <Link
                to="/admin-settings"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium"
              >
                Admin Settings
              </Link>
            )}
            <button
              onClick={() => {
                logout();
                window.location.href = "/login";
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-medium"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 mb-6">
          {["all", "todo", "done"].map((s) => (
            <button
              key={s}
              onClick={() => handleFilterChange(s)}
              className={`px-4 py-2 rounded-lg transition font-medium ${
                currentFilter === s
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="bg-white border rounded-lg shadow-lg p-4">
          <h2 className="text-2d font-bold mb-4">
            Projects <strong>({currentFilter})</strong>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-4 border border-gray-200 rounded-lg hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                <p
                  className={`text-sm py-1 bg-blue-100 text-blue-800 rounded-full text-sm inline-block px-3 py-1 mt-2`}
                >
                  {project.status}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
