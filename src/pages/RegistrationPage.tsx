import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState<string>("");
  const [age, setAge] = useState<number | "">("");
  const [submissionStatus, setSubmissionStatus] = useState<string>("");
  const [form, setForm] = useState<{ [key: string]: string }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Calculate the maximum allowed date (18 years ago from today)
  const today = new Date();
  const maxDate = new Date(today.setFullYear(today.getFullYear() - 18)).toISOString().split("T")[0];

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age -= 1;
    }
    return age;
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    // Phone number validation (exactly 10 digits)
    if (form.phoneNumber && !/^\d{10}$/.test(form.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits";
    }

    // Age validation (18 or older)
    if (age !== "" && (age < 18 || age < 0)) {
      newErrors.age = "You must be 18 or older to register";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleForm = (e: any) => {
    const { name, value } = e.target;

    if (name === "dateOfBirth") {
      setDob(value);
      const calculatedAge = calculateAge(value);
      setAge(calculatedAge);
      // Validate age immediately after calculation
      const newErrors = { ...errors };
      if (calculatedAge < 18 || calculatedAge < 0) {
        newErrors.age = "You must be 18 or older to register";
      } else {
        delete newErrors.age;
      }
      setErrors(newErrors);
    }

    setForm({
      ...form,
      [name]: value,
    });
    
    // Clear other errors when user starts typing
    if (errors[name] && name !== "dateOfBirth") {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const response = await fetch("http://localhost:8080/demo", {
      method: "POST",
      body: JSON.stringify({ ...form, age }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      setSubmissionStatus("Registered successfully!");
      setForm({});
      setDob("");
      setAge("");
      e.target.reset();
    } else {
      setSubmissionStatus("Submission failed. Please try again.");
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google User Signed In:", user);
      localStorage.setItem("token", user.uid);
      alert("Successfully signed in with Google!");
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Google Sign-In error:", error.message);
        alert("Google Sign-In failed. Please try again.");
      } else {
        console.error("Unknown error:", error);
        alert("An unknown error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl border border-gray-200">
        <h2 className="text-4xl font-semibold text-center mb-8 text-[#333]">
          Create an Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#333] font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
                name="FullName"
                onChange={handleForm}
                required
              />
            </div>

            <div>
              <label className="block text-[#333] font-medium mb-2">
                Phone Number
              </label>
              <input
                type="text"
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
                placeholder="Enter your phone number"
                name="phoneNumber"
                onChange={handleForm}
                required
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-[#333] font-medium mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                max={maxDate}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg ${
                  errors.age ? "border-red-500" : ""
                }`}
                name="dateOfBirth"
                onChange={handleForm}
                required
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1">{errors.age}</p>
              )}
            </div>

            <div>
              <label className="block text-[#333] font-medium mb-2">Age</label>
              <input
                type="number"
                value={age}
                readOnly
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"
                name="age"
              />
            </div>

            <div>
              <label className="block text-[#333] font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
                name="Email"
                onChange={handleForm}
                required
              />
            </div>

            <div>
              <label className="block text-[#333] font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                placeholder="Enter your password"
                name="password"
                onChange={handleForm}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-[#6c63ff] text-white py-3 rounded-lg hover:bg-[#574bff] transition duration-300 text-lg shadow-md"
            disabled={!!errors.age || !!errors.phoneNumber}
          >
            Sign Up
          </button>
        </form>

        {submissionStatus && (
          <div className="mt-4 text-center">
            <p
              className={`text-lg font-semibold ${
                submissionStatus.includes("failed")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {submissionStatus}
            </p>
          </div>
        )}

        <div className="mt-4 text-center">
          <p className="text-[#555]">
            Already have an account?{" "}
            <Link to="/login" className="text-[#6c63ff] hover:underline">
              Log In
            </Link>
          </p>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={signInWithGoogle}
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;