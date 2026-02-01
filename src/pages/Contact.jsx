import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`max-w-2xl mx-auto rounded-lg p-8 transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors duration-300 ${
              darkMode 
                ? 'border-gray-600 bg-gray-800 text-white focus:ring-blue-500' 
                : 'border-gray-300 bg-white text-black focus:ring-blue-500'
            }`}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors duration-300 ${
              darkMode 
                ? 'border-gray-600 bg-gray-800 text-white focus:ring-blue-500' 
                : 'border-gray-300 bg-white text-black focus:ring-blue-500'
            }`}
            placeholder="Your email"
          />
        </div>
        <div>
          <label className="block mb-2">Message</label>
          <textarea
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition-colors duration-300 ${
              darkMode 
                ? 'border-gray-600 bg-gray-800 text-white focus:ring-blue-500' 
                : 'border-gray-300 bg-white text-black focus:ring-blue-500'
            }`}
            rows="5"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
