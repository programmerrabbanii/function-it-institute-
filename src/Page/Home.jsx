import React from 'react';
import Bannar from '../Components/Bannar';
import About from '../Components/About';
import SuccessStory from '../Components/SuccessStory';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <SuccessStory></SuccessStory>
        </div>
    );
};

export default Home;