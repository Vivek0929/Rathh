import React from 'react';
import './TripDetails.css';

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={star <= rating ? 'star filled' : 'star empty'}>
                    ★
                </span>
            ))}
        </div>
    );
};

const ReviewCard = ({ travelerPhoto, travelerName, rating, reviewDate, reviewText }) => {
    return (
        <div className="review-card">
            <div className="review-card-header">
                <img
                    src={travelerPhoto || `https://i.pravatar.cc/60?u=${travelerName}`}
                    alt={travelerName}
                    className="review-traveler-photo"
                />
                <div className="review-traveler-info">
                    <h4 className="review-traveler-name">{travelerName}</h4>
                    <StarRating rating={rating} />
                </div>
                <span className="review-date">{reviewDate}</span>
            </div>
            <p className="review-text">{reviewText}</p>
        </div>
    );
};

const TravelerReviews = ({ reviews }) => {
    const defaultReviews = [
        {
            travelerPhoto: 'https://i.pravatar.cc/60?img=1',
            travelerName: 'Alice Johnson',
            rating: 5,
            reviewDate: 'Nov 12, 2024',
            reviewText:
                'This was an absolutely incredible experience! Our guide was knowledgeable, friendly, and made every moment special. The Sahara night was unforgettable — the stars were stunning. I highly recommend this trip to anyone looking for an authentic Moroccan adventure!',
        },
        {
            travelerPhoto: 'https://i.pravatar.cc/60?img=5',
            travelerName: 'Robert Chen',
            rating: 5,
            reviewDate: 'Oct 03, 2024',
            reviewText:
                'Exceeded all expectations! The small group size made everything so personal. We got access to places a large tour group never could. The riads we stayed in were beautiful, and the food was phenomenal every single day.',
        },
        {
            travelerPhoto: 'https://i.pravatar.cc/60?img=9',
            travelerName: `Sofia Martínez`,
            rating: 4,
            reviewDate: 'Sep 18, 2024',
            reviewText:
                `A wonderful trip through Morocco's imperial cities and desert. The local guide was fantastic and gave us real insight into the culture. Only minor hiccup was a slight delay on Day 3, but overall an amazing experience I'd absolutely do again.`,
        },
    ];

    const reviewList = reviews && reviews.length > 0 ? reviews : defaultReviews;

    return (
        <div className="reviews-section">
            <h2 className="reviews-heading">
                Traveler Reviews
                <span className="reviews-count">({reviewList.length})</span>
            </h2>
            <div className="reviews-grid">
                {reviewList.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </div>
    );
};

export default TravelerReviews;
