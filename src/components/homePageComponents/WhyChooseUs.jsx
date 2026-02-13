import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            title: 'Expert Local Guides',
            description: 'Benefit from the knowledge and passion of seasoned local experts who bring destinations to life.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
            )
        },
        {
            id: 2,
            title: 'Small Group Journeys',
            description: 'Enjoy intimate experiences with like-minded travelers, fostering genuine connections.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
            )
        },
        {
            id: 3,
            title: 'Sustainable Travel',
            description: 'We are committed to responsible tourism that respects local cultures and environments.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7" />
                    <path d="M15 7h6v6" />
                </svg>
            )
        }
    ];

    // Replacing standard trending up icon with a leaf icon for Sustainable Travel
    const leafIcon = (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.5 1.45 11a8 8 0 0 1-9.45 7z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    );

    features[2].icon = leafIcon;

    return (
        <section className="why-choose-section">
            <h2 className="section-title">Why Choose Rathh Tours?</h2>
            <div className="features-container">
                {features.map((feature) => (
                    <div key={feature.id} className="feature-card">
                        <div className="icon-container-feature">
                            {feature.icon}
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
