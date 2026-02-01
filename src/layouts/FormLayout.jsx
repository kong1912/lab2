import { Outlet, useLocation } from "react-router-dom";

const FormLayout = () => {
  const location = useLocation();

  // Calculate % of progress based on Path
  const getProgress = () => {
    if (location.pathname.includes("step-1")) return "33%";
    if (location.pathname.includes("step-2")) return "66%";
    if (location.pathname.includes("review")) return "100%";
    return "0%";
  };

  return (
    <div className="max-w-3xl mx-auto mt-auto p-6 border rounded-lg shadow-lg">
      <h2 className="text-2d font-bold mb-4">Job Application</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 h-2 mb-6 rounded-full overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all duration-500"
          style={{ width: getProgress() }}
        ></div>
      </div>

      <div className="bg-white p-4">
        <Outlet /> {/* เนื้อหา Step 1, 2, Review จะแสดงที่นี่ */}
      </div>
    </div>
  );
};

export default FormLayout;
