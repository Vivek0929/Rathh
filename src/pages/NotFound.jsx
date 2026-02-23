import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notfound-container">
            <div className="notfound-card">
                <div className="notfound-emoji">😞</div>
                <h1 className="notfound-title">Oops! Page Not Found</h1>
                <p className="notfound-message">
                    We're sorry, but we're not providing this page yet.<br />
                    The page you're looking for doesn't exist or may have been moved.
                </p>
                <Link to="/" className="notfound-home-btn">
                    ← Go Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
