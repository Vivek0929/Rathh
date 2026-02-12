import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1: Brand & Social */}
                <div className="footer-column brand-column">
                    <div className="footer-logo">
                        <span className="logo-icon">◎</span>
                        <span className="logo-text">Rathh</span>
                    </div>
                    <p className="footer-description">
                        Discover the world with curated small-group tours.
                    </p>
                    <div className="social-icons">
                        {/* Using simple text placeholders for icons as per standard react-icons aren't available without install */}
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Twitter">t</a>
                        <a href="#" aria-label="Instagram">i</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                    </div>
                </div>

                {/* Column 2: Company */}
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#press">Press</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>

                {/* Column 3: Explore */}
                <div className="footer-column">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="#destinations">Destinations</a></li>
                        <li><a href="#tours">Tours</a></li>
                        <li><a href="#deals">Deals</a></li>
                        <li><a href="#travel-styles">Travel Styles</a></li>
                    </ul>
                </div>

                {/* Column 4: Support */}
                <div className="footer-column">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                    </ul>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
