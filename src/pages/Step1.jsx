import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Step1 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  const handleNext = () => {
    // Validation - check if all fields are filled
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in all fields");
      return;
    }
    navigate("/apply/step-2");
  };

  return (
    <div>
      <h3 className="text-2d font-bold mb-6">Step 1: Personal Info</h3>

      {/* First Name */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">First Name</label>
        <input
          type="text"
          placeholder="Enter your first name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={formData.firstName}
          onChange={(e) => updateFormData({ firstName: e.target.value })}
        />
      </div>

      {/* Last Name */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Last Name</label>
        <input
          type="text"
          placeholder="Enter your last name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={formData.lastName}
          onChange={(e) => updateFormData({ lastName: e.target.value })}
        />
      </div>

      {/* Email */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          value={formData.email}
          onChange={(e) => updateFormData({ email: e.target.value })}
        />
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
      >
        Next →
      </button>
    </div>
  );
};

export default Step1;
