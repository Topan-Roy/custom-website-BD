import { FiChevronDown } from "react-icons/fi";
import logo from "../../assets/Rectangle 923.png";
import { FaRegEdit, FaSave, FaTimes } from "react-icons/fa";
import { useAuth } from "../../../context/UseAuth";
import Spinner from "../../Components/Spinner";
import { useState } from "react";
import api from "../../services/api";

export default function TutorMyProfile() {
    // this is for tutor profile data integrate here 
    const { user } = useAuth()
    console.log(user)
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        phoneNumber: user?.phoneNumber || '',
        countryCode: user?.countryCode || '+1242',
        bio: user?.bio || '',
        hourlyRate: user?.teacher?.hourlyRate || '',
        subjectsTaught: user?.teacher?.subjectsTaught?.join(', ') || '',
        availableTime: {
            startTime: user?.teacher?.availableTime?.startTime || '',
            endTime: user?.teacher?.availableTime?.endTime || ''
        },
        availableDays: user?.teacher?.availableDays?.join(', ') || '',
        qualification: user?.teacher?.qualification?.map(q =>
            `${q.title} - ${q.institution} (${q.year})`
        ).join('\n') || ''
    });

    // this is for loading spinner 
    if (!user) {
        return <Spinner text="User Loading....." />
    }

    const handleEdit = () => {
        setIsEditing(true);
        // Set default values if fields are empty
        setFormData(prev => ({
            ...prev,
            name: prev.name,
            email: prev.email,
            phoneNumber: prev.phoneNumber,
            countryCode: prev.countryCode,
            bio: prev.bio,
            hourlyRate: prev.hourlyRate,
            subjectsTaught: prev.subjectsTaught,
            availableTime: {
                startTime: prev.availableTime.startTime,
                endTime: prev.availableTime.endTime
            },
            availableDays: prev.availableDays,
            qualification: prev.qualification
        }));
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset form data to original user data
        setFormData({
            name: user?.name || '',
            email: user?.email || '',
            phoneNumber: user?.phoneNumber || '',
            countryCode: user?.countryCode || '+1242',
            bio: user?.bio || '',
            hourlyRate: user?.teacher?.hourlyRate || '',
            subjectsTaught: user?.teacher?.subjectsTaught?.join(', ') || '',
            availableTime: {
                startTime: user?.teacher?.availableTime?.startTime || '',
                endTime: user?.teacher?.availableTime?.endTime || ''
            },
            availableDays: user?.teacher?.availableDays?.join(', ') || '',
            qualification: user?.teacher?.qualification?.map(q =>
                `${q.title} - ${q.institution} (${q.year})`
            ).join('\n') || ''
        });
    };

    const handleSave = async () => {
        console.log('Saving profile data:', formData);
        const res = api.patch("/user/self/update", formData)
        console.log(res)
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };
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
                            src={user?.avatar}
                            className="w-24 h-24 rounded-full mx-auto object-cover"
                        />

                        <h3 className="mt-4 font-semibold text-gray-900 text-lg">
                            {user?.name}
                        </h3>

                        <span className="px-3 py-1 text-xs text-[#F3934F] bg-[#EBEBEB] rounded-full mt-2 inline-block">
                            {user?.role}
                        </span>

                        <p className="text-[#7C7C7C] text-xs mt-2">
                            Member since {user?.updatedAt}
                        </p>
                    </div>

                    {/* Learning Preferences */}
                    <div className="bg-white rounded-xl shadow p-6 mt-4">
                        <h3 className="text-[#6657E2] font-semibold mb-3 text-lg">
                            Learning Preferences
                        </h3>

                        <p className="text-[#7C7C7C] text-sm mb-2">Subjects</p>

                        {isEditing ? (
                            <input
                                type="text"
                                name="subjectsTaught"
                                value={formData.subjectsTaught}
                                onChange={handleChange}
                                className="w-full rounded-lg shadow bg-white border-gray-300 px-3 py-2 outline-none text-sm"
                                placeholder="English, Math, Science (comma separated)"
                            />
                        ) : (
                            <div className="flex flex-wrap gap-2">
                                {user?.teacher.subjectsTaught?.map(
                                    (item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 text-sm rounded-full bg-[#EBEBEB] border border-[#E3E3FF]
                        bg-clip-text text-transparent [background-image:linear-gradient(90deg,#6657E2,#903CD1)]"
                                        >
                                            {item}
                                        </span>
                                    )
                                ) || <span className="text-gray-500 text-sm">No subjects specified</span>}
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="flex-1 p-8">
                    <div className="grid grid-cols-1 gap-6 w-full">

                        {/* Name */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Name</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                                />
                            ) : (
                                <p className="flex-1 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm">
                                    {user?.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Email</label>
                            <p className="flex-1 rounded-lg shadow bg-gray-50 border-gray-300 px-4 py-3 outline-none text-sm">
                                {user?.email}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Phone Number</label>
                            <div className="flex gap-2">
                                {isEditing ? (
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        className="px-4 rounded-lg text-sm text-white"
                                        style={{
                                            background: "linear-gradient(90deg, #6657E2, #903CD1)",
                                            border: "1px solid rgba(255,255,255,0.4)",
                                        }}
                                    >
                                        <option value="+1242">+1242</option>
                                        <option value="+1">+1</option>
                                        <option value="+44">+44</option>
                                        <option value="+91">+91</option>
                                    </select>
                                ) : (
                                    <button
                                        className="px-4 flex items-center gap-2 rounded-lg text-sm text-white"
                                        style={{
                                            background: "linear-gradient(90deg, #6657E2, #903CD1)",
                                            border: "1px solid rgba(255,255,255,0.4)",
                                        }}
                                    >
                                        <img src={logo} className="w-5 h-5 rounded-sm" />
                                        {user?.countryCode}
                                        <FiChevronDown size={18} />
                                    </button>
                                )}
                                {isEditing ? (
                                    <input
                                        type="tel"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        className="flex-1 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                                    />
                                ) : (
                                    <p className="flex-1 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm">
                                        {user?.phoneNumber}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Bio */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Bio</label>
                            {isEditing ? (
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    className="w-full h-24 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm resize-none"
                                    placeholder="Tell us about yourself..."
                                />
                            ) : (
                                <p className="flex-1 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm">
                                    {user?.bio}
                                </p>
                            )}
                        </div>

                        {/* Hourly Rate */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Hourly Rate</label>
                            {isEditing ? (
                                <input
                                    type="number"
                                    name="hourlyRate"
                                    value={formData.hourlyRate}
                                    onChange={handleChange}
                                    className="w-full rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                                    min="0"
                                    step="1"
                                />
                            ) : (
                                <p className="flex-1 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm">
                                    {user?.teacher?.hourlyRate}
                                </p>
                            )}
                        </div>

                        {/* Qualification */}
                        <div>
                            <label className="block mb-1 text-gray-700 text-sm">Qualification</label>
                            {isEditing ? (
                                <textarea
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className="w-full h-28 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm resize-none"
                                    placeholder="B.Sc. in Mathematics - Dhaka University (2014)&#10;M.Sc. in Applied Math - Dhaka University (2016)"
                                />
                            ) : (
                                <div className="flex flex-col gap-2 rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm">
                                    {user?.teacher?.qualification?.map((item, index) => (
                                        <span key={item.id || index}>
                                            {item.title} - {item.institution} ({item.year})
                                            {index < user?.teacher?.qualification?.length - 1 && ", "}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <h3 className=" font-semibold text-[#7C7C7C]">Available time and date</h3>

                        <div className=" flex flex-col gap-2">
                            {isEditing ? (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block mb-1 text-gray-700 text-sm">Start Time</label>
                                            <input
                                                type="time"
                                                name="availableTime.startTime"
                                                value={formData.availableTime.startTime}
                                                onChange={handleChange}
                                                className="w-full rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block mb-1 text-gray-700 text-sm">End Time</label>
                                            <input
                                                type="time"
                                                name="availableTime.endTime"
                                                value={formData.availableTime.endTime}
                                                onChange={handleChange}
                                                className="w-full rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-gray-700 text-sm">Available Days</label>
                                        <input
                                            type="text"
                                            name="availableDays"
                                            value={formData.availableDays}
                                            onChange={handleChange}
                                            className="w-full rounded-lg shadow bg-white border-gray-300 px-4 py-3 outline-none text-sm"
                                            placeholder="Monday, Tuesday, Wednesday (comma separated)"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <span className="px-4 py-2 text-sm text-[#7C7C7C] shadow bg-white rounded-lg inline-block w-fit">
                                        {user?.teacher.availableTime.startTime} to {user?.teacher.availableTime.endTime}
                                    </span>

                                    <span className="px-4 py-2 text-sm text-[#7C7C7C] shadow bg-white rounded-lg inline-block w-fit">
                                        {
                                            user?.teacher?.availableDays?.map(item => item).join(', ') || 'No days specified'
                                        }
                                    </span>
                                </>
                            )}
                        </div>
                        {/* Certificates/Documents */}
                        <div className="w-full bg-white p-5 rounded-lg shadow mt-10">
                            <h3 className="font-semibold text-[#7C7C7C] mb-4">Certificates & Documents</h3>
                            <div className="space-y-3">
                                {user?.teacher?.certificates?.map((cert, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                                            <span className="text-red-600 font-semibold text-sm">PDF</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-gray-800">
                                                {cert.split('/').pop()} {/* Extract filename from path */}
                                            </p>
                                            <p className="text-xs text-gray-500">Certificate</p>
                                        </div>
                                        <button
                                            onClick={() => window.open(cert, '_blank')}
                                            className="px-3 py-1 bg-[#6657E2] text-white text-xs rounded hover:bg-[#5a47d0] transition"
                                        >
                                            View
                                        </button>
                                    </div>
                                )) || (
                                    <p className="text-gray-500 text-sm">No certificates uploaded</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Edit/Save/Cancel Buttons */}
                    <div className="w-full flex justify-end gap-3">
                        {isEditing ? (
                            <>
                                <button
                                    onClick={handleCancel}
                                    className="mt-8 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md hover:bg-gray-50"
                                >
                                    <FaTimes size="20" />
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    className="mt-8 bg-linear-to-r from-[#6657E2] to-[#903CD1] hover:opacity-90 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md"
                                >
                                    <FaSave size="20" />
                                    Save Changes
                                </button>
                            </>
                        ) : (
                            <button
                                onClick={handleEdit}
                                className="mt-8 bg-linear-to-r from-[#6657E2] to-[#903CD1] hover:opacity-90 text-white px-6 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md"
                            >
                                <FaRegEdit size="20" />
                                Edit Profile
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
