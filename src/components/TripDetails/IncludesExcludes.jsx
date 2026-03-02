import React from 'react';
import './TripDetails.css';

const IncludesExcludes = ({ includes, excludes }) => {
    const defaultIncludes = [
        'Airport transfers on arrival and departure',
        '5 nights accommodation in boutique riads and desert camp',
        'Daily breakfast, 2 lunches, 2 dinners',
        'English-speaking local guide throughout the trip',
        'All ground transportation in private, air-conditioned vehicles',
        'Camel trek in the Sahara Desert',
        'Entrance fees to all mentioned sites',
    ];

    const defaultExcludes = [
        'International flights',
        'Travel insurance',
        'Visa fees',
        'Personal expenses and souvenirs',
        'Tips for guides and drivers',
        'Any meals not specified in the itinerary',
    ];

    const includesList = includes && includes.length > 0 ? includes : defaultIncludes;
    const excludesList = excludes && excludes.length > 0 ? excludes : defaultExcludes;

    return (
        <div className="inc-exc-section">

            {/* ── What's Included ── */}
            <h2 className="inc-exc-main-heading">What&apos;s Included</h2>
            <div className="inc-exc-two-col">
                {includesList.map((item, i) => (
                    <div key={i} className="inc-exc-row inc-row">
                        <span className="inc-exc-circle inc-circle">
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="9" stroke="#1a1a1a" strokeWidth="1.5" />
                                <path d="M6 10l3 3 5-5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        <span className="inc-exc-text">{item}</span>
                    </div>
                ))}
            </div>

            {/* ── Divider ── */}
            <hr className="inc-exc-divider" />

            {/* ── What's Not Included ── */}
            <h2 className="inc-exc-main-heading">What&apos;s Not Included</h2>
            <div className="inc-exc-two-col">
                {excludesList.map((item, i) => (
                    <div key={i} className="inc-exc-row exc-row">
                        <span className="inc-exc-circle exc-circle">
                            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="10" r="9" stroke="#E2211C" strokeWidth="1.5" />
                                <path d="M7 7l6 6M13 7l-6 6" stroke="#E2211C" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </span>
                        <span className="inc-exc-text">{item}</span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default IncludesExcludes;
