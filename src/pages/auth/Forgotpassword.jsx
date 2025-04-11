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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-lg font-bold mb-4">Reset Your Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Send Reset Code
        </button>
      </form>
      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
};

export default Forgotpassword
