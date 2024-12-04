// src/Components/Destinations.js
import React from 'react';
import './CSS/Destination.css';

const destinations = [
    { name: "Thailand", img: "path/to/thailand.jpg" },
    { name: "China", img: "path/to/china.jpg" },
    { name: "Switzerland", img: "path/to/switzerland.jpg" },
    { name: "Australia", img: "path/to/australia.jpg" },
    { name: "France", img: "path/to/france.jpg" },
    { name: "Norway", img: "path/to/norway.jpg" },
]

const Destinations = () => {
    return (
        <div className="destinations">
            {destinations.map((destination, index) => (
                <div className="destination-card" key={index}>
                    <img src={destination.img} alt={destination.name} />
                    <h3>{destination.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default Destinations;
