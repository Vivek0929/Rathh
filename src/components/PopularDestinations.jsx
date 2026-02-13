import React from 'react';

const destinations = [
    {
        id: 1,
        name: 'Kyoto, Japan',
        image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=800&auto=format&fit=crop',
        alt: 'Kyoto, Japan'
    },
    {
        id: 2,
        name: 'Machu Picchu, Peru',
        image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=800&auto=format&fit=crop',
        alt: 'Machu Picchu, Peru'
    },
    {
        id: 3,
        name: 'Santorini, Greece',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
        alt: 'Santorini, Greece'
    },
    {
        id: 4,
        name: 'The Serengeti, Tanzania',
        image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop',
        alt: 'The Serengeti, Tanzania'
    },
    {
        id: 5,
        name: 'Rome, Italy',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
        alt: 'Rome, Italy'
    },
    {
        id: 6,
        name: 'Banff National Park, Canada',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=800&auto=format&fit=crop',
        alt: 'Banff National Park, Canada'
    }
];

const PopularDestinations = () => {
    return (
        <div className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                    Popular Destinations
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            className="group cursor-pointer flex flex-col items-center"
                        >
                            <div className="relative overflow-hidden rounded-2xl w-full aspect-[4/3] mb-4 shadow-md transition-shadow hover:shadow-xl">
                                <img
                                    src={destination.image}
                                    alt={destination.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                            <h3 className="text-xl font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                                {destination.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PopularDestinations;
