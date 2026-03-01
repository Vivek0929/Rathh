import React from 'react';
import './TripDetails.css';

const BookingCard = ({ price, tripDates, tripName }) => {
    const defaultDates = [
        { from: 'Mar 15, 2025', to: 'Mar 20, 2025' },
        { from: 'Apr 10, 2025', to: 'Apr 15, 2025' },
        { from: 'May 5, 2025', to: 'May 10, 2025' },
    ];

    const dates = tripDates && tripDates.length > 0 ? tripDates : defaultDates;

    const pills = ['Small Group', 'Expert Guide', 'Local Experiences'];

    return (
        <div className="booking-card">
            {/* Price */}
            <div className="booking-price-row">
                <div>
                    <span className="booking-price">${price || '1,259'}</span>
                    <span className="booking-per-person"> / person</span>
                </div>
            </div>

            {/* Pills */}
            <div className="booking-pills">
                {pills.map((pill, i) => (
                    <span key={i} className="booking-pill">{pill}</span>
                ))}
            </div>

            {/* Trip Dates */}
            <div className="booking-dates-section">
                <h4 className="booking-dates-title">Trip Dates</h4>
                <div className="booking-dates-list">
                    {dates.map((d, i) => (
                        <div key={i} className="booking-date-row">
                            <span className="booking-date-icon">📅</span>
                            <span className="booking-date-range">{d.from} – {d.to}</span>
                            <span className="booking-date-badge">Available</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Book Now Button */}
            <button className="booking-btn">
                <span className="booking-btn-text">Book Now</span>
                <span className="booking-btn-arrow">→</span>
            </button>

            <p className="booking-note">No payment required to reserve your spot</p>
        </div>
    );
};

export default BookingCard;
