import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="logo-icon">◎</span>
                <span className="logo-text">Rathh</span>
            </div>

            <ul className="navbar-links">
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#ways-to-travel">Ways to travel</a></li>
                <li><a href="#deals">Deals</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#my-bookings">My Bookings</a></li>
            </ul>


        </nav>
    );
};

export default Navbar;
