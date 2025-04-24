import React from 'react';
import { useParams } from 'react-router';

// Temporarily replicate the data
import { regions } from './Explore'; // Or refactor to a shared file

const ExploreDetail = () => {
  const { id } = useParams();

  const attraction = regions
    .flatMap(region => region.attractions)
    .find(attraction => attraction.id === id);

  if (!attraction) return <p className="text-center text-gray-500">Attraction not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={attraction.image} alt={attraction.name} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h2 className="text-3xl font-bold mb-2">{attraction.name}</h2>
      <p className="text-sm text-gray-600 mb-1">📍 {attraction.location}</p>
      <p className="text-base text-gray-700 mt-2">{attraction.description}</p>
    </div>
  );
};

export default ExploreDetail;
