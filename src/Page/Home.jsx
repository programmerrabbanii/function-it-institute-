import React from 'react';
import Bannar from '../Components/Bannar';
import About from '../Components/About';
import SuccessStory from '../Components/SuccessStory';
import Targeted from '../Components/Targeted';
import SupportTeam from '../Components/SupportTeam';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <SuccessStory></SuccessStory>
            <Targeted></Targeted>
            <SupportTeam></SupportTeam>
        </div>
    );
};

export default Home;