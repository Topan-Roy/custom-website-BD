import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';

const LoginPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "https://abilities-wav-behind-outdoors.trycloudflare.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      const user = res.data.response.data;
      const token = res.data.response.tokens.access.token;

      // save token
      localStorage.setItem("token", token);
      localStorage.setItem("role", user.role);

      alert("Login successful");

      // 👉 role based redirect
      if (user.role === "student") {
        navigate("/dashboard");
      } else if (user.role === "teacher") {
        navigate("/toturdashbord");
      } else {
        navigate("/");
      }

    } catch (error) {
      console.log("LOGIN ERROR:", error);
      alert("Email or Password wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl w-full max-w-lg px-16 py-40 shadow-xl">

        <div className="mb-12">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#614EFE] to-[#7D359F] bg-clip-text text-transparent">
            Login to your account
          </h2>

          <p className="text-sm text-[#585858] mt-3">
            Don't have an account?{" "}
            <a
              href="/selectrole"
              className="bg-gradient-to-r from-[#614EFE] to-[#7D359F] bg-clip-text text-transparent font-medium"
            >
              Register
            </a>
          </p>
        </div>

        <form onSubmit={handleLogin}>

          <div className="mb-7">
            <label className="block text-sm font-medium text-[#585858]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-2 block w-full px-2 py-2 border border-gray-300 rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-[#585858]">
              Password
            </label>
            <input
              type="password"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Link to="/recoveraccount">
            <p className="text-md text-[#585858] mb-3">Forgot Password?</p>
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default LoginPage;
