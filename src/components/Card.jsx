// Card.jsx
import React from 'react';

const Card = ({ title, desc, link }) => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-gray-400 text-sm">{desc}</p>
            <a
                href={link}
                className="inline-flex items-center text-purple-600 text-sm font-medium mt-3"
            >
                Try Now
            </a>
        </div>
    );
};

export default Card;
