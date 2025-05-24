// Card.jsx
import React from 'react';

const Card = ({ title, desc, link }) => {
    return (
        <div className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg">
            <h3 className="text-lg xs:text-xl mb-1  lg:font-medium xs:font-bold">{title}</h3>
            <p className="text-gray-400  lg:text-sm xs:text-lg">{desc}</p>
            <NavLink
                to={link}
                className="inline-flex items-center text-purple-600 text-sm font-medium mt-3"
            >
                Try Now
            </NavLink>
        </div>
    );
};

export default Card;
