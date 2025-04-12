import React from 'react';
import success from "../assets/Function IT (1).png";
import { motion } from 'framer-motion';

const SuccessStory = () => {
    const cards = [1, 2, 3]; // ৩ টা ইমেজ দেখানোর জন্য (প্রয়োজনে data.map করা যাবে)

    return (
        <section className="bg-gradient-to-br from-[#fdf2f8] to-[#f0f9ff] py-20 px-6">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">Our Success Stories</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Meet some of our successful students who turned their skills into full-time careers through Function IT Institute.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {cards.map((_, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img
                            src={success}
                            alt={`Success story ${index + 1}`}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Successful Graduate #{index + 1}</h3>
                            <p className="text-gray-600">
                                Now working as a top-rated freelancer and earning globally. Their journey started right here!
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default SuccessStory;
