import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PopularDestinations from '../components/homePageComponents/PopularDestinations'
import WhyChooseUs from '../components/homePageComponents/WhyChooseUs'
import HeroSection from '../components/homePageComponents/HeroSection'
import TravelStyles from '../components/homePageComponents/TravelStyles';
const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <PopularDestinations />
            <TravelStyles />
            <WhyChooseUs />
            <Footer />
        </div>
    );
};

export default Home;
