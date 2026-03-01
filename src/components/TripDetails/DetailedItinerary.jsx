import React from 'react';
import './TripDetails.css';

const DetailedItinerary = ({ itinerary }) => {
    const defaultItinerary = [
        {
            day: 'Day 1',
            title: 'Arrive in Marrakech & Djemaa el-Fna',
            description:
                'Your Moroccan adventure begins as you arrive in the vibrant city of Marrakech. Transfer to your riad in the medina. This evening, explore the famous Djemaa el-Fna square — a UNESCO-listed open-air theatre filled with storytellers, musicians, snake charmers, and food stalls.',
        },
        {
            day: 'Day 2',
            title: 'Marrakech Exploration & Gardens',
            description:
                'Discover the Bahia Palace and the Saadian Tombs, dating back to the 16th century. Stroll through the vibrant souks and visit the Majorelle Garden, a stunning botanical garden. Enjoy a traditional Moroccan lunch in a local restaurant.',
        },
        {
            day: 'Day 3',
            title: 'Atlas Mountains & Berber Villages',
            description:
                'Drive through the High Atlas Mountains, passing through scenic valleys and traditional Berber villages. Visit the Ourika Valley and experience authentic Berber culture. Return to Marrakech for an evening at leisure.',
        },
        {
            day: 'Day 4',
            title: 'Sahara Desert & Camel Trek',
            description:
                'Head south toward the Sahara Desert. Ride camels into the golden dunes of Erg Chebbi. Watch a breathtaking desert sunset and spend the night in a luxury desert camp under a blanket of stars.',
        },
        {
            day: 'Day 5',
            title: 'Sahara Sunset & Camel Trek',
            description:
                'Wake up early for a magical desert sunrise. After breakfast, continue to the ancient city of Fes, one of the world\'s best-preserved medieval cities. Explore the labyrinthine medina and the famous tanneries.',
        },
    ];

    const items = itinerary && itinerary.length > 0 ? itinerary : defaultItinerary;

    return (
        <div className="itinerary-section">
            <h2 className="itinerary-heading">Detailed Itinerary</h2>
            <div className="itinerary-list">
                {items.map((item, index) => (
                    <div key={index} className="itinerary-item">
                        <button className="itinerary-toggle">
                            <span className="itinerary-day-label text-[#E2211C]">{item.day}</span>
                            <span className="itinerary-day-title">{item.title}</span>
                            <span className="itinerary-chevron">&#8964;</span>
                        </button>
                        <div className="itinerary-body">
                            <p className="itinerary-description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DetailedItinerary;
