import React from 'react';

const DynaHeading = ({ searchTerm, setSearchTerm, startDate, setStartDate, endDate, setEndDate, onSearch }) => {
    return (
        <div className="dyna-heading-wrapper">
            {/* Left Side */}
            <div className="dyna-heading-left">
                <h1 className="dyna-title">Discover Your Next Adventure</h1>
                <p className="dyna-subtitle">Filter &amp; Sort</p>
            </div>

            {/* Right Side - Search Bar */}
            <div className="dyna-heading-right">
                <div className="dyna-search-bar">
                    <input
                        type="text"
                        placeholder="Search within results..."
                        className="dyna-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="dyna-date-wrapper">
                        <svg className="dyna-date-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {!startDate && <span className="dyna-date-placeholder">Start Date</span>}
                        <input
                            type="date"
                            className={`dyna-date-input ${!startDate ? 'empty' : ''}`}
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            onClick={(e) => {
                                try { e.target.showPicker(); } catch (err) { }
                            }}
                        />
                    </div>
                    <div className="dyna-date-wrapper">
                        <svg className="dyna-date-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        {!endDate && <span className="dyna-date-placeholder">End Date</span>}
                        <input
                            type="date"
                            className={`dyna-date-input ${!endDate ? 'empty' : ''}`}
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            onClick={(e) => {
                                try { e.target.showPicker(); } catch (err) { }
                            }}
                        />
                    </div>
                    <button className="dyna-search-btn" onClick={onSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DynaHeading;
