import React from 'react';
import './TripDetails.css';

const TripHeroImage = ({ imageUrl, title }) => {
    return (
        <div className="trip-hero-image-wrapper">
            <img
                src={imageUrl || 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1400&q=80'}
                alt={title || 'Trip'}
                className="trip-hero-image"
            />
            <div className="trip-hero-overlay">
                <h1 className="trip-hero-title">{title || 'Trip Details'}</h1>
            </div>
        </div>
    );
};

export default TripHeroImage;
