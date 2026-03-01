import React from 'react';
import './TripDetails.css';
import TripHeroImage from './TripHeroImage';
import DetailedItinerary from './DetailedItinerary';
import BookingCard from './BookingCard';
import IncludesExcludes from './IncludesExcludes';
import TravelerReviews from './TravelerReviews';

/**
 * TripDetails — Main Component
 * All props come from parent (backend data passed down).
 * Sample data is used when props are undefined/empty.
 */
const TripDetails = ({ tripData }) => {
    const trip = tripData || {
        title: 'Captivating Morocco: Imperial Cities & Sahara Adventure',
        imageUrl:
            'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1400&q=80',
        tags: ['Morocco', 'Cities', 'Culture', 'Sahara'],
        price: '1,259',
        itinerary: [],   // populated from backend; defaults used when empty
        tripDates: [],   // populated from backend; defaults used when empty
        includes: [],    // populated from backend; defaults used when empty
        excludes: [],    // populated from backend; defaults used when empty
        reviews: [],     // populated from backend; defaults used when empty
    };

    return (
        <div className="trip-details-page">
            <div className="trip-details-container">

                {/* ── Meta / breadcrumb tags ── */}
                <div className="trip-meta-row">
                    {trip.tags &&
                        trip.tags.map((tag, i) => (
                            <React.Fragment key={i}>
                                <span className="trip-meta-tag">{tag}</span>
                                {i < trip.tags.length - 1 && (
                                    <span className="trip-meta-sep">›</span>
                                )}
                            </React.Fragment>
                        ))}
                </div>

                {/* ── Hero Image ── */}
                <TripHeroImage imageUrl={trip.imageUrl} title={trip.title} />

                {/* ── 2-column layout: left content + right booking card ── */}
                <div className="trip-details-layout">

                    {/* LEFT */}
                    <div className="trip-details-left">
                        {/* Detailed Itinerary */}
                        <DetailedItinerary itinerary={trip.itinerary} />

                        {/* Includes & Excludes */}
                        <IncludesExcludes
                            includes={trip.includes}
                            excludes={trip.excludes}
                        />

                        {/* Reviews */}
                        <TravelerReviews reviews={trip.reviews} />
                    </div>

                    {/* RIGHT — Booking Card */}
                    <div className="trip-details-right">
                        <BookingCard
                            price={trip.price}
                            tripDates={trip.tripDates}
                            tripName={trip.title}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TripDetails;
