import React from 'react';
import { useNavigate } from 'react-router-dom';

const defaultDestinations = [
    {
        id: 1,
        name: 'Italy: Roman Wonders & ...',
        dates: 'August 12 - August 30, 2024',
        price: 2800,
        image: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=400&h=300&fit=crop',
    },
    {
        id: 2,
        name: 'Morocco: Souks',
        dates: 'September 5 - September 15, 2024',
        price: 2200,
        image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&h=300&fit=crop',
    },
    {
        id: 3,
        name: 'Bali: Spiritual',
        dates: 'October 1 - October 12, 2024',
        price: 1950,
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
    },
    {
        id: 4,
        name: 'Patagonia: Glaciers & ...',
        dates: 'November 8 - November 22, 2024',
        price: 4500,
        image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop',
    },
    {
        id: 5,
        name: 'Turkey: Hot Air Balloons',
        dates: 'June 1 - June 9, 2025',
        price: 3100,
        image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=400&h=300&fit=crop',
    },
    {
        id: 6,
        name: 'Tanzania: Serengeti',
        dates: 'July 14 - July 24, 2025',
        price: 5800,
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=300&fit=crop',
    },
    {
        id: 7,
        name: 'Japan: Temples',
        dates: 'April 3 - April 15, 2025',
        price: 3900,
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop',
    },
    {
        id: 8,
        name: 'Greece: Island',
        dates: 'May 20 - June 2, 2025',
        price: 3300,
        image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=400&h=300&fit=crop',
    },
    {
        id: 9,
        name: 'Peru: Inca Trail to ...',
        dates: 'September 1 - September 12, 2025',
        price: 4100,
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&h=300&fit=crop',
    },
    {
        id: 10,
        name: 'Iceland: Northern ...',
        dates: 'February 10 - February 18, 2025',
        price: 5600,
        image: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=400&h=300&fit=crop',
    },
    {
        id: 11,
        name: 'Australia: Reefs',
        dates: 'March 5 - March 20, 2025',
        price: 4900,
        image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=400&h=300&fit=crop',
    },
    {
        id: 12,
        name: 'Norway: Fjords, Trolls',
        dates: 'July 1 - July 15, 2025',
        price: 3700,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
    },
];

const getSortedDestinations = (destinations, sortBy) => {
    const sorted = [...destinations];
    switch (sortBy) {
        case 'low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'date':
            return sorted.sort((a, b) => new Date(a.dates.split(' - ')[0]) - new Date(b.dates.split(' - ')[0]));
        case 'popularity':
        default:
            return sorted.sort((a, b) => a.id - b.id);
    }
};

const DynaCards = ({ sortBy, handleSortChange }) => {
    const navigate = useNavigate();
    const sortedDestinations = getSortedDestinations(defaultDestinations, sortBy);

    return (
        <div className="dyna-cards-wrapper">
            {/* Header */}
            <div className="dyna-cards-header">
                <span className="dyna-results-count">
                    Showing <strong>{sortedDestinations.length}</strong> results
                </span>
                <div className="dyna-sort-wrapper">
                    <label htmlFor="sortBy">Sort by: </label>
                    <select
                        id="sortBy"
                        value={sortBy}
                        onChange={(e) => handleSortChange(e.target.value)}
                        className="dyna-sort-select"
                    >
                        <option value="popularity">Popularity</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                        <option value="date">Date</option>
                    </select>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="dyna-cards-grid">
                {sortedDestinations.map((dest) => (
                    <div key={dest.id} className="dyna-card">
                        <div className="dyna-card-image-wrapper">
                            <img src={dest.image} alt={dest.name} className="dyna-card-image" />
                            <div className="dyna-card-overlay">
                                <span className="dyna-card-name">{dest.name}</span>
                            </div>
                        </div>
                        <div className="dyna-card-info">
                            <p className="dyna-card-dates">{dest.dates}</p>
                            <p className="dyna-card-price">${dest.price.toLocaleString()}</p>
                            <button
                                className="dyna-view-details-btn"
                                onClick={() => navigate(`/tripdetails/${dest.id}`)}
                            >
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DynaCards;
