import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { apiSignup } from "../../services/auth";
import { Link } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    setLoading(true);
    try {
      const response = await apiSignup(data);
      console.log("Signup successful:", response);
      setEmail(data.email);
      setSuccessMessage("Signup successful! Please activate your account to log in.");
      setTimeout(() => navigate(`/activateacc?email=${encodeURIComponent(data.email)}`), 3000);
    } catch (error) {
      if (error.response?.status === 409) {
        alert("Email already registered. Try logging in.");
      } else {
        console.error("Signup failed:", error);
        alert("Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-screen bg-[url(assets/images/nkrumah.png)] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative flex items-center justify-center h-full text-white">
        <div className="bg-green-950/70 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md items-center relative border border-green-700/30">
          <h1 className="text-2xl font-semibold text-center mb-6 text-green-100">Sign Up</h1>

          {loading && (
  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-600 via-green-500 to-green-700 bg-opacity-90 z-50 rounded-lg">
    <div className="bg-white px-6 py-4 rounded-md shadow text-green-800 font-semibold animate-pulse text-center">
      <p className="text-lg">Signing you up...</p>
    </div>
  </div>
)}


          {successMessage && (
            <div className="mb-4 p-3 bg-green-600 text-white rounded text-center text-sm">
              {successMessage} <br />
              <a href={`/activateacc?email=${encodeURIComponent(email)}`} className="underline text-white mt-1 inline-block">
                Click here to activate now
              </a>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                required
                className="w-full p-2 border border-green-600 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none bg-green-50/90 text-green-900"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-2 border border-green-600 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none bg-green-50/90 text-green-900"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full p-2 border border-green-600 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none bg-green-50/90 text-green-900"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                className="w-full p-2 border border-green-600 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none bg-green-50/90 text-green-900"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-600 transition shadow-md font-medium"
            >
              Sign Up
            </button>

            <p className="text-sm text-center text-white">
              Already have an account?{" "}
              <Link to="/login" className="text-sm text-yellow-400 hover:text-yellow-300 hover:underline mt-2">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
