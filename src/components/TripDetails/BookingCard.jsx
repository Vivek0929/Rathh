import React, { useState } from 'react';
import './TripDetails.css';

const BookingCard = ({ price, tripDates, tripName }) => {
    // 1. Setup fallback data
    const defaultDates = [
        { from: 'Aug 10', to: '15, 2024' },
        { from: 'Sep 05', to: '10, 2024' },
        { from: 'Oct 20', to: '25, 2024' },
        { from: 'Nov 12', to: '17, 2024' },
    ];

    const dates = tripDates && tripDates.length > 0 ? tripDates : defaultDates;
    const [selectedDate, setSelectedDate] = useState(0);

    const pills = ['Small Group', 'Expert Guide', 'Local Experiences'];

    return (
        <div className="booking-card">
            {/* ── 1. Price Row ── */}
            <div className="booking-price-row">
                <span className="booking-price">${price || '1,250'}</span>
                <span className="booking-per-person">per person</span>
            </div>

            {/* ── 2. Available Dates (Pill Grid) ── */}
            <h4 className="booking-dates-title">Available Dates</h4>
            <div className="booking-dates-grid">
                {dates.map((d, i) => (
                    <button
                        key={i}
                        className={`booking-date-pill ${selectedDate === i ? 'booking-date-pill--active' : ''}`}
                        onClick={() => setSelectedDate(i)}
                    >
                        {typeof d === 'string' ? d : `${d.from} – ${d.to}`}
                    </button>
                ))}
            </div>

            {/* ── 3. Trip Dates Detail ── */}
            {/* <div className="booking-dates-section">
                <div className="booking-dates-list">
                    {dates.map((d, i) => (
                        <div
                            key={i}
                            className={`booking-date-row ${selectedDate === i ? 'booking-date-row--active' : ''}`}
                            onClick={() => setSelectedDate(i)}
                        >
                            <span className="booking-date-icon">📅</span>
                            <span className="booking-date-range">
                                {typeof d === 'string' ? d : `${d.from} – ${d.to}`}
                            </span>
                            <span className="booking-date-badge">Available</span>
                        </div>
                    ))}
                </div>
            </div> */}

            {/* ── 4. Book Now Button ── */}
            <button className="booking-btn">
                <span className="booking-btn-text">Book Now</span>
                <span className="booking-btn-arrow">→</span>
            </button>

            <p className="booking-note">No payment required to reserve your spot</p>

            {/* ── 5. Feature Pills ── */}
            <div className="booking-pills">
                {pills.map((pill, i) => (
                    <span key={i} className="booking-pill">{pill}</span>
                ))}
            </div>
        </div>
    );
};

export default BookingCard;
