import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = { lat: -36.850127098234815, lng: 174.76459126009595 };


function Contact() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <div className='border-2 border-white p-4 rounded-lg bg-black bg-opacity-50 mx-8 my-4'>
                <div className="text-white mb-4">
                    <p>Location 📍 : 239 Queen Street, Auckland Central, 1010</p>
                    <p>Phone number: 0211865231</p>
                    <p>Kakao ID: jino2239</p>
                </div>
            </div>
            <div className='mx-4'>
                <LoadScript googleMapsApiKey="AIzaSyCge3KF9q0URCocNW1PwRA_uvlNG9pfHAc">
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={18}>
                        <Marker position={center} />
                    </GoogleMap>
                </LoadScript>
            </div>

        </div>
    );
}

export default Contact;
