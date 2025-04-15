import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { apiVerifyEmail } from "../../services/auth";

const Activateacc = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    verificationCode: "",
  });

  const [errors, setErrors] = useState({});

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation
    const newErrors = {};
    if (!formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }
    if (formData.verificationCode.length !== 6) {
      newErrors.verificationCode = "Code must be 6 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Exit if there are validation errors
    }

    try {
      const response = await apiVerifyEmail({
        email: formData.email,
        verificationCode: Number(formData.verificationCode),
      });
  
      console.log(response);
      navigate("/login"); // Navigate after successful API call
    } catch (error) {
      console.log(error); // Handle the error appropriately
    }

    console.log("Verification submitted:", formData);
  };

  return (
    <div className="relative h-screen bg-[url(assets/images/kinfallbg.png)] bg-cover bg-center">
  <div className="absolute inset-0 bg-black opacity-30"></div>

  <div className="relative flex items-center justify-center h-full">
    <div className="bg-gradient-to-r from-green-500 to-brown-700 p-8 rounded-lg shadow-lg w-full max-w-md text-white">
      <h2 className="text-2xl font-bold text-center mb-6">Verify Your Account</h2>

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full px-3 py-2 border rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Verification Code Input */}
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="verificationCode"
          >
            Verification Code *
          </label>
          <input
            type="text"
            id="verificationCode"
            name="verificationCode"
            value={formData.verificationCode}
            onChange={handleChange}
            placeholder="Enter 6-digit code"
            className={`w-full px-3 py-2 border rounded-lg ${
              errors.verificationCode ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.verificationCode && (
            <p className="text-red-500 text-xs mt-1">
              {errors.verificationCode}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none"
        >
          Verify
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default Activateacc;