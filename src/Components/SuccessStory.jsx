import React from 'react';
import success from "../assets/Function IT (1).png";
import { motion } from 'framer-motion';

const SuccessStory = () => {
    return (
        <section className="bg-gradient-to-br from-[#fdf2f8] to-[#f0f9ff] py-16 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                    Our Success Stories
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                    Meet some of our successful students who turned their skills into full-time careers through Function IT Institute.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto'>
                {[0, 1, 2].map((_, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <img src={success} alt={`Success ${index + 1}`} className="w-full h-60 object-cover" />
                        <div className="p-5 text-center">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                Successful Graduate #{index + 1}
                            </h3>
                            <p className="text-gray-600 text-sm">
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
