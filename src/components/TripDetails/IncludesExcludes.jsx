import React from 'react';
import './TripDetails.css';

const IncludesExcludes = ({ includes, excludes }) => {
    const defaultIncludes = [
        'Airport transfers on arrival and departure',
        'Daily accommodation in boutique riads and desert camp',
        'Daily breakfast, lunches, and most dinners',
        'English speaking local guides throughout the trip',
        'All transportation in air-conditioned vehicles',
        'Camel trek into the Sahara Desert',
        'Entrance fees to all mentioned sites',
    ];

    const defaultExcludes = [
        'International flights',
        'Travel insurance',
        'Tips for guides and drivers',
        'Any meals not specified in the itinerary',
        'Personal expenses and souvenirs',
    ];

    const includesList = includes && includes.length > 0 ? includes : defaultIncludes;
    const excludesList = excludes && excludes.length > 0 ? excludes : defaultExcludes;

    return (
        <div className="inc-exc-section">
            <div className="inc-exc-grid">
                {/* What's Included */}
                <div className="inc-exc-box inc-box">
                    <h3 className="inc-exc-heading">
                        <span className="inc-exc-icon inc-icon">✓</span> What's Included
                    </h3>
                    <ul className="inc-exc-list">
                        {includesList.map((item, i) => (
                            <li key={i} className="inc-exc-item inc-item">
                                <span className="inc-check">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* What's Not Included */}
                <div className="inc-exc-box exc-box">
                    <h3 className="inc-exc-heading">
                        <span className="inc-exc-icon exc-icon">✕</span> What's Not Included
                    </h3>
                    <ul className="inc-exc-list">
                        {excludesList.map((item, i) => (
                            <li key={i} className="inc-exc-item exc-item">
                                <span className="exc-cross">✕</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default IncludesExcludes;
