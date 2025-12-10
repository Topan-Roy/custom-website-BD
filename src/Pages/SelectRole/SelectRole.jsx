import React from 'react';
import { Link } from 'react-router';

const SelectRole = () => {
    return (
         <div className="w-full h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[500px] text-center">
        <h2 className="text-gray-700 mb-6 font-medium">Please select:</h2>

        <Link to="/studentinformation">
        <button className="w-full py-3 rounded-lg mb-4 text-white font-medium 
          bg-gradient-to-r from-[#6657E2] via-[#903CD1] to-[#903CD1]
          hover:opacity-90 transition">
          Student
        </button>
        </Link>
        <Link to="/tutorinformation">
        
       
        <button className="w-full py-3 rounded-lg text-white font-medium 
          bg-gradient-to-r from-[#FFC30B] via-[#8113B5] to-[#8113B5]
          hover:opacity-90 transition">
          Tutor
        </button>
         </Link>
      </div>
    </div>
    );
};

export default SelectRole;