import React from "react";

const PlaceCard = ({ place }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
            <div className="flex justify-between items-start">
                <h3 className="font-bold text-blue-800">{place.name}</h3>
                <button className="text-gray-400 hover:text-red-500">❤️</button>
            </div>

            <p className="text-sm text-gray-600 capitalize">{place.type}</p>
            <p className="text-sm mt-1">⭐ {place.rating}</p>
            <p className="text-xs text-gray-500 mt-1">{place.address}</p>

            <button className="mt-3 text-sm text-blue-600 hover:underline">
                View details →
            </button>
        </div>
    );
};

export default PlaceCard;
