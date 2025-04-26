import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-geosearch/dist/geosearch.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';

import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';
import 'leaflet-routing-machine';

import mapVideo from '../../assets/images/map.mp4'; // ✅ Import the video

// 🔍 Search Bar
const SearchControl = ({ setDestination }) => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider({
      params: {
        viewbox: '-3.26,11.17,1.20,4.61', // Ghana bounds
        bounded: 1,
      },
    });

    const searchControl = new GeoSearchControl({
      provider,
      style: 'bar',
      showMarker: true,
      showPopup: true,
      autoClose: true,
      retainZoomLevel: false,
      animateZoom: true,
      keepResult: true,
    });

    map.addControl(searchControl);

    map.on('geosearch/showlocation', (result) => {
      const { x, y } = result.location;
      setDestination([y, x]);
    });

    return () => map.removeControl(searchControl);
  }, [map, setDestination]);

  return null;
};

// 📍 Routing + Summary
const RoutingControl = ({ from, to, setSummary }) => {
  const map = useMap();
  const routingControlRef = useRef(null);

  useEffect(() => {
    if (from && to) {
      if (routingControlRef.current) {
        map.removeControl(routingControlRef.current);
      }

      routingControlRef.current = L.Routing.control({
        waypoints: [L.latLng(from[0], from[1]), L.latLng(to[0], to[1])],
        routeWhileDragging: false,
        showAlternatives: false,
        createMarker: () => null,
      })
        .on('routesfound', function (e) {
          const route = e.routes[0];
          const summary = route.summary;
          setSummary({
            distance: (summary.totalDistance / 1000).toFixed(2) + ' km',
            time: Math.ceil(summary.totalTime / 60) + ' mins',
          });
        })
        .addTo(map);
    }
  }, [from, to, map, setSummary]);

  return null;
};

// 🌍 Main Component
const defaultCenter = [7.9465, -1.0232];

const MapPage = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [routeSummary, setRouteSummary] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      },
      () => {
        setUserLocation(defaultCenter);
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🔴 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={mapVideo} type="video/mp4" />
      </video>

      {/* 🔵 Content Card */}
      <div className="w-full max-w-4xl bg-white bg-opacity-90 rounded-lg shadow-lg p-6 space-y-6 relative z-10">
        
        {/* 🔙 Top Bar With Gradient */}
        <div className="flex justify-between items-center px-4 py-3 mb-6 rounded-md bg-[#3694A2] backdrop-blur-sm shadow-sm">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            🗺️ <span>Explore Ghana</span>
          </h2>
          <button
            onClick={() => navigate("/home")}
            className="text-sm text-white font-semibold hover:underline"
          >
            ← Back
          </button>
        </div>

        {/* Route Summary */}
        {routeSummary && (
          <div className="bg-gray-100 p-4 rounded text-sm">
            <h3 className="font-semibold text-gray-700 mb-1">📍 Route Summary</h3>
            <p>Distance: {routeSummary.distance}</p>
            <p>Estimated Time: {routeSummary.time}</p>
          </div>
        )}

        {/* Map Section */}
        <div className="rounded overflow-hidden border border-gray-300">
          {userLocation && (
            <MapContainer
              center={userLocation}
              zoom={10}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              />
              <SearchControl setDestination={setDestination} />
              <Marker position={userLocation} />
              {destination && <Marker position={destination} />}
              {destination && (
                <RoutingControl
                  from={userLocation}
                  to={destination}
                  setSummary={setRouteSummary}
                />
              )}
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapPage;
