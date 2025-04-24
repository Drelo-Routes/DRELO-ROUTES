import React, { useEffect, useRef, useState } from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 space-y-6">
        <h2 className="text-xl font-bold text-gray-800">🗺️ Explore Ghana</h2>

        {routeSummary && (
          <div className="bg-gray-100 p-4 rounded text-sm">
            <h3 className="font-semibold text-gray-700 mb-1">📍 Route Summary</h3>
            <p>Distance: {routeSummary.distance}</p>
            <p>Estimated Time: {routeSummary.time}</p>
          </div>
        )}

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
