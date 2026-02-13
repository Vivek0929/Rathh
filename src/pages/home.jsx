import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PopularDestinations from '../components/homePageComponents/PopularDestinations'
import WhyChooseUs from '../components/homePageComponents/WhyChooseUs'
import HeroSection from '../components/homePageComponents/HeroSection'
const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <PopularDestinations />
            <WhyChooseUs />
            <Footer />
        </div>
    );
};

export default Home;
