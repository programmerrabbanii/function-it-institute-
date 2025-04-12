import React from 'react';
import Bannar from '../Components/Bannar';
import About from '../Components/About';
import SuccessStory from '../Components/SuccessStory';
import Targeted from '../Components/Targeted';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <SuccessStory></SuccessStory>
            <Targeted></Targeted>
        </div>
    );
};

export default Home;