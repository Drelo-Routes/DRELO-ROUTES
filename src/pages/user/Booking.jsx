import React, { useState } from 'react';
import { FaHotel, FaCar, FaHiking, FaBullhorn } from 'react-icons/fa';
import { useNavigate } from "react-router";
import bgImage from '../../assets/images/kente.jpg'; // ✅ you can swap this later

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

// 🔳 Accommodation Regions Data
const regions = {
  GreaterAccra: [
    {
      name: "La Villa Boutique Hotel",
      description: "Stylish rooms in Osu with a restaurant and pool.",
      phone: "+233541234567",
      link: "https://lavillaghana.com/",
      rating: 4
    },
    {
      name: "Kempinski Hotel Gold Coast City",
      description: "Accra’s top luxury hotel with a spa, pool, fitness center, and world-class dining. 📍 Ridge, Accra",
      phone: "+233302746000",
      link: "https://www.kempinski.com/en/hotel-gold-coast-city?utm_medium=organic&utm_source=google&utm_campaign=KIACC1&utm_content=gmb&source=S308962248",
      rating: 5
    },
    {
      name: "Number One Oxford Street Hotel & Suites",
      description: "High-end suites with panoramic city views, fine dining, and modern amenities. 📍 Oxford Street, Osu",
      phone: "+233302788888",
      link: "#",
      rating: 5
    },
    {
      name: "Villa Monticello Boutique Hotel",
      description: "Award-winning boutique hotel known for its elegance, personalized service, and gourmet cuisine. 📍 Airport Residential Area",
      phone: "+233302785500",
      link: "https://villamonticello.com/",
      rating: 5
    },
    {
      name: "Mövenpick Ambassador Hotel",
      description: "Upscale business hotel with a large pool, spa, and international restaurant. 📍 Independence Avenue, Ridge",
      phone: "+233302611000",
      link: "https://movenpick.accor.com/en/africa/ghana/accra/moevenpick-ambassador-hotel-accra.html?merchantid=seo-maps-GH-B4P0&sourceid=aw-cen&utm_medium=seo+maps&utm_source=google+Maps&utm_campaign=seo+maps&utm_content=Accra",
      rating: 5
    },
    {
      name: "Labadi Beach Hotel",
      description: "Beachfront luxury with lush gardens, a serene pool, and a spa retreat vibe. 📍 Labadi Beach, Accra",
      phone: "+233302772501",
      link: "https://labadibeachhotelgh.com/",
      rating: 5
    },
    {
      name: "The African Regent Hotel",
      description: "African-inspired decor, great dining, and close to Accra Mall and airport. 📍 Airport West, Accra",
      phone: "+233302765180",
      link: "https://www.theafricanregenthotel.com/",
      rating: 4
    },
    {
      name: "Accra Marriott Hotel",
      description: "Polished business hotel offering airport convenience, dining, and elegant rooms. 📍 Airport City, Accra",
      phone: "+233302738000",
      link: "https://www.marriott.com/en-us/hotels/accmc-accra-marriott-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
      rating: 5
    },
    {
      name: "Best Western Premier Accra Airport Hotel",
      description: "Reliable comfort, free airport shuttle, international cuisine, and a rooftop bar. 📍 Airport Residential",
      phone: "+233302216570",
      link: "https://bestwesternpremier.com.gh/",
      rating: 4
    },
    {
      name: "Tang Palace Hotel",
      description: "Refined and quiet luxury near the airport with excellent service and Chinese cuisine. 📍 Roman Ridge, Accra",
      phone: "+233302252900",
      link: "https://www.tangpalacehotel.com.gh/",
      rating: 5
    },
    // (Skipping other regions for now to keep code short here)
  ]
};

// 🔳 Accommodation Tab
const AccommodationTab = () => {
  const [selectedRegion, setSelectedRegion] = useState('GreaterAccra');

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="regionSelect" className="block text-sm font-medium text-gray-700">
          Select Region:
        </label>
        <select
          id="regionSelect"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
        >
          {Object.keys(regions).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <BookingCard title={`Top Stays in ${selectedRegion}`} color="green">
        <div className="grid gap-4">
          {regions[selectedRegion]?.map((hotel, index) => (
            <VendorCard key={index} {...hotel} />
          ))}
        </div>
      </BookingCard>
    </div>
  );
};

// 🔳 Main Booking Page
const Booking = () => {
  const [activeTab, setActiveTab] = useState('accommodation');
  const navigate = useNavigate();

  const tabs = {
    accommodation: {
      title: 'Accommodation',
      icon: () => <FaHotel className="mr-2" />,
      content: <AccommodationTab />
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
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative max-w-4xl w-full bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg overflow-hidden border border-green-100 mt-10">
        <div className="bg-gradient-to-r from-green-600 to-lime-500 p-6 relative">
          <button
            onClick={() => navigate("/home")}
            className="absolute right-6 top-6 text-sm text-white font-bold hover:underline"
          >
            ← Back
          </button>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Booking Center</h2>
          <p className="text-lime-100 mt-1 text-base">
            Explore and connect with trusted vendors in Ghana
          </p>
        </div>

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

        <div className="p-6 bg-white">
          {tabs[activeTab].content}
        </div>

        <div className="bg-green-50 p-4 text-xs text-green-800 border-t border-green-100">
          <p>
            <strong>Note:</strong> Listings are curated or submitted by vendors. Always verify details before booking.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
