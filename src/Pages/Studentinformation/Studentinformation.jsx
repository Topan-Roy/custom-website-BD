import React from 'react';
import { Link } from 'react-router';

const Studentinformation = () => {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center py-10">
      <div className="bg-white w-[700px] px-10 py-10 rounded-xl shadow-md">


        <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#614EFE] via-[#903CD1] to-[#7D359F] bg-clip-text text-transparent">
          Personal Information
        </h1>

        <p className="text-[#4B5563] mt-1 text-sm">
          Please provide your basic personal information to begin the verification process.
        </p>


        <div className="mt-6">
          <h2 className="text-md font-semibold bg-gradient-to-r from-[#614EFE] via-[#903CD1] to-[#7D359F] bg-clip-text text-transparent">Profile Picture</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg h-40 mt-2
                          flex items-center justify-center text-gray-500 text-md">
            Upload a file  or drag and drop
          </div>
          <p className="text-[#101010] text-sm mt-1">
            Upload a clear, professional photo of yourself. This will be used for identification purposes.
          </p>
        </div>


        <div className="mt-6">
          <h2 className="text-md font-semibold bg-gradient-to-r from-[#614EFE] via-[#903CD1] to-[#7D359F] bg-clip-text text-transparent">Bio</h2>
          <textarea
            placeholder="Upload a file  or drag and drop"
            className="w-full border border-gray-300 rounded-lg p-3 mt-2 h-20 text-sm focus:ring-purple-400 focus:border-purple-400"
          ></textarea>
        </div>


        <div className="grid grid-cols-2 gap-5 mt-6">
          <div>
            <label className="text-md font-semibold bg-gradient-to-r from-[#614EFE]  to-[#7D359F] bg-clip-text text-transparent">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-sm focus:ring-purple-400 focus:border-purple-400"
            />
          </div>

          <div>
            <label className="text-md font-semibold bg-gradient-to-r from-[#614EFE]  to-[#7D359F] bg-clip-text text-transparent">Date of Birth <span className="text-red-500">*</span></label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-sm focus:ring-purple-400 focus:border-purple-400"
            />
          </div>
        </div>


        <div className="mt-6">
          <label className="text-md font-semibold bg-gradient-to-r from-[#614EFE] to-[#7D359F] bg-clip-text text-transparent">Phone Number <span className="text-red-500">*</span></label>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-sm focus:ring-purple-400 focus:border-purple-400"
          />
        </div>


        <div className="mt-6">
          <label className="text-md font-semibold bg-gradient-to-r from-[#614EFE]  to-[#7D359F] bg-clip-text text-transparent">Email <span className="text-red-500">*</span></label>
          <input
            type="email"
            placeholder="Username or Email"
            className="w-full border border-gray-300 rounded-lg p-2 mt-1 text-sm focus:ring-purple-400 focus:border-purple-400"
          />
        </div>


        <div className="mt-8">
          <h2 className="text-md font-semibold bg-gradient-to-r from-[#614EFE] via-[#903CD1] to-[#7D359F] bg-clip-text text-transparent">Interested Subject</h2>

          <div className="grid grid-cols-3 gap-y-3 mt-3 text-sm text-gray-700">
            {[
              "English", "Mathematics", "Physics",
              "Science", "History", "Computer Science",
              "Geography", "Chemistry", "Physical Education",
              "Biology", "Art", "Economics",
              "Music", "Foreign Languages", "Special Education",
              "Social Studies", "Business Studies", "Religious Studies"
            ].map((subject, index) => (
              <label
                key={index}
                className="flex items-center gap-2 text-[#101010]  cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#6657E2] cursor-pointer"
                />
                {subject}
              </label>
            ))}
          </div>

        </div>

        <Link to="/dashboard">
          <button className="w-full mt-8 py-3 text-white rounded-lg 
                           bg-gradient-to-r from-[#6657E2] via-[#903CD1] to-[#903CD1] 
                           hover:opacity-90 transition font-medium">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Studentinformation;