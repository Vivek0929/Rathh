import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TripDetails from '../components/TripDetails/TripDetails';
import Footer from '../components/Footer';

// Mirror of the packages list in DynaCards — in a real app this would be a
// single shared data source / API call. The id here matches dest.id in DynaCards.
const packages = [
    {
        id: 1,
        title: 'Italy: Roman Wonders & Amalfi Coast',
        imageUrl: 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=1400&q=80',
        tags: ['Italy', 'Europe', 'Culture', 'History'],
        price: '2,800',
    },
    {
        id: 2,
        title: 'Morocco: Souks, Sahara & Imperial Cities',
        imageUrl: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1400&q=80',
        tags: ['Morocco', 'Africa', 'Desert', 'Culture'],
        price: '2,200',
    },
    {
        id: 3,
        title: 'Bali: Spiritual Retreat & Rice Terraces',
        imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1400&q=80',
        tags: ['Bali', 'Asia', 'Wellness', 'Nature'],
        price: '1,950',
    },
    {
        id: 4,
        title: 'Patagonia: Glaciers & Mountain Trekking',
        imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1400&q=80',
        tags: ['Patagonia', 'South America', 'Adventure', 'Nature'],
        price: '4,500',
    },
    {
        id: 5,
        title: 'Turkey: Hot Air Balloons over Cappadocia',
        imageUrl: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?w=1400&q=80',
        tags: ['Turkey', 'Europe', 'Adventure', 'Culture'],
        price: '3,100',
    },
    {
        id: 6,
        title: 'Tanzania: Serengeti Safari & Kilimanjaro',
        imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1400&q=80',
        tags: ['Tanzania', 'Africa', 'Wildlife', 'Safari'],
        price: '5,800',
    },
    {
        id: 7,
        title: 'Japan: Temples, Cherry Blossoms & Tokyo',
        imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1400&q=80',
        tags: ['Japan', 'Asia', 'Culture', 'Nature'],
        price: '3,900',
    },
    {
        id: 8,
        title: 'Greece: Island Hopping & Ancient Ruins',
        imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1400&q=80',
        tags: ['Greece', 'Europe', 'History', 'Beach'],
        price: '3,300',
    },
    {
        id: 9,
        title: 'Peru: Inca Trail to Machu Picchu',
        imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1400&q=80',
        tags: ['Peru', 'South America', 'Adventure', 'History'],
        price: '4,100',
    },
    {
        id: 10,
        title: 'Iceland: Northern Lights & Waterfalls',
        imageUrl: 'https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=1400&q=80',
        tags: ['Iceland', 'Europe', 'Nature', 'Adventure'],
        price: '5,600',
    },
    {
        id: 11,
        title: 'Australia: Great Barrier Reef & Outback',
        imageUrl: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1400&q=80',
        tags: ['Australia', 'Oceania', 'Wildlife', 'Beach'],
        price: '4,900',
    },
    {
        id: 12,
        title: 'Norway: Fjords, Trolltunga & Midnight Sun',
        imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=80',
        tags: ['Norway', 'Europe', 'Nature', 'Adventure'],
        price: '3,700',
    },
];

const TripDetailsPage = () => {
    const { id } = useParams();

    // Find the matching package by id; fall back to first package if not found
    const packageId = parseInt(id, 10);
    const matchedPackage = packages.find((p) => p.id === packageId) || packages[0];

    return (
        <>
            <Navbar />
            <TripDetails tripData={matchedPackage} />
            <Footer />
        </>
    );
};

export default TripDetailsPage;
