import React, { useState } from "react";
import { useNavigate } from "react-router"; 
import { apiForgotPassword } from "../../services/auth";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await apiForgotPassword({ email });
      console.log(response);

      setMessage("A password reset code has been sent to your email.");
      
      // ✅ Navigate to reset page after a short delay (optional)
      setTimeout(() => navigate("/resetpassword"), 2000);
    } catch (error) {
      setMessage("Failed to send reset code. Try again.");
      console.error(error);
    }
  };

  return (
    <div className="relative h-screen bg-[url(assets/images/canoe.avif)] bg-cover bg-center">
    <div className="absolute inset-0 bg-black opacity-30"></div>

    <div className="relative flex flex-col items-center justify-center h-full text-white">
      <div className="bg-green-950/70 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md items-center relative border border-green-700/30">
        <h2 className="text-lg font-bold mb-4 text-center">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-600 transition shadow-md font-medium"
          >
            Send Reset Code
          </button>
        </form>
        {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
      </div>
    </div>
  </div>
);
};

export default Forgotpassword
