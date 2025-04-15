import { Link, useNavigate } from "react-router";
import { apiLogin } from "../../services/auth";

const Login = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await apiLogin(formData);
      const { user } = response.data;
      localStorage.setItem("token", response.data.accessToken); //fetch token from backend
      localStorage.setItem("user", JSON.stringify(user.role));

      //nagigate user to their role
      if (user.role === "vendor") {
        navigate("/dashboard");
      } else {
        navigate("/adverts");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative w-full h-screen overflow-hidden">
     

      <div className="absolute top-0 left-0 w-full h-full bg-[url(assets/images/kakum.avif)] bg-no-repeat bg-cover bg-center"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <div className="bg-green-950/70 backdrop-blur-md p-8 rounded-lg shadow-xl w-full max-w-md items-center relative border border-green-700/30">
          <h1 className="text-2xl font-semibold text-center mb-6 text-green-100">Log In</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-green-200"
              >
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
              <label
                htmlFor="password"
                className="block text-sm font-medium text-green-200"
              >
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
              <p className="text-sm text-yellow-400 hover:text-yellow-300 hover:underline mt-2">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-md hover:bg-green-600 transition shadow-md font-medium"
            >
              Log In
            </button>

            <p className="text-sm text-center text-green-200">
              No account yet?{" "}
              <a href="/signup" className="text-yellow-400 hover:text-yellow-300 hover:underline">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;



