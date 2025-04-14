import React from 'react';
import coursess1 from "../assets/Shopify Dropshipping.jpg";
import coursess2 from "../assets/Digital Marketing.jpg";
import coursess3 from "../assets/Fiverr Marketplace.jpg";
import coursess4 from "../assets/Freelancing.jpg";
import coursess5 from "../assets/Shopify.jpg";
import coursess6 from "../assets/Conversion Rate Optimization.jpg";

const Coursess = () => {
    return ( 
        <div className='py-10 px-4 bg-gray-50'>
            <h2 className='text-4xl text-center font-extrabold pb-7'>Our Popular Courses</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[coursess1, coursess2, coursess3, coursess4, coursess5, coursess6].map((img, index) => (
                    <div 
                        key={index}
                        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out"
                    >
                        <img 
                            src={img} 
                            alt={`course-${index}`} 
                            className="w-full  object-cover transform hover:scale-105 transition duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coursess;
