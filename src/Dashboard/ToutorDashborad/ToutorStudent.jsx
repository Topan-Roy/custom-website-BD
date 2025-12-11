import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import logo1 from "../../assets/IMG_8.png";
import logo2 from "../../assets/business_center.png";

import logo4 from "../../assets/payments.png";
import { Link } from "react-router";

const ToutorStudent = () => {
  const tutors = [
  {
    id: 1,
    name: "Rokey Mahmud",
    subject: "mdrokey742@gmail.com",
    experience: "5 years",
    rating: "4.5",
    price: "$45/hr",
    description:
      "Hi! I’m an experienced English teacher specializing in grammar, spoken English and academic writing….",
    avatar: logo1,
    expIcon: logo2,
    ratingIcon: logo4,
    priceIcon: logo2,
  },
  {
    id: 2,
    name: "Sadia Khan",
    subject: "mdrokey742@gmail.com",
    experience: "3 years",
    rating: "4.8",
    price: "$30/hr",
    description:
      "Experienced Math tutor specializing in algebra and geometry for all levels….",
    avatar: logo1,
    expIcon: logo2,
    ratingIcon: logo4,
    priceIcon: logo2,
  },
  {
    id: 3,
    name: "Arif Uddin",
    subject: "mdrokey742@gmail.com",
    experience: "7 years",
    rating: "4.9",
    price: "$50/hr",
    description:
      "Physics specialist with strong experience in mechanics and exam prep….",
    avatar: logo1,
    expIcon: logo2,
    ratingIcon: logo4,
    priceIcon: logo2,
  },
  
];

  return (
    <div className="rounded-2xl mb-1">


      <h2 className="text-[22px] font-semibold text-[#6657E2]">
       My Students
      </h2>
      <p className="text-gray-500 text-sm mt-1">
      View and manage your students and their lesson progress.
      </p>

      <div className="p-3 mt-5 rounded-2xl bg-white">
        <div className="flex flex-col sm:flex-row items-center gap-3">

          <div className="
      flex items-center bg-[#EBEBEB] border border-[#E5E7EB]
      px-3 h-[52px] rounded-xl w-full sm:max-w-[600px] shadow-sm
    ">
            <span className="text-gray-400 text-xl mr-3">
              <IoSearch />
            </span>

            <input
              type="text"
              placeholder="Search by name, subject, language"
              className="w-full bg-transparent outline-none text-[15px] placeholder-gray-400"
            />
          </div>

        
        </div>
      </div>



<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {tutors.map((item) => (
    <div key={item.id} className="bg-white rounded-xl shadow-md p-5">

      {/* Profile */}
      <div className="flex items-center gap-3 mt-5">
        <img src={item.avatar} alt="" className="w-11 h-11 rounded-full" />
        <div className="w-full">
          <h3 className="font-semibold text-[17px]">{item.name}</h3>

          {/* Subject → force 2 line max + wrap */}
          <p className="text-gray-500 text-sm leading-[18px] break-words line-clamp-2">
            {item.subject}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#7A7A7A] text-sm mt-4 leading-relaxed line-clamp-2">
        {item.description}
      </p>

      <p className="text-[#7C7C7C] mt-3 text-sm mb-2">Interested Subjects</p>

      {/* Interested Subjects badges — perfect wrapping */}
  <div className="flex flex-wrap gap-2 max-h-[60px] overflow-hidden">
  {["English", "Literature", "Easy Writing", "Creative Writing"].map((sub) => (
    <span
      key={sub}
      className="px-3 py-1 text-sm rounded-full bg-[#EBEBEB] border border-[#E3E3FF]
      bg-clip-text text-transparent [background-image:linear-gradient(90deg,#6657E2,#903CD1)]
      whitespace-normal">
      {sub}
    </span>
  ))}
</div>




      {/* Button */}
      <Link to="/dashboard/tutordetails">
        <button
          className="w-full mt-5 py-3 text-white font-medium rounded-lg 
          bg-gradient-to-r from-[#6657E2] via-[#903CD1] to-[#903CD1]"
        >
         Massage
        </button>
      </Link>

    </div>
  ))}
</div>

    </div>
  );
};

export default ToutorStudent;
