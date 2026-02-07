// pages/Dashboard.jsx
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Dashboard = () => {
    const [search, setSearch] = useState('');
    const [filters, setFilters] = useState({
        type: 'all', // kindergarten, school, university
        nearHousing: false,
    });

    const sampleSchools = [
        { id: 1, name: 'Bright Kindergarten', type: 'kindergarten', lat: 41.2995, lng: 69.2401 },
        { id: 2, name: 'City High School', type: 'school', lat: 41.3100, lng: 69.2700 },
        { id: 3, name: 'Tech University', type: 'university', lat: 41.3150, lng: 69.2800 },
    ];

    const filteredSchools = sampleSchools.filter(school => {
        if (filters.type !== 'all' && school.type !== filters.type) return false;
        if (search && !school.name.toLowerCase().includes(search.toLowerCase())) return false;
        return true;
    });

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <header className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-blue-800">FindZone Dashboard</h1>
                <button className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition">
                    Logout
                </button>
            </header>

            {/* SEARCH & FILTERS */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Search for schools, kindergartens..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                />
                <select
                    value={filters.type}
                    onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                >
                    <option value="all">All</option>
                    <option value="kindergarten">Kindergarten</option>
                    <option value="school">School</option>
                    <option value="university">University</option>
                </select>
                <label className="flex items-center gap-2 text-gray-700">
                    <input
                        type="checkbox"
                        checked={filters.nearHousing}
                        onChange={(e) => setFilters({ ...filters, nearHousing: e.target.checked })}
                    />
                    Near Housing
                </label>
            </div>

            {/* MAIN CONTENT */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LIST */}
                <div className="lg:col-span-1 bg-white rounded-2xl shadow p-6">
                    <h2 className="text-xl font-bold mb-4">Results</h2>
                    {filteredSchools.map(school => (
                        <div key={school.id} className="mb-4 p-3 border rounded-xl hover:shadow-lg transition">
                            <h3 className="font-semibold text-blue-800">{school.name}</h3>
                            <p className="text-gray-600 capitalize">{school.type}</p>
                            <button className="mt-2 text-sm text-blue-600 hover:underline">
                                View details
                            </button>
                        </div>
                    ))}
                    {filteredSchools.length === 0 && <p className="text-gray-500">No results found</p>}
                </div>

                {/* MAP */}
                <div className="lg:col-span-2 h-96 rounded-2xl overflow-hidden shadow">
                    <MapContainer center={[41.2995, 69.2401]} zoom={13} style={{ height: '100%', width: '100%' }}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {filteredSchools.map(school => (
                            <Marker key={school.id} position={[school.lat, school.lng]}>
                                <Popup>
                                    {school.name} <br /> {school.type}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            </div>

            {/* IDEAS FOR SCALING */}
            <div className="mt-10 bg-white p-6 rounded-2xl shadow">
                <h2 className="text-xl font-bold mb-4">Future Features Ideas</h2>
                <ul className="list-disc list-inside text-gray-700">
                    <li>User favorites / saved searches</li>
                    <li>Nearby housing suggestions</li>
                    <li>Ratings & reviews for schools</li>
                    <li>Dynamic filtering by price / rating / distance</li>
                    <li>Notifications for new schools or apartments</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
