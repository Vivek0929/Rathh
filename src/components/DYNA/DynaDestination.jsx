import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

const destinations = ['Orissa', 'Gujarat', 'Madhya Pradesh', 'Telangana', 'Goa'];

const DynaDestination = ({ selectedDestinations, setSelectedDestinations }) => {
    const handleCheckbox = (dest) => {
        setSelectedDestinations((prev) =>
            prev.includes(dest) ? prev.filter((d) => d !== dest) : [...prev, dest]
        );
    };

    return (
        <div className="dyna-destination-wrapper">
            {/* Left: Destination checkboxes */}
            <div className="dyna-destination-left">
                <div className="dyna-section-header">
                    <FaMapMarkerAlt className="dyna-section-icon" />
                    <h3 className="dyna-section-title">Destination</h3>
                </div>
                <div className="dyna-checkbox-list">
                    {destinations.map((dest) => (
                        <label key={dest} className="dyna-checkbox-item">
                            <input
                                type="checkbox"
                                checked={selectedDestinations.includes(dest)}
                                onChange={() => handleCheckbox(dest)}
                            />
                            <span>{dest}</span>
                        </label>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default DynaDestination;
