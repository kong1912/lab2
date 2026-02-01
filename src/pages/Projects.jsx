import { useTheme } from "../context/ThemeContext";

const Projects = () => {
  const { darkMode } = useTheme();

  const projects = [
    { id: 1, name: "Web App" },
    { id: 2, name: "Mobile App" },
    { id: 3, name: "Dashboard" },
  ];

  return (
    <div className={`rounded-lg p-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer ${
              darkMode 
                ? 'border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800' 
                : 'border-gray-300 bg-gradient-to-br from-white to-gray-100 text-black hover:from-gray-50 hover:to-gray-150'
            }`}
          >
            <h3 className="text-2xl font-bold mb-2 text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">{project.name}</h3>
            <p className="opacity-80">Project description goes here</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
