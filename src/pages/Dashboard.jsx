import React, { useState } from "react";
import { placesData } from "../data/placeData";
import MapView from "../components/map/Map";
import PlaceCard from "../components/card/PlaceCard";

const Dashboard = () => {
    const [filter, setFilter] = useState("all");
    const [search, setSearch] = useState("");

    const filteredPlaces = placesData.filter(place => {
        const byType = filter === "all" || place.type === filter;
        const bySearch = place.name.toLowerCase().includes(search.toLowerCase());
        return byType && bySearch;
    });

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* HEADER */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-blue-800">
                    EduZone Dashboard
                </h1>
                <input
                    type="text"
                    placeholder="Search schools, universities..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="px-4 py-2 rounded-xl border w-72"
                />
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Stat title="Schools" value={placesData.filter(p => p.type === "school").length} />
                <Stat title="Universities" value={placesData.filter(p => p.type === "university").length} />
                <Stat title="Hospitals" value={placesData.filter(p => p.type === "hospital").length} />
                <Stat title="Apartments" value={placesData.filter(p => p.type === "apartment").length} />
            </div>

            {/* FILTERS */}
            <div className="flex gap-3 flex-wrap mb-6">
                {["all", "kindergarten", "school", "university", "hospital", "hotel", "apartment"].map(type => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition ${filter === type
                                ? "bg-blue-700 text-white"
                                : "bg-white border hover:bg-blue-50"
                            }`}
                    >
                        {type.toUpperCase()}
                    </button>
                ))}
            </div>

            {/* CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LIST */}
                <div className="space-y-4 overflow-y-auto max-h-[520px] pr-2">
                    {filteredPlaces.length === 0 && (
                        <p className="text-gray-500 text-center mt-10">
                            No results found
                        </p>
                    )}
                    {filteredPlaces.map(place => (
                        <PlaceCard key={place.id} place={place} />
                    ))}
                </div>

                {/* MAP */}
                <div className="lg:col-span-2 h-[520px] bg-white rounded-2xl shadow">
                    <MapView places={filteredPlaces} />
                </div>
            </div>
        </div>
    );
};

const Stat = ({ title, value }) => (
    <div className="bg-white p-5 rounded-2xl shadow">
        <p className="text-gray-500 text-sm">{title}</p>
        <h2 className="text-3xl font-bold text-blue-800">{value}</h2>
    </div>
);

export default Dashboard;
