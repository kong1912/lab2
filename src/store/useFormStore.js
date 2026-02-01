import { create } from "zustand";

export const useFormStore = create((set) => ({
  formData: {
    firstName: "",
    lastName: "",
    email: "",
    experience: "",
    skills: "",
  },

  // Update form data (Partial - only update specified fields)
  updateFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),

  // Reset form to initial state
  resetForm: () =>
    set({
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        experience: "",
        skills: "",
      },
    }),
}));
