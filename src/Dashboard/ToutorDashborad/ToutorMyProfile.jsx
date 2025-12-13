import { FiChevronDown } from "react-icons/fi";
import profilePic from "../../assets/IMG_8.png";
import profilePic1 from "../../assets/banner.png";
import logo from "../../assets/Rectangle 923.png";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router";

export default function TutorMyProfile() {
    return (
        <div className="bg-[#F3F7F2] min-h-screen">

      
            <h2 className="text-[#6657E2] text-2xl font-semibold mb-1">My Profile</h2>
            <p className="text-gray-500 mb-8">
                Manage your personal information and learning preferences.
            </p>

            <div className="flex gap-8">

                <div className="w-64">
                    <div className="bg-white rounded-xl shadow p-6 text-center">
                        <img
                            src={profilePic}
                            className="w-24 h-24 rounded-full mx-auto object-cover"
                        />

                        <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                            Rokey Mahmud
                        </h3>

                        <span className="px-3 py-1 text-xs text-[#F3934F] bg-[#EBEBEB] rounded-full mt-2 inline-block">
                            Tutor
                        </span>

                        <p className="text-[#7C7C7C] text-xs mt-2">
                            Member since 8/5/2024
                        </p>
                    </div>

                    {/* Learning Preferences */}
                    <div className="bg-white rounded-xl shadow p-6 mt-4">
                        <h3 className="text-[#6657E2] font-semibold mb-3 text-lg">
                            Learning Preferences
                        </h3>

                        <p className="text-[#7C7C7C] text-sm mb-2">Subjects</p>

                        <div className="flex flex-wrap gap-2">
                            {["English", "Literature", "Easy Writing", ].map(
                                (item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 text-sm rounded-full bg-[#EBEBEB] border border-[#E3E3FF]
                    bg-clip-text text-transparent [background-image:linear-gradient(90deg,#6657E2,#903CD1)]"
                                    >
                                        {item}
                                    </span>
                                )
                            )}
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="flex-1 p-8">
                    <div className="grid grid-cols-1 gap-6 w-full">

                        {/* Name */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Name</label>
                            <input
                                type="text"
                                defaultValue="Rokey"
                                className="w-full rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Email</label>
                            <input
                                type="email"
                                defaultValue="rokey@gmail.com"
                                className="w-full rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Phone Number</label>

                            <div className="flex gap-2">
                                <button
                                    className="px-4 flex items-center gap-2 rounded-lg text-sm text-white"
                                    style={{
                                        background: "linear-gradient(90deg, #6657E2, #903CD1)",
                                        border: "1px solid rgba(255,255,255,0.4)",
                                    }}
                                >
                                    <img src={logo} className="w-5 h-5 rounded-sm" />
                                    +1242
                                    <FiChevronDown size={18} />
                                </button>

                                <input
                                    type="text"
                                    defaultValue="3000597212"
                                    className="flex-1 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                                />
                            </div>
                        </div>

                        {/* Qualification */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Qualification</label>
                            <textarea
                                defaultValue="Bachelor in English Language & Literature University of California, San Francisco 2008"
                                className="w-full h-28 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm resize-none"
                            ></textarea>
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Bio</label>
                            <input
                                type="text"
                                defaultValue="Hi! I’m an experienced English teacher specializing in grammar................."
                                className="w-full rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                            />
                        </div>

                        {/* Hourly Rate */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Hourly Rate</label>
                            <input
                                type="number"
                                defaultValue="20"
                                className="w-full rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                            />
                        </div>
                        <h3 className=" font-semibold text-[#7C7C7C]">Available time and date</h3>

                        <div className=" flex flex-col gap-2">
                            <span className="px-4 py-2 text-sm text-[#7C7C7C] shadow rounded-lg inline-block w-fit">
                                9:00am to 5:00pm
                            </span>

                            <span className="px-4 py-2 text-sm text-[#7C7C7C] shadow rounded-lg inline-block w-fit">
                                Sunday to Monday
                            </span>
                        </div>
                        {/* FULL-WIDTH DIV WITH CENTER IMAGE */}
                        <div className="w-full bg-white p-5 rounded-lg shadow mt-10 ">
                            <div className="w-[160px] h-[120px]">
                                <img
                                    src={profilePic1}
                                    className="w-52 h-30 rounded-2xl object-cover  shadow-lg"
                                />
                            </div>
                        </div>

                    </div>

                    {/* Edit Button */}
                    <div className="w-full flex justify-end">
                        <Link to="/toturdashbord/toutoreditprofile">
                            <button className="mt-8 bg-gradient-to-r from-[#6657E2] to-[#903CD1] hover:opacity-90 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md">
                                <FaRegEdit size="20" />
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
