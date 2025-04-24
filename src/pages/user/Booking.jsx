import React, { useState } from 'react';
import { FaHotel, FaCar, FaHiking, FaBullhorn } from 'react-icons/fa';

// 🔳 Custom VendorCard Component
const VendorCard = ({ name, description, phone, link, rating }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col gap-1">
    <div className="flex items-center justify-between">
      <h4 className="text-base font-semibold text-gray-800">{name}</h4>
      <div className="text-yellow-500 text-sm">
        {Array.from({ length: rating }, (_, i) => (
          <span key={i}>★</span>
        ))}
        {Array.from({ length: 5 - rating }, (_, i) => (
          <span key={i}>☆</span>
        ))}
      </div>
    </div>
    <p className="text-sm text-gray-700">{description}</p>
    <div className="flex gap-3 text-sm mt-1">
      {phone && (
        <a href={`tel:${phone}`} className="text-red-600 hover:underline">
          📞 {phone}
        </a>
      )}
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
          🌐 Website
        </a>
      )}
    </div>
  </div>
);

// 🔳 BookingCard Wrapper
const BookingCard = ({ title, color = 'gray', children }) => (
  <div className={`bg-${color}-50 border-l-4 border-${color}-500 p-4 rounded-md shadow-sm`}>
    <h4 className={`text-${color}-700 font-semibold mb-2`}>{title}</h4>
    {children}
  </div>
);

// 🔳 Main Booking Page
const Booking = () => {
  const [activeTab, setActiveTab] = useState('accommodation');

  const tabs = {
    accommodation: {
      title: 'Accommodation',
      icon: () => <FaHotel className="mr-2" />,
      content: (
        <BookingCard title="Top Stays in Accra" color="green">
          <div className="grid gap-4">
            <VendorCard
              name="La Villa Boutique Hotel"
              description="Stylish rooms in Osu with a restaurant and pool."
              phone="+233541234567"
              link="https://lavillahotel.com"
              rating={4}
            />
            <VendorCard
              name="Blue Nest Lodge"
              description="Airport Residential – Clean, affordable, central."
              phone="+233201112233"
              rating={3}
            />
          </div>
        </BookingCard>
      )
    },
    rentals: {
      title: 'Rentals',
      icon: () => <FaCar className="mr-2" />,
      content: (
        <BookingCard title="Trusted Car & Bike Rentals" color="blue">
          <div className="grid gap-4">
            <VendorCard
              name="Gold Ride Ghana"
              description="Daily & weekly car rentals in Accra."
              phone="+233209876543"
              rating={4}
            />
            <VendorCard
              name="City Bike Hire"
              description="Bike rentals in Accra, Kumasi & Cape Coast."
              link="https://citybikegh.com"
              rating={5}
            />
          </div>
        </BookingCard>
      )
    },
    experiences: {
      title: 'Experiences',
      icon: () => <FaHiking className="mr-2" />,
      content: (
        <BookingCard title="Local Experiences & Tours" color="purple">
          <div className="grid gap-4">
            <VendorCard
              name="Historic Ghana Tours"
              description="Custom trips to Cape Coast, Elmina, and Kakum."
              rating={5}
              phone="+233553212121"
            />
            <VendorCard
              name="Cultural Nights Jamestown"
              description="Evenings of drumming, storytelling & food."
              rating={4}
            />
          </div>
        </BookingCard>
      )
    },
    advertise: {
      title: 'Advertise Here',
      icon: () => <FaBullhorn className="mr-2" />,
      content: (
        <BookingCard title="Promote Your Business on Drelo Routes" color="amber">
          <p className="text-sm mb-3">
            Are you a hotel, rental agency, or tour operator? List your business here and get discovered by travelers.
          </p>
          <ul className="list-disc pl-6 text-sm space-y-2">
            <li>🎯 Visibility to local and global tourists</li>
            <li>📩 Submit your name, logo, and service details</li>
            <li>📧 Email: <a href="mailto:ads@dreloapp.com" className="underline text-blue-600">ads@dreloapp.com</a></li>
          </ul>
        </BookingCard>
      )
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg overflow-hidden border border-green-100">
      <div className="bg-gradient-to-r from-green-600 to-lime-500 p-6">
        <h2 className="text-3xl font-bold text-white">Booking Center</h2>
        <p className="text-lime-100 mt-1 text-base">Explore and connect with trusted vendors in Ghana</p>
      </div>

      {/* Tabs */}
      <div className="flex bg-white border-b overflow-x-auto">
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`flex items-center px-6 py-3 text-sm font-semibold transition whitespace-nowrap ${
              activeTab === key
                ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                : 'text-gray-600 hover:text-green-500 hover:bg-green-50'
            }`}
          >
            {tabs[key].icon()}
            {tabs[key].title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        {tabs[activeTab].content}
      </div>

      <div className="bg-green-50 p-4 text-xs text-green-800 border-t border-green-100">
        <p><strong>Note:</strong> Listings are curated or submitted by vendors. Always verify details before booking.</p>
      </div>
    </div>
  );
};

export default Booking;
