import { useNavigate } from "react-router-dom";
import { useFormStore } from "../store/useFormStore";

const Review = () => {
  const navigate = useNavigate();
  const { formData, resetForm } = useFormStore();

  const handleCompleted = () => {
    alert("Application submitted successfully!");
    resetForm();
    navigate("/");
  };

  return (
    <div>
      <h3 className="text-2d font-bold mb-6">Review Your Application</h3>

      {/* Data Summary */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6 space-y-4">
        <div className="border-b pb-4">
          <h4 className="font-semibold text-gray-700">Personal Information</h4>
          <p className="text-gray-600 mt-2">
            <strong>Name:</strong> {formData.firstName} {formData.lastName}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {formData.email}
          </p>
        </div>

        <div className="border-b pb-4">
          <h4 className="font-semibold text-gray-700">Experience</h4>
          <p className="text-gray-600 mt-2 whitespace-pre-wrap">{formData.experience}</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-700">Skills</h4>
          <p className="text-gray-600 mt-2 whitespace-pre-wrap">{formData.skills}</p>
        </div>
      </div>

      {/* Completed Message */}
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center mb-6">
        <p className="text-green-700 font-semibold text-lg">✓ Application Complete</p>
        <p className="text-green-600 mt-2">Your application has been submitted successfully!</p>
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
          onClick={handleCompleted}
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition font-medium ml-auto"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Review;
