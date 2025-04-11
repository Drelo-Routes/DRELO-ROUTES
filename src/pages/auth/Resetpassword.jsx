import React from 'react';
import { useNavigate } from 'react-router';
import { apiResetPassword } from "../../services/auth";

const Resetpassword = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      code: formData.get("code"),
      newPassword: formData.get("newPassword"),
      confirmNewPassword: formData.get("confirmNewPassword"),
    };

    try {
      const response = await apiResetPassword(data);
      const { user } = response.data;

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(user.role));

      navigate("/login");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-md items-center relative">
          <h1 className="text-2xl font-semibold text-center mb-6">Reset Password</h1>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="code" className="block text-sm font-medium text-white">
                Code
              </label>
              <input
                type="text"
                id="code"
                name="code"
                placeholder="Enter the code sent to your email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-white">
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="Enter your new password"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-white">
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder="Confirm your new password"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Reset Password
            </button>

            <p className="text-sm text-center text-white">
              No account yet?{" "}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;