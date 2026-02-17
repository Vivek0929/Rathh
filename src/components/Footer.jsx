import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1: Brand & Social */}
                <div className="footer-column brand-column">
                    <div className="footer-logo">
                        <img src="https://res.cloudinary.com/dtozixle0/image/upload/v1771349043/rathh-logo_Red_j9eppj.svg" alt="logo" className='h-15' />
                        <span className="logo-text">Rathh</span>
                    </div>
                    <p className="footer-description">
                        Discover the world with curated small-group tours.
                    </p>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                        <a href="#" aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
                    </div>
                </div>

                {/* Column 2: Company */}
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to={'/about'}> About</Link></li>
                        <li><Link to={'/Careera'}> Careers</Link> </li>
                        <li> <Link to={'/press'}>Press</Link></li>
                        <li><Link to={'/blog'} >Blog</Link> </li>
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
                        <li> <Link to={'/faq'}>FAQ</Link> </li>
                        <li> <Link to={'/contact'}>ContactUs</Link> </li>
                        <li> <Link to={'/privacy'}>Privacy Policy</Link> </li>
                        <li> <Link to={'/terms'}>Terms of Service</Link> </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
