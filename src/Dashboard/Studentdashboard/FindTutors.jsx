import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import logo1 from "../../assets/IMG_8.png";
import logo2 from "../../assets/business_center.png";

import logo4 from "../../assets/payments.png";
import { Link } from "react-router";

const FindTutors = () => {
  const tutors = [
  {
    id: 1,
    name: "Rokey Mahmud",
    subject: "English",
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
    subject: "Math",
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
    subject: "Physics",
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
  {
    id: 4,
    name: "Arif Uddin",
    subject: "Physics",
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
  {
    id: 5,
    name: "Arif Uddin",
    subject: "Physics",
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
  {
    id: 6,
    name: "Arif Uddin",
    subject: "Physics",
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
        Find Your Perfect Tutor
      </h2>
      <p className="text-gray-500 text-sm mt-1">
        Browse our qualified tutors and find the right match for your learning needs.
      </p>

      <div className="p-3 mt-5 rounded-2xl bg-white">
        <div className="flex flex-col sm:flex-row items-center gap-3">

          <div className="
      flex items-center bg-[#E3E6F0] border border-[#E5E7EB]
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

          <Link to="/dashboard/filtersidebar">
            <button className="
      bg-[#E3E6F0] border border-[#E5E7EB]
      h-[52px] w-full sm:w-[55px] rounded-xl shadow-sm
      flex items-center justify-center
    ">
              <span className="text-xl">
                <LuSettings2 />
              </span>
            </button>
          </Link>
        </div>
      </div>



      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
  {tutors.map((item) => (
    <div key={item.id} className="bg-white rounded-xl shadow-md p-5">

      {/* Profile */}
      <div className="flex items-center gap-3 mt-5">
        <img src={item.avatar} alt="" className="w-11 h-11 rounded-full" />
        <div>
          <h3 className="font-semibold text-[17px]">{item.name}</h3>
          <p className="text-gray-500 text-sm">{item.subject}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 text-center mt-10">
        <div className="flex flex-col items-center">
          <img src={item.expIcon} className="w-7 h-7 mb-1" />
          <p className="font-semibold text-[14px]">{item.experience}</p>
          <p className="text-gray-500 text-[11px]">Experience</p>
        </div>

        <div className="flex flex-col items-center border-l border-r border-gray-200 px-2">
          <img src={item.ratingIcon} className="w-7 h-7 mb-1" />
          <p className="font-semibold text-[14px]">{item.rating}</p>
          <p className="text-gray-500 text-[11px]">Rating</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={item.priceIcon} className="w-7 h-7 mb-1" />
          <p className="font-semibold text-[14px]">{item.price}</p>
          <p className="text-gray-500 text-[11px]">Price</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-[#7A7A7A] text-sm mt-4 leading-relaxed">
        {item.description}
      </p>

      {/* Button */}
      <Link to="/dashboard/tutordetails">
        <button
          className="w-full mt-5 py-3 text-white font-medium rounded-lg 
       bg-gradient-to-r from-[#FFC30B] via-[#8113B5] to-[#8113B5]"
        >
          View Details
        </button>
      </Link>

    </div>
  ))}
</div>

    </div>
  );
};

export default FindTutors;
