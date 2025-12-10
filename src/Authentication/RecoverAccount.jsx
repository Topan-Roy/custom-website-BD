import React from "react";
import { Link } from "react-router";

const RecoverAccount = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl w-full max-w-lg px-16 py-50 shadow-xl"> 
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#614EFE] via-[#7D359F] to-[#7D359F] bg-clip-text text-transparent">
          Recover Account
        </h2>

        <p className="text-[#585858] font-normal text-sm mt-3 leading-relaxed">
          Enter your email and we will send you a recovery code
        </p>

        <div className="mt-10">
          <label className="text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="text"
            placeholder="Username or Email"
            className="w-full border border-gray-300 rounded-xl p-3 mt-3 text-sm focus:ring-purple-400 focus:border-purple-400"
          />
        </div>

        <Link to='/enterverification'>
        <button className="w-full mt-10 bg-gradient-to-r from-[#6657E2] to-[#903CD1] text-white py-3 rounded-full text-base font-medium shadow-sm">
          Send Recovery Email
        </button>
    </Link>
      </div>
    </div>
  );
};

export default RecoverAccount;
