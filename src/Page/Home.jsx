import React from 'react';
import Bannar from '../Components/Bannar';
import About from '../Components/About';
import SuccessStory from '../Components/SuccessStory';
import Targeted from '../Components/Targeted';
import SupportTeam from '../Components/SupportTeam';
import FAQ from '../Components/FAQ';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <SuccessStory></SuccessStory>
            <Targeted></Targeted>
            <SupportTeam></SupportTeam>
            <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;