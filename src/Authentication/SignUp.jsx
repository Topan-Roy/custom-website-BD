import React from "react";
import { Link, useNavigate } from "react-router";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const role = e.target.role.value;

    // 👉 always go to enterverification page
    navigate("/enterverification", {
      state: { role },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl w-full max-w-lg px-16 py-32 shadow-xl">

        <div className="mb-12">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#614EFE] to-[#7D359F] bg-clip-text text-transparent">
            Create an account
          </h2>

          <p className="text-sm text-[#585858] mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="bg-gradient-to-r from-[#614EFE] to-[#7D359F] bg-clip-text text-transparent font-medium"
            >
              Login
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#585858]">
              Full Name *
            </label>
            <input
              type="text"
              className="mt-2 w-full px-3 py-2 border rounded-lg"
              placeholder="Full Name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#585858]">
              Email *
            </label>
            <input
              type="email"
              className="mt-2 w-full px-3 py-2 border rounded-lg"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#585858]">
              Password *
            </label>
            <input
              type="password"
              className="mt-2 w-full px-3 py-2 border rounded-lg"
              placeholder="Password"
              required
            />
          </div>

          {/* Role */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-[#585858]">
              Select Role *
            </label>
            <select
              name="role"
              className="mt-2 w-full px-3 py-2 border rounded-lg"
            >
              <option value="student">Student</option>
              <option value="teacher">Tutor</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg"
          >
            Sign Up
          </button>

        </form>

      </div>
    </div>
  );
};

export default SignUp;
