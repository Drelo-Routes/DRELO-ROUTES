import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { regions } from './Explore'; // Shared regions data
import bg from '../../assets/images/kente.jpg'; // Background image

const ExploreDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const attraction = regions
    .flatMap((region) => region.attractions)
    .find((attraction) => attraction.id === id);

  if (!attraction)
    return <p className="text-center text-gray-500">Attraction not found.</p>;

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-start justify-center px-4 py-10 sm:py-16"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="max-w-3xl w-full bg-gradient-to-br from-white to-green-50 rounded-xl shadow-xl overflow-hidden border border-green-100">
        
        {/* Header with back button */}
        <div className="bg-gradient-to-r from-green-600 to-lime-500 text-white p-6 relative">
          <button
            onClick={() => navigate('/explore')}
            className="absolute right-6 top-6 text-sm font-semibold hover:underline"
          >
            ← Back
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold">{attraction.name}</h2>
          <p className="text-lime-100 mt-1 text-sm sm:text-base">📍 {attraction.location}</p>
        </div>

        {/* Full-width image */}
        <img
          src={attraction.image}
          alt={attraction.name}
          className="w-full h-64 sm:h-80 object-cover"
        />

        {/* Description */}
        <div className="p-6 text-gray-700">
          <p className="text-base text-gray-700 mt-2">{attraction.descriptionFull}</p>

        </div>
      </div>
    </div>
  );
};

export default ExploreDetail;
