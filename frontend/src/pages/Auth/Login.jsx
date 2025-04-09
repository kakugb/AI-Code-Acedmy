import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleDirectLogin = () => {
    // Optional: If you want to simulate a logged-in admin
    const fakeAdminUser = {
      name: "Admin User",
      role: "admin",
    };

    localStorage.setItem("user", JSON.stringify(fakeAdminUser));
    localStorage.setItem("isAuthenticated", "true");

    navigate("/adminDashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Click to go to admin dashboard</p>
        </div>

        <button
          onClick={handleDirectLogin}
          className="w-full bg-[#224289] text-white rounded-lg py-3 font-medium transition duration-200"
        >
          Go to Admin Dashboard
        </button>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
