import React from 'react';
import { Link } from 'react-router';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">

      <div className="bg-white rounded-2xl w-full max-w-lg px-16 py-40 shadow-xl">


        <div className=" mb-12">
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-[#614EFE] to-[#7D359F] bg-clip-text text-transparent">
            Login to your account
          </h2>

          <p className="text-sm text-[#585858] mt-3">
            Don't have an account?{' '}
            <a
              href="/selectrole"
              className="bg-gradient-to-r from-[#614EFE] to-[#7D359F] bg-clip-text text-transparent font-medium"
            >
              Register
            </a>
          </p>

        </div>


        <form>

          <div className="mb-7">
            <label htmlFor="email" className="block text-sm font-medium text-[#585858]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-2 block w-full px-2 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Email Address"
              required
            />
          </div>


          <div className="mb-5">
            <label htmlFor="password" className="block text-sm font-medium text-[#585858]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Password"
              required
            />
          </div>


          <Link to="/recoveraccount">
            <div className="font-normal  mb-3">
              <p className='className="text-md text-[#585858]'> Forgot Password? </p>
            </div>
          </Link>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

      </div>

    </div>
  );
};

export default LoginPage;
