import React from "react";
import { FiCalendar, FiClock } from "react-icons/fi";
import logo1 from "../../assets/IMG_8.png";

export default function ToutorMyLessonsPage() {
  const LessonCard = ({ img, name, subject, chapter, date, time, status }) => {
    const statusColor =
      status === "Completed"
        ? "bg-[#D1FAE5] text-[#0F766E]"
        : "bg-[#E5E7EB] text-[#6B7280]";

    return (
      <div className="w-full h-[200px] bg-white  rounded-lg p-10 shadow-[0_2px_6px_rgba(0,0,0,0.04)] flex items-start gap-4 ">

    
        <img
          src={img}
          alt="profile"
          className="w-[55px] h-[55px] rounded-full object-cover shrink-0"
        />

        <div className="flex-1">
          <div className="flex items-center gap-30 mb-1">
            <h2 className="text-[16px] font-medium text-gray-800">{name}</h2>

            <span
              className={`text-[11px] px-3 py-[2px] rounded-full whitespace-nowrap ${statusColor}`}
            >
              {status}
            </span>
          </div>

          <p className="text-gray-600 text-[14px]">
            <span className="font-medium">Subject:</span> {subject}
          </p>

          <p className="text-gray-600 text-[14px]">
            <span className="font-medium">Chapter:</span> {chapter}
          </p>

          <div className="flex items-center gap-4 mt-2 text-gray-600 text-[13px] flex-wrap">
            <div className="flex items-center gap-2">
              <FiCalendar className="text-[14px]" />
              {date}
            </div>

            <span className="text-gray-400 hidden sm:block">|</span>

            <div className="flex items-center gap-2">
              <FiClock className="text-[14px]" />
              {time}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" bg-[#F5FAF7] min-h-screen">

      <div className="flex items-center justify-between mb-3">
        <h1 className="text-[20px] font-semibold text-[#6B46C1]">My Lessons</h1>

        <button className="bg-[#7C3AED] text-white px-4 py-1.5 rounded-lg flex items-center gap-2 text-[14px]">
          All Lessons
        </button>
      </div>

      <p className="text-gray-500 mb-6 text-[13px]">
        Manage your upcoming, past, and cancelled lessons.
      </p>

      <LessonCard
        img={logo1}
        name="Rokey Mahmud"
        subject="English"
        chapter="Grammar"
        date="10 Aug 2025"
        time="6:00pm - 07:00pm"
        status="Completed"
      />

      <div className="h-5" />

      <LessonCard
        img={logo1}
        name="Rokey Mahmud"
        subject="English"
        chapter="Grammar"
        date="20 November 2025"
        time="6:00pm - 07:00pm"
        status="Scheduled"
      />
    </div>
  );
}
