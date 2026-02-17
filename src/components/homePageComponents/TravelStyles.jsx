import React from 'react';
import './TravelStyles.css';

const TravelStyles = () => {
    const styles = [
        {
            id: 1,
            title: 'Adventure & Trekking',
            description: 'Explore rugged landscapes and exhilarating trails.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E2211C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
                </svg>
            )
        },
        {
            id: 2,
            title: 'Cultural Immersion',
            description: 'Dive deep into local traditions and heritage.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E2211C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
            )
        },
        {
            id: 3,
            title: 'Relaxing Escapes',
            description: 'Unwind in serene settings and luxurious stays.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E2211C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            )
        },
        {
            id: 4,
            title: 'Wildlife Safaris',
            description: 'Encounter diverse wildlife in their natural habitats.',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E2211C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 22s2.5-4.5 10-4.5S22 22 22 22" />
                    <path d="M12 2a10 10 0 0 0-10 10c0 5 10 10 10 10s10-5 10-10A10 10 0 0 0 12 2z" />
                    <path d="M12 2v20" />
                    <path d="M2 12h20" />
                    {/* Using a simpler leaf-like shape for Safari to ensure it renders cleanly without complex paths */}
                    <path d="M18.5 4c.27 2.03-.54 4.05-2.02 5.51-1.47 1.47-3.49 2.29-5.52 2.02C8.94 11.26 7.37 10 6.5 8.5c1.5-.87 2.76-2.43 3.03-4.46.27-2.03 2.02-3.23 3.49-3.23 1.47 0 3.22 1.2 3.49 3.2z" fill="none" stroke="none" />
                </svg>
            )
        }
    ];

    // A simpler, cleaner leaf icon for Wildlife Safaris
    const leafIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E2211C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf-icon lucide-leaf">
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.5 1.45 11a8 8 0 0 1-9.45 7z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
    );

    // Updating the icon for the 4th item
    styles[3].icon = leafIcon;

    return (
        <section className="travel-styles-section">
            <h2 className="section-title">Discover Your Travel Style</h2>
            <div className="travel-styles-container ">
                {styles.map((style) => (
                    <div key={style.id} className="travel-style-card">
                        <div className="icon-container">
                            {style.icon}
                        </div>
                        <h3 className="card-title">{style.title}</h3>
                        <p className="card-description">{style.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TravelStyles;
