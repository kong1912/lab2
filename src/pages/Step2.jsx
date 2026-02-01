import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Step2 = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormStore();

  const handleSubmit = () => {
    // Validation
    if (!formData.experience || !formData.skills) {
      alert("Please fill in all fields");
      return;
    }
    navigate("/apply/review");
  };

  return (
    <div>
      <h3 className="text-2d font-bold mb-6">Step 2: Experience & Skills</h3>

      {/* Experience */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Experience</label>
        <textarea
          placeholder="Describe your experience..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          rows="5"
          value={formData.experience}
          onChange={(e) => updateFormData({ experience: e.target.value })}
        ></textarea>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <label className="block mb-2 font-semibold">Skills</label>
        <textarea
          placeholder="List your skills..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          rows="3"
          value={formData.skills}
          onChange={(e) => updateFormData({ skills: e.target.value })}
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition font-medium"
        >
          ← Back
        </button>
        <button
          onClick={handleSubmit}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium ml-auto"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step2;
