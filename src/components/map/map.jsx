import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ places }) => {
    return (
        <MapContainer
            center={[41.2995, 69.2401]}
            zoom={12}
            className="h-full w-full rounded-2xl"
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {places.map(place => (
                <Marker key={place.id} position={[place.lat, place.lng]}>
                    <Popup>
                        <div className="text-sm">
                            <h3 className="font-bold">{place.name}</h3>
                            <p className="capitalize">{place.type}</p>
                            <p>⭐ {place.rating}</p>
                            <p className="text-gray-500">{place.address}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
