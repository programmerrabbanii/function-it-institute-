import React from 'react';
import Lottie from 'lottie-react';
import animation from '../assets/Animation - 1744626307322.json';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-6 py-12 text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-8">
                {/* Address */}
                <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl border border-gray-600 shadow-md">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">Find us Here</h3>
                    <p className="text-black">
                        295/JHA/8-B Sikder Real Estate, Tali office Road, Rayer Bazar, Dhaka 1209, Bangladesh.
                    </p>
                </div>

                {/* Phone Numbers */}
                <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl border border-gray-600 shadow-md">
                    <h3 className="text-2xl font-bold text-black mb-4">Call us</h3>
                    <div className="space-y-2 text-orange-400 font-medium">
                        <a href="tel:01793733933
                      " className="block hover:underline">01793733933
                        </a>
                      
                    </div>
                </div>

                {/* Email */}
                <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl border border-gray-600 shadow-md">
                    <h3 className="text-2xl font-bold text-black  mb-4">Email Us</h3>
                    <a
                        href="functionitinstitute@gmail.com"
                        className="text-orange-400 hover:underline"
                    >
                        functionitinstitute@gmail.com
                        
                    </a>
                </div>
            </div>

            {/* Animation */}
            <div>
                <Lottie animationData={animation} loop={true} className="w-full h-full" />
            </div>
        </div>
    );
};

export default Contact;
