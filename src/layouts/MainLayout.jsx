import { Link, Outlet } from "react-router-dom";
import { useTheme } from "./../context/ThemeContext";

const MainLayout = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300 min-h-screen flex flex-col`}>
      <nav className={`p-4 flex justify-between items-center border-b transition-colors duration-300 shadow-md ${darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-gray-50'}`}>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">MyPortfolio</h1>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="hover:text-blue-500 hover:scale-110 transition-transform duration-200">Home</Link>
          <Link to="/projects" className="hover:text-blue-500 hover:scale-110 transition-transform duration-200">Projects</Link>
          <Link to="/contact" className="hover:text-blue-500 hover:scale-110 transition-transform duration-200">Contact</Link>
          <button
            onClick={toggleTheme}
            className={`fixed top-4 right-4 z-50 p-3 rounded-full shadow-lg hover:scale-125 hover:shadow-xl transition-all duration-300 ${
              darkMode ? 'bg-white text-black' : 'bg-black text-white'
            }`}
          >
            {darkMode ? '☀️' : '🌕'}
          </button>
        </div>
      </nav>

      <main className={`flex-1 p-8 transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;
