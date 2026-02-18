import React, { useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const startDateRef = useRef(null);
    const endDateRef = useRef(null);

    const handleDateClick = (ref) => {
        if (ref.current) {
            ref.current.showPicker();
        }
    };

    return (
        <div className="hero-container">
            {/* Video Background Section */}
            <div className="hero-video-wrapper">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    {/* Using a sample travel video from Pexels/Mixkit as placeholder */}
                    <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Dark overlay to make text readable */}
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>Your Journey to<br />Unforgettable Experiences<br />Starts Here</h1>
                </div>
            </div>

            {/* Search Bar Section - Layered Looks */}
            <div className="search-bar-container ">
                <div className="search-inputs-wrapper">

                    {/* Destination Input - Left Side */}
                    <div className="search-input-group destination-group">
                        <span className="search-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </span>
                        <input type="text" placeholder="Search destinations" />
                    </div>

                    {/* Date Inputs - Middle */}
                    <div className="dates-container">
                        <div className="search-input-group date-group" onClick={() => handleDateClick(startDateRef)}>
                            <span className="search-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </span>
                            <input
                                type="date"
                                ref={startDateRef}
                                className="date-input"
                                placeholder="Start Date"
                            />
                            <span className="date-placeholder">Start Date</span>
                        </div>

                        <div className="search-input-group date-group" onClick={() => handleDateClick(endDateRef)}>
                            <span className="search-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                            </span>
                            <input
                                type="date"
                                ref={endDateRef}
                                className="date-input"
                                placeholder="End Date"
                            />
                            <span className="date-placeholder">End Date</span>
                        </div>
                    </div>

                    {/* Search Button - Right Side */}
                    <div className="search-btn-container w-80 md:w-auto ml-7">
                        <button className="search-btn">
                            <span className="search-icon-btn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                            Search
                        </button>
                    </div>

                </div>
            </div>

            <div className="cta-container">
                <button className="discover-btn">Discover experiences</button>
            </div>

        </div>
    );
};

export default HeroSection;
