import React from 'react';
import './TripDetails.css';

const StarRating = ({ rating }) => {
    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className={star <= rating ? 'star filled' : 'star empty'}>
                </span>
            ))}
        </div>
    );
};

const ReviewCard = ({ travelerPhoto, travelerName, rating, reviewDate, reviewText }) => {
    return (
        <div className="review-item">
            {/* Header row: photo + name + stars + date */}
            <div className="review-item-header">
                <img
                    src={travelerPhoto || `https://i.pravatar.cc/60?u=${travelerName}`}
                    alt={travelerName}
                    className="review-traveler-photo"
                />
                <div className="review-traveler-meta">
                    <span className="review-traveler-name">{travelerName}</span>
                    <div className="review-meta-row">
                        <StarRating rating={rating} />
                        <span className="review-date">{reviewDate}</span>
                    </div>
                </div>
            </div>
            {/* Review text full width */}
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
            reviewDate: 'July 15, 2023',
            reviewText:
                `An absolutely incredible journey! The itinerary was perfectly balanced, and our guide was exceptionally knowledgeable. The camel trek in the Sahara was a highlight I'll never forget.`,
        },
        {
            travelerPhoto: 'https://i.pravatar.cc/60?img=5',
            travelerName: 'Mark Davis',
            rating: 5,
            reviewDate: 'August 01, 2023',
            reviewText:
                'Wanderlust Tours exceeded my expectations. The riads were charming, and the food was delicious. Only minor feedback is that some days felt a bit rushed, but overall an amazing experience.',
        },
        {
            travelerPhoto: 'https://i.pravatar.cc/60?img=9',
            travelerName: 'Sophia Lee',
            rating: 5,
            reviewDate: 'June 20, 2023',
            reviewText:
                `From start to finish, this trip was flawlessly organized. Every detail was taken care of, allowing us to fully immerse ourselves in the beauty and culture of Morocco. Highly recommend!`,
        },
    ];

    const reviewList = reviews && reviews.length > 0 ? reviews : defaultReviews;

    return (
        <div className="reviews-section">
            <h2 className="reviews-heading">
                Traveler Reviews ({reviewList.length})
            </h2>
            <div className="reviews-list">
                {reviewList.map((review, index) => (
                    <ReviewCard key={index} {...review} />
                ))}
            </div>
        </div>
    );
};

export default TravelerReviews;
