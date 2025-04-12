import React from 'react';
import fiverr from "../assets/Fiverr.png"
import upwork from "../assets/Upwork.png"
import peopole from "../assets/pph.jpeg"
import kWork from "../assets/kwork.jpeg"
import  indeed from "../assets/indeed.jpeg"
import linkedin from "../assets/lnk.jpeg"

const Targeted = () => {
    return (
        <div>
            <h2 className='text-center py-8 font-extrabold text-4xl'>Our Targeted Marketplace</h2>
            <div className='grid grid-cols-3 md:grid-cols-6 gap-3'>
            <img className='h-30' src={upwork} alt="" />
            <img className='h-30' src={peopole} alt="" />
            <img className='h-30' src={fiverr} alt="" />
            <img className='h-30' src={kWork} alt="" />
            <img className='h-30' src={indeed} alt="" />
            <img className='h-30' src={linkedin} alt="" />
            
            </div>
        </div>
    );
};

export default Targeted;