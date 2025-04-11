import React, { useState } from "react";
import { Link } from "react-router";
import { apiForgotPassword } from "../../services/auth";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await apiForgotPassword({email});

      // Simulate API request
      setTimeout(() => {
        setMessage("A password reset link has been sent to your email.");
      }, 1000);
      console.log(response);
    } catch (error) {
      setMessage("Failed to send reset link. Try again.");
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url(assets/pics/phone.jpg)] bg-cover">
      <h2 className="text-lg font-bold text-white">
        Enter Mail To Reset Your Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded-md w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Send Reset Link
        </button>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-10"
        >
          <Link to="/resetpassword">Reset Password</Link>
        </button>
      </form>
      {message && <p className="mt-2 text-green-300">{message}</p>}
    </div>
  );









  
};

export default Forgotpassword
