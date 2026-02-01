import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`text-center rounded-lg p-12 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-black'}`}>
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Welcome to My Portfolio</h1>
      <p className="text-lg mb-8 leading-relaxed opacity-90">
        Hi! I'm a full-stack developer passionate about creating amazing web experiences.
      </p>
      <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold">
        Get Started
      </button>
    </div>
  );
};

export default Home;
