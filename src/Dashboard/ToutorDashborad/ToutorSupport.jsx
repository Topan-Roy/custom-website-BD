import { useState } from "react";
import logo from '../../assets/send-svgrepo-com 2.png'
import logo1 from '../../assets/IMG_8.png'
export default function ToutorSupport() {
    const [activeUser, setActiveUser] = useState("Rokey Mahmud");

    // Manual data as requested
    const conversations = [
        {
            name: "Rokey Mahmud",
            subject: "English",
            avatar: logo1,
            online: true,
            messages: [
                {
                    from: "other",
                    text: "Hey! How was the new design project coming along?",
                    time: "10:30 AM",
                },
                {
                    from: "me",
                    text: "Hey! How was the new design project coming along?",
                    time: "10:30 AM",
                },
            ],
        },

    ];

    const activeConversation = conversations.find(
        (conv) => conv.name === activeUser
    );

    return (
        <div className="">
            {/* Header */}
            <h2 className="text-[#6657E2] font-semibold text-xl mb-1">
                Support
            </h2>
            <p className="text-gray-500 text-sm mb-6">
                We’re here to help. Students and tutors can contact us anytime for support.
            </p>
            <div className="flex  h-[700px] ">



                {/* Chat Area */}
                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg  flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <img
                            src={activeConversation.avatar}
                            alt={activeConversation.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="flex-1">
                            <p className="font-semibold text-gray-900">{activeConversation.name}</p>
                            <p className="text-xs text-gray-500">
                                {activeConversation.online ? "Online" : "Offline"}
                            </p>
                        </div>
                    </div>

                    {/* full width divider */}
                    <div className="w-full h-[1px] bg-gray-200 my-3" />


                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto space-y-4">
                        {activeConversation.messages.length === 0 && (
                            <p className="text-gray-400 text-center mt-10">No messages yet.</p>
                        )}

                        {activeConversation.messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`max-w-xs p-3 rounded-lg text-sm ${msg.from === "me" ? "ml-auto text-white" : "bg-gray-200 text-gray-800"
                                    }`}
                                style={
                                    msg.from === "me"
                                        ? {
                                            background:
                                                "linear-gradient(90deg, #6657E2 0%, #903CD1 100%)",
                                        }
                                        : {}
                                }
                            >
                                <p>{msg.text}</p>
                                <span
                                    className={`block mt-1 text-xs opacity-70 ${msg.from === "me" ? "text-[#ffffff]" : "text-gray-500"
                                        }`}
                                >
                                    {msg.time}
                                </span>
                            </div>
                        ))}
                    </div>


                    {/* Input Box */}
                    <div className="mt-6 flex items-center justify-center">
                        <div className="relative w-full max-w-4xl"> {/* WIDTH BIGGER */}

                            {/* Plus Icon (Left Outside) */}
                            <button className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-purple-600 text-2xl font-bold">
                                +
                            </button>

                            {/* Input Box */}
                            <div className="border border-gray-300 rounded-full pl-6 pr-6 py-3 flex items-center bg-white">
                                <input
                                    type="text"
                                    placeholder="Type a message..."
                                    className="flex-1 outline-none border-none text-[15px]"
                                />
                            </div>

                            {/* Send Icon (Right Outside) */}
                            <button className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center text-purple-600 text-xl">
                                <img src={logo} alt="" />
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
