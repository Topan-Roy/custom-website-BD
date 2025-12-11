import { FiChevronDown } from "react-icons/fi";
import profilePic from "../../assets/IMG_8.png";
import logo from "../../assets/Rectangle 923.png";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router";
export default function MyProfile() {
    return (
        <div className=" bg-[#F3F7F2] min-h-screen">

            {/* TITLE */}
            <h2 className="text-[#6657E2] text-2xl font-semibold mb-1">My Profile</h2>
            <p className="text-gray-500 mb-8">
                Manage your personal information and learning preferences.
            </p>

            <div className="flex gap-8">

                {/* LEFT CARD */}
                <div className="w-64">
                    <div className="bg-white rounded-xl shadow p-6 text-center">
                        <img
                            src={profilePic}
                            className="w-24 h-24 rounded-full mx-auto object-cover"
                        />

                        <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                            Rokey Mahmud
                        </h3>

                        {/* Badge */}
                        <span className="px-3 py-1 text-xs text-[#F3934F] bg-[#EBEBEB] rounded-full mt-2 inline-block">
                            Student
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

                        <p className="text-[#7C7C7C] text-sm mb-2">Interests</p>

                        <div className="flex flex-wrap gap-2">
                            {["English", "Literature", "Easy Writing", "Creative Writing"].map((item) => (
                                <span
                                    key={item}
                                    className="px-3 py-1 font-medium text-xs rounded-full bg-[#EBEBEB] border border-[#E3E3FF]
                 bg-gradient-to-r from-[#6657E2] to-[#903CD1] text-transparent bg-clip-text"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="flex-1   p-8">

                    <div className="grid grid-cols-1 gap-6 w-full">

                        {/* Name */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Name</label>
                            <input
                                type="text"
                                defaultValue="Rokey"
                                className="w-full rounded-lg shadow bg-[#FFFFFF] border-gray-300 px-4 py-3 outline-none text-sm"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Email</label>
                            <input
                                type="email"
                                defaultValue="rokey@gmail.com"
                                className="w-full rounded-lg shadow bg-[#FFFFFF] border-gray-300 px-4 py-3 outline-none text-sm"
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
                                    <img
                                        src={logo}
                                        className="w-5 h-5 rounded-sm"
                                    />

                                    +1242

                                    {/* Dropdown Icon */}
                                    <FiChevronDown size={18} />
                                </button>




                                <input
                                    type="text"
                                    defaultValue="3000597212"
                                    className="flex-1 rounded-lg shadow bg-[#FFFFFF] border-gray-300 px-4 py-3 outline-none text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Edit Button */}
                   
                    <div className="w-full flex justify-end">
                        <Link to="/dashboard/editprofile">
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
