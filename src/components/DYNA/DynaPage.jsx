import React, { useState } from 'react';
import DynaHeading from './DynaHeading';
import DynaDestination from './DynaDestination';
import DynaFilters from './DynaFilters';
import DynaCards from './DynaCards';
import './Dyna.css';

const DynaPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedDestinations, setSelectedDestinations] = useState([]);
    const [selectedDurations, setSelectedDurations] = useState([]);
    const [priceRange, setPriceRange] = useState(10000);
    const [selectedStyles, setSelectedStyles] = useState([]);
    const [sortBy, setSortBy] = useState('popularity');

    const handleSearch = () => {
        console.log('Search:', { searchTerm, startDate, endDate });
    };

  const handleSortChange = (sortOption) => {
    console.log('Sort option:', sortOption);
    setSortBy(sortOption);
  };

    const handleClearAll = () => {
        setSelectedDestinations([]);
        setSelectedDurations([]);
        setPriceRange(10000);
        setSelectedStyles([]);
        setSearchTerm('');
        setStartDate('');
        setEndDate('');
    };

    const handleApplyFilters = () => {
        console.log('Filters applied:', {
            selectedDestinations,
            selectedDurations,
            priceRange,
            selectedStyles,
        });
    };

    return (
        <div className="dyna-page">
            {/* Component 1: Heading */}
            <DynaHeading
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                onSearch={handleSearch}
            />

            {/* Main Content: Sidebar + Cards */}
            <div className="dyna-main-layout">
                {/* Left Sidebar */}
                <aside className="dyna-sidebar">
                    {/* Component 2: Destination */}
                    <DynaDestination
                        selectedDestinations={selectedDestinations}
                        setSelectedDestinations={setSelectedDestinations}
                    />

                    {/* Component 3: Filters */}
                    <DynaFilters
                        selectedDurations={selectedDurations}
                        setSelectedDurations={setSelectedDurations}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                        selectedStyles={selectedStyles}
                        setSelectedStyles={setSelectedStyles}
                        onClearAll={handleClearAll}
                        onApplyFilters={handleApplyFilters}
                    />
                </aside>

                {/* Right: Cards Grid */}
                <main className="dyna-content">
                    <DynaCards sortBy={sortBy}  handleSortChange={handleSortChange} />
                </main>
            </div>
        </div>
    );
};

export default DynaPage;
