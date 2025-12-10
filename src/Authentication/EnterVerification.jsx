import React from "react";
import { Link } from "react-router";

const EnterVerification = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[#F4F8F5]">
            <div className="bg-white rounded-2xl w-full max-w-lg px-16 py-50 shadow-xl">


                <h2 className="text-2xl font-semibold bg-gradient-to-r from-[#614EFE] via-[#7D359F] to-[#7D359F] bg-clip-text text-transparent">
                    Enter Verification Code
                </h2>

                <p className="text-[#585858] text-sm mt-3 leading-relaxed">
                    We’ve sent a 6-digit code to j***@gmail.com
                </p>


                <div className="mt-10 flex justify-between gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <input
                            key={i}
                            maxLength={1}
                            className="w-12 h-14 text-center border border-gray-300 rounded-xl text-lg font-semibold focus:ring-purple-400 focus:border-purple-400"
                        />
                    ))}
                </div>

                <Link to="/setpassword">
                    <button className="w-full mt-10 bg-gradient-to-r from-[#6657E2] to-[#903CD1] text-white py-3 rounded-full text-base font-medium shadow-sm">
                        Verify Code
                    </button>
                </Link>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Didn’t receive the code?{" "}
                    <button className="text-purple-600 font-medium hover:underline">
                        Resend
                    </button>
                </p>
            </div>
        </div>
    );
};

export default EnterVerification;
