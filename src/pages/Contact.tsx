import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
    return (
        <div>
            <div>
                <p>Location 📍  : 239 Queens Street, Auckland CBD, 1010, Cityfitness</p>
                <p>Phone number: 0211865231</p>
                <p>Kakao ID : jino2239</p>
            </div>

            <div>
                <MapContainer
                    center={[-36.8502, 174.7646]}
                    zoom={13}
                    style={{ height: '400px', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='© OpenStreetMap'
                    />
                </MapContainer>
            </div>
        </div>
    )
}

export default Contact
