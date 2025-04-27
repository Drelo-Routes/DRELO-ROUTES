import React, { useState } from 'react';
import { FaHotel, FaCar, FaHiking, FaBullhorn, FaStar, FaRegStar, FaPhone, FaGlobe, FaMapMarkerAlt, FaArrowLeft, FaClipboardList  } from 'react-icons/fa';
import { useNavigate } from 'react-router';

// 🔳 Enhanced VendorCard Component with improved aesthetics
const VendorCard = ({ name, description, phone, link, rating, location }) => (
  <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
      <div className="text-yellow-500 flex">
        {Array.from({ length: rating }, (_, i) => (
          <FaStar key={i} className="text-yellow-500" />
        ))}
        {Array.from({ length: 5 - rating }, (_, i) => (
          <FaRegStar key={i} className="text-yellow-300" />
        ))}
      </div>
    </div>
    
    {location && (
      <div className="flex items-center text-xs text-gray-500 mb-1">
        <FaMapMarkerAlt className="mr-1 text-gray-400" size={12} />
        <span>{location}</span>
      </div>
    )}
    
    <p className="text-sm text-gray-700">{description}</p>
    
    <div className="flex gap-4 text-sm mt-2 pt-2 border-t border-gray-100">
      {phone && (
        <a href={`tel:${phone}`} className="flex items-center text-red-600 hover:text-red-700 hover:underline">
          <FaPhone className="mr-1" size={12} /> {phone}
        </a>
      )}
      {link && (
        <a href={link} target="_blank" rel="noreferrer" className="flex items-center text-blue-600 hover:text-blue-700 hover:underline">
          <FaGlobe className="mr-1" size={12} /> Website
        </a>
      )}
    </div>
  </div>
);

// 🔳 Enhanced BookingCard Wrapper with smooth gradients
const BookingCard = ({ title, color = 'gray', icon, children }) => {
  const gradients = {
    green: "from-green-50 to-emerald-50",
    blue: "from-blue-50 to-sky-50",
    purple: "from-purple-50 to-indigo-50",
    amber: "from-amber-50 to-yellow-50",
    gray: "from-gray-50 to-slate-50"
  };
  
  const borders = {
    green: "border-l-emerald-500",
    blue: "border-l-sky-500",
    purple: "border-l-indigo-500",
    amber: "border-l-amber-500",
    gray: "border-l-gray-500"
  };
  
  const textColors = {
    green: "text-emerald-700",
    blue: "text-sky-700",
    purple: "text-indigo-700",
    amber: "text-amber-700",
    gray: "text-gray-700"
  };

  return (
    <div className={`bg-gradient-to-br ${gradients[color]} border-l-4 ${borders[color]} p-5 rounded-lg shadow-sm`}>
      <div className="flex items-center mb-3">
        {icon && <span className={`mr-2 ${textColors[color]}`}>{icon}</span>}
        <h4 className={`font-semibold ${textColors[color]}`}>{title}</h4>
      </div>
      {children}
    </div>
  );
};

// 🔳 Accommodation Regions Data
const accommodationRegions = {
  GreaterAccra: [
    {
      name: "Kempinski Hotel Gold Coast City",
      description: "Accra's top luxury hotel with a spa, pool, fitness center, and world-class dining.",
      phone: "+233 30 274 6000",
      link: "https://www.kempinski.com/accra",
      rating: 5,
      location: "Ridge, Accra"
    },
    {
      name: "Villa Monticello Boutique Hotel",
      description: "Award-winning boutique hotel known for its elegance, personalized service, and gourmet cuisine.",
      phone: "+233 30 278 5500",
      link: "https://villamonticello.com/",
      rating: 5,
      location: "Airport Residential Area"
    },
    {
      name: "Mövenpick Ambassador Hotel",
      description: "Upscale business hotel with a large pool, spa, and international restaurant.",
      phone: "+233 30 261 1000",
      link: "https://movenpick.accor.com/accra",
      rating: 5,
      location: "Independence Avenue, Ridge"
    },
    {
      name: "La Villa Boutique Hotel",
      description: "Stylish rooms in Osu with a restaurant and pool.",
      phone: "+233 54 123 4567",
      link: "https://lavillaghana.com/",
      rating: 4,
      location: "Osu, Accra"
    },
    {
      name: "Number One Oxford Street Hotel & Suites",
      description: "High-end suites with panoramic city views, fine dining, and modern amenities. 📍 Oxford Street, Osu",
      phone: "+233 30 278 8888",
      link: "#",
      rating: 5,
      location: "Oxford Street,Osu, Accra"
    },
    {
      name: "Villa Monticello Boutique Hotel",
      description: "Award-winning boutique hotel known for its elegance, personalized service, and gourmet cuisine. 📍 Airport Residential Area",
      phone: "+233 30 278 5500",
      link: "https://villamonticello.com/",
      rating: 5,
      location: "Airport Residential Area"
    },
    {
      name: "Labadi Beach Hotel",
      description: "Beachfront luxury with lush gardens, a serene pool, and a spa retreat vibe. 📍 Labadi Beach, Accra",
      phone: "+233 30 277 2501",
      link: "https://labadibeachhotelgh.com/",
      rating: 5,
      location: "Number one, La Rd, Accra"
    },
    {
      name: "The African Regent Hotel",
      description: "African-inspired decor, great dining, and close to Accra Mall and airport. 📍 Airport West, Accra",
      phone: "+233 30 276 5180",
      link: "https://www.theafricanregenthotel.com/",
      rating: 4,
      location: "Kofi Annan St, Accra, Accra"
    },
    {
      name: "Accra Marriott Hotel",
      description: "Polished business hotel offering airport convenience, dining, and elegant rooms. 📍 Airport City, Accra",
      phone: "+233 30 273 8000",
      link: "https://www.marriott.com/en-us/hotels/accmc-accra-marriott-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
      rating: 5,
      location: "Liberation Road, Accra"
    },
    {
      name: "Best Western Premier Accra Airport Hotel",
      description: "Reliable comfort, free airport shuttle, international cuisine, and a rooftop bar. 📍 Airport Residential",
      phone: "+233 30 221 6570",
      link: "https://bestwesternpremier.com.gh/",
      rating: 4,
      location: "Osu, Accra"
    },
    {
      name: "Tang Palace Hotel",
      description: "Refined and quiet luxury near the airport with excellent service and Chinese cuisine. 📍 Roman Ridge, Accra",
      phone: "+233 30 225 2900",
      link: "https://www.tangpalacehotel.com.gh/",
      rating: 5,
      location: "Osu, Accra"
    },
    {
      name: "Alisa Hotel North Ridge",
      description: "Modern rooms, a pool, and a great location near the city center.",
      phone: "+233 30 221 4244",
      link: "https://m.alisahotels.com/",
      rating: 4,
      location: "Osu, Accra"
    },
    {
      name: "Midindi Hotel",
      description: "Comfortable boutique hotel near embassies and museums.",
      phone: "+233 30 277 7547",
      link: "https://www.midindihotel.com/",
      rating: 3,
      location: "Osu, Accra"
    },
    {
      name: "Maple Leaf Hotel",
      description: "Budget-friendly with clean rooms and restaurant service.",
      phone: "+233 24 498 7654",
      link: "https://www.mapleleafhotelbooking.com/en/",
      rating: 3,
      location: "Osu, Accra"
    },
    {
      name: "Erata Hotel",
      description: "Affordable and peaceful with a pool, conference rooms, and decent food.",
      phone: "+23330 250 7079",
      link: "https://eratahotel.com/",
      rating: 3,
      location: "Osu, Accra"
    },
    {
      name: "Yegoala Hotel",
      description: "Modest but central with easy access to transportation.",
      phone: "+233 30 240 2378",
      link: "https://yegoalahotelgh.com/",
      rating: 3,
      location: "Osu, Accra"
    },
    {
      name: "Oak Plaza Hotel",
      description: "Close to the airport, known for comfort, good service, and conference amenities.",
      phone: "+233 30 281 7870",
      link: "https://oakplazahotel.com/",
      rating: 3,
      location: "Osu, Accra"
    },
    {
      name: "Laparadise Inn",
      description: "Quiet and cozy guesthouse in a serene neighborhood.",
      phone: "+233 20 123 4567",
      link: "",
      rating: 3,
      location: "Osu, Accra"
    },
    {
      name: "Urbano Hotel",
      description: "Trendy hotel in the heart of Osu, perfect for city explorers.",
      phone: "+233 30 279 8123",
      link: "https://www.urbanohotel-ghana.com/",
      rating: 3,
      location: "Osu, Accra"
    },
    {
      name: "Suncity Hotel Apartment",
      description: "Serviced apartments with rooftop pool, ideal for longer stays.",
      phone: "+233 30 290 2030",
      link: "https://www.suncity-apartments.com/",
      rating: 4,
      location: "Osu, Accra"
    },
    {
      name: "Kings Royal Atlantic Hotel",
      description: "Affordable luxury with a rooftop bar and restaurant.",
      phone: "+233 20 988 7665",
      link: "",
      rating: 4,
      location: "Osu, Accra"
    }

  ],
  'Volta Region': [
    {
      "name": "Volta Serene Hotel",
      "description": "Our hotel sits on the side of the picturesque Kabakaba Hill in Ho and our panoramic terraces provide the most magnificent views of the Ho township.",
      "phone": "+233 36 202 7777",
      "link": "https://voltaserenehotel.com/",
      "rating": 4,
      "location": "Ho, Volta Region"
    },
    {
      "name": "Volta Hotel Akosombo",
      "description": "Peaceful hotel with stunning river views, lush gardens, and boat rides on the Volta River.",
      "phone": "+233 54 435 7705",
      "link": "https://voltahotel.com.gh/",
      "rating": 4,
      "location": "Akosombo, Volta Region"
    },
    {
      "name": "Holy Trinity Spa & Health Farm",
      "description": "A spa resort surrounded by natural beauty along the Volta River, designed in calm, vegetation-green colors for full relaxation.",
      "phone": "+233 24 431 1160",
      "link": "https://www.spa.holytrinity.com.gh/",
      "rating": 4,
      "location": "Sogakope, Volta Region"
    },
    {
      "name": "African Hill Resort",
      "description": "Hilltop resort in Ho offering luxury stays with panoramic views.",
      "phone": "+233 20 826 7501",
      "link": "#",
      "rating": 2,
      "location": "Ho, Volta Region"
    },
    {
      "name": "Sogakope Beach Resort & Spa",
      "description": "A world of luxury and tranquility along the scenic banks of the famous Volta River.",
      "phone": "+233 36 219 6320",
      "link": "http://www.sogakopebeach.com/",
      "rating": 3,
      "location": "Sogakope, Volta Region"
    },
    {
      "name": "Shekinah Glory Hotel",
      "description": "Comfortable hotel with scenic views, offering personalized hospitality in Ho.",
      "phone": "+233 24 431 1160",
      "link": "#",
      "rating": 3,
      "location": "Ho, Volta Region"
    },
    {
      "name": "Kikis Court",
      "description": "Family-friendly resort near Tafi Atome Wildlife Sanctuary and Wli Waterfalls, perfect for nature lovers.",
      "phone": "+233 20 326 7020",
      "link": "http://www.kikiscourt.com/",
      "rating": 3,
      "location": "Hohoe, Volta Region"
    },
    {
      "name": "Afrikiko River Front Resort",
      "description": "Charming resort along the serene Volta River, ideal for relaxation and adventure activities.",
      "phone": "+233 24 262 5624",
      "link": "http://afrikikoresort.com/",
      "rating": 3,
      "location": "Akosombo, Volta Region"
    },
    {
      "name": "SkyPlus Hotel & Resorts",
      "description": "Elegant hotel offering modern rooms, a swimming pool, and authentic local cuisine.",
      "phone": "+233 20 812 3456",
      "link": "https://skyplushotel.com.gh/",
      "rating": 3,
      "location": "Ho, Volta Region"
    }
  ],
  'Northern Region': [
    {
      "name": "Zosimli Hotel",
      "description": "Great value hotel with a restaurant and clean rooms in Tamale.",
      "phone": "+233 24 437 0771",
      "link": "http://zosimlilodge.com",
      "rating": 3,
      "location": "Tamale"
    },
    {
      "name": "Radach Lodge and Conference Centre",
      "description": "Popular hotel in Tamale featuring spacious rooms, modern conference facilities, and serene surroundings.",
      "phone": "+233 37 202 2311",
      "link": "https://radachlodge.com",
      "rating": 3,
      "location": "Tamale"
    },
    {
      "name": "Mariam Hotel",
      "description": "Clean and comfortable option in Tamale with a rooftop bar and excellent customer service.",
      "phone": "+233 24 498 3262",
      "link": "https://mariamtamale.com",
      "rating": 4,
      "location": "Tamale"
    },
    {
      "name": "Gariba Lodge",
      "description": "Basic amenities with a quiet atmosphere, ideal for budget travelers visiting Tamale.",
      "phone": "+233 24 431 3567",
      "link": "https://garibalodgegh.com",
      "rating": 3,
      "location": "Tamale"
    },
    {
      "name": "Zosimli Executive Lodge",
      "description": "Warm hospitality, clean rooms, and proximity to Tamale Teaching Hospital.",
      "phone": "+233 37 202 2323",
      "link": "https://zosimlilodge.com",
      "rating": 4,
      "location": "Tamale"
    },
    {
      "name": "Picorna Hotel",
      "description": "One of the older hotels in Tamale with loyal clientele, good food, and conference space.",
      "phone": "+233 24 287 1555",
      "link": "https://picornahotel.com",
      "rating": 3,
      "location": "Tamale"
    },
    {
      "name": "Jeyads Lodge",
      "description": "Cozy lodge with modern amenities, free breakfast, and fast Wi-Fi in a calm neighborhood.",
      "phone": "+233 20 817 7537",
      "link": "https://jeyadslodge.com",
      "rating": 4,
      "location": "Tamale"
    },
    {
      "name": "Green Gold Hotel",
      "description": "Tranquil garden setting with great local dishes, perfect for private retreats and leisure stays.",
      "phone": "+233 24 986 1094",
      "link": "https://greengoldhotel.com",
      "rating": 4,
      "location": "Tamale"
    }
  ],
  'Central Region': [
    {
      name: "Ridge Royal Hotel",
      description: "Upscale hotel with a pool, gym, and stylish rooms, ideal for travelers visiting Cape Coast Castle.",
      phone: "+233 50 159 9044",
      link: "https://ridgeroyalhotel.com/",
      rating: 4,
      location: "Cape Coast, Central Region"
    },
    {
      name: "Coconut Grove Beach Resort",
      description: "Beachfront resort with lush gardens, horseback riding, and a golf course. Perfect for relaxation.",
      phone: "+233 20 208 8825",
      link: "https://coconutgrovehotelsghana.com/",
      rating: 4,
      location: "Elmina, Central Region"
    },
    {
      name: "Elmina Bay Resort",
      description: "Quiet, ocean-facing hotel offering a peaceful vibe, clean rooms, and tasty meals.",
      phone: "+233 50 300 3394",
      link: "http://elminabay.com/",
      rating: 4,
      location: "Elmina, Central Region"
    },
    {
      name: "Lemon Beach Resort",
      description: "Eco-friendly beach resort with modern African architecture, a wellness spa, and ocean views.",
      phone: "+233 50 555 6326",
      link: "https://lemonbeachresort.com/",
      rating: 4,
      location: "Elmina, Central Region"
    },
    {
      name: "Birdrock Hotel",
      description: "Mid-range beachfront hotel with a restaurant and friendly staff, close to Anomabo Fort.",
      phone: "+233 24 336 6124",
      link: "https://birdrockhotel.com/",
      rating: 3,
      location: "Anomabo, Central Region"
    },
    {
      name: "Brenu Beach Lodge",
      description: "Secluded beach hideaway offering simple comforts and a stunning sandy beach.",
      phone: "+233 24 947 7672",
      link: "https://brenubeachlodge.com/",
      rating: 4,
      location: "Brenu Akyinim, Central Region"
    },
    {
      name: "Orange Beach Resort",
      description: "Budget-friendly coastal resort with a bar and grill, steps from the historic Cape Coast Castle.",
      phone: "+233 24 781 4102",
      link: "https://orangebeachresort.com/",
      rating: 3,
      location: "Cape Coast, Central Region"
    },
    {
      name: "Hans Cottage Botel",
      description: "Unique stay above a crocodile pond, known for its natural setting and local cuisine.",
      phone: "+233 24 370 3414",
      link: "https://hansbotel.com/",
      rating: 3,
      location: "Cape Coast, Central Region"
    }
  ],

  'Ashanti Region': [
    {
      name: "Golden Tulip Kumasi City",
      description: "Modern luxury in Kumasi with large pool and restaurants.",
      phone: "+233 32 208 3777",
      link: "https://goldentulipkumasicity.com/",
      rating: 4,
      location: "Kumasi, Ashanti Region"
    },
    {
      name: "Lancaster Kumasi City",
      description: "Upscale stay with modern amenities, event halls, and great hospitality.",
      phone: "+233 32 208 3777",
      link: "https://lancasterhotels.com.gh/hotels/lancaster-kumasi-city/",
      rating: 4,
      location: "Kumasi, Ashanti Region"
    },
    {
      name: "Frederick’s Lodge",
      description: "Charming boutique hotel offering cozy rooms and friendly service near Kumasi city center.",
      phone: "+233 32 209 0828",
      link: "https://frederickslodge.com/",
      rating: 4,
      location: "Kumasi, Ashanti Region"
    },
    {
      name: "Noda Hotel",
      description: "Convenient hotel off the Accra-Kumasi road with pool, restaurant, and meeting facilities.",
      phone: "+233 24 424 3030",
      link: "https://nodahotel.com/",
      rating: 3,
      location: "Fumesua, Ashanti Region"
    },
    {
      name: "Miklin Hotel Kumasi",
      description: "Quiet hotel with clean rooms, conference facilities, and a calm environment.",
      phone: "+233 32 206 1081",
      link: "https://miklinhotels.com/kumasi/",
      rating: 3,
      location: "Kumasi, Ashanti Region"
    },
    {
      name: "Okumah Hotel",
      description: "Affordable and comfortable hotel with attentive staff and decent amenities.",
      phone: "+233 20 637 9464",
      link: "", // You had incomplete link for Okumah, left it empty
      rating: 3,
      location: "Kumasi, Ashanti Region"
    }
  ]
};

// 🔳 Rentals Regions Data
const rentalRegions = {
  GreaterAccra: [
    {
      name: "Gold Ride Ghana",
      description: "Premium car rental service with SUVs, sedans and luxury vehicles. Chauffeur option available.",
      phone: "+233 20 987 6543",
      link: "https://goldrideghanallc.com/",
      rating: 4,
      location: "Airport City, Accra"
    },
    {
      name: "Accra Car Rentals",
      description: "Reliable airport pickup and drop-off. Daily, weekly, and monthly rates available.",
      phone: "+233 24 456 7890",
      link: "https://accracarrentals.com/",
      rating: 4,
      location: "Osu, Accra"
    },
    {
      name: "City Bike Hire",
      description: "Eco-friendly bike rentals with guided cycling tours of Accra's historical sites.",
      phone: "+233 20 777 8899",
      link: "https://citybikegh.com",
      rating: 5,
      location: "Labadi, Accra"
    },
    {
      name: "Elite Motors Ghana",
      description: "Luxury car rentals including Mercedes, BMW, and Range Rover. Corporate packages available.",
      phone: "+233 30 222 3456",
      link: "https://elitemotorsgh.com/",
      rating: 5,
      location: "East Legon, Accra"
    }
  ],
  'Volta Region': [
    {
      name: "Volta Wheels",
      description: "Car and bike rentals in Ho. Perfect for exploring the mountainous region and winding roads.",
      phone: "+233 24 555 6677",
      link: "https://voltawheels.com/",
      rating: 4,
      location: "Ho, Volta Region"
    },
    {
      name: "Lakeside Rentals",
      description: "Boat and jet ski rentals on Lake Volta. Fishing equipment available for memorable adventures.",
      phone: "+233 55 667 7889",
      link: "https://lakesiderentalsgh.com/",
      rating: 5,
      location: "Akosombo, Volta Region"
    },
    {
      name: "Afadzato Tours & Rentals",
      description: "4x4 rentals for mountain adventures. Guided tours of Mount Afadzato available.",
      phone: "+233 20 444 5555",
      link: "https://afadzatogh.com/",
      rating: 3,
      location: "Hohoe, Volta Region"
    }
  ],
  'Northern Region': [
    {
      name: "Tamale Car Hire",
      description: "Reliable car rentals with experienced drivers familiar with northern routes and terrains.",
      phone: "+233 37 202 3030",
      link: "https://tamalecargh.com/",
      rating: 4,
      location: "Tamale, Northern Region"
    },
    {
      name: "Savannah Wheels",
      description: "Specializing in 4x4 rentals for off-road adventures in Mole National Park and beyond.",
      phone: "+233 24 987 0000",
      link: "https://savannahwheels.com/",
      rating: 4,
      location: "Tamale, Northern Region"
    }
  ]
};

// 🔳 Accommodation Tab Component
const AccommodationTab = () => {
  const [selectedRegion, setSelectedRegion] = useState('GreaterAccra');

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="regionSelect" className="block text-sm font-medium text-gray-700 mb-2">
          Select Region:
        </label>
        <select
          id="regionSelect"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 transition-colors"
        >
          {Object.keys(accommodationRegions).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <BookingCard 
        title={`Top Stays in ${selectedRegion}`} 
        color="green"
        icon={<FaHotel />}
      >
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {accommodationRegions[selectedRegion]?.map((hotel, index) => (
            <VendorCard key={index} {...hotel} />
          ))}
        </div>
      </BookingCard>
    </div>
  );
};

// 🔳 Rentals Tab Component
const RentalsTab = () => {
  const [selectedRegion, setSelectedRegion] = useState('GreaterAccra');

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="rentalRegionSelect" className="block text-sm font-medium text-gray-700 mb-2">
          Select Region:
        </label>
        <select
          id="rentalRegionSelect"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors"
        >
          {Object.keys(rentalRegions).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      <BookingCard 
        title={`Top Rentals in ${selectedRegion}`} 
        color="blue"
        icon={<FaCar />}
      >
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {rentalRegions[selectedRegion]?.map((rental, index) => (
            <VendorCard key={index} {...rental} />
          ))}
        </div>
      </BookingCard>
    </div>
  );
};

// Experience data
const experiences = [
  {
    name: "Historic Ghana Tours",
    description: "Custom trips to Cape Coast, Elmina Castle, and Kakum National Park with knowledgeable guides.",
    rating: 5,
    phone: "+233 55 321 2121",
    location: "Based in Accra, tours nationwide"
  },
  {
    name: "Cultural Nights Jamestown",
    description: "Vibrant evenings of traditional drumming, storytelling & authentic Ghanaian cuisine in historic Jamestown.",
    rating: 4,
    location: "Jamestown, Accra",
    phone: "+233 24 555 6789"
  },
  {
    name: "Akwaaba Cooking Classes",
    description: "Learn to prepare authentic Ghanaian dishes with local ingredients and traditional techniques.",
    rating: 5,
    location: "Osu, Accra",
    phone: "+233 59 256 8258"
  },
  {
    name: "Kakum Canopy Walk Adventure",
    description: "Experience the rainforest from above on Ghana's famous suspension bridges with expert guides.",
    rating: 5,
    location: "Cape Coast",
    phone: "+233 33 213 7777"
  }
];

// 🔳 Main Booking Page with enhanced styling
const Booking = () => {
  const [activeTab, setActiveTab] = useState('accommodation');
  const navigate = useNavigate();

  const tabs = {
    accommodation: {
      title: 'Accommodation',
      icon: <FaHotel className="mr-2" />,
      content: <AccommodationTab />
    },
    rentals: {
      title: 'Rentals',
      icon: <FaCar className="mr-2" />,
      content: <RentalsTab />
    },
    experiences: {
      title: 'Experiences',
      icon: <FaHiking className="mr-2" />,
      content: (
        <BookingCard 
          title="Local Experiences & Tours" 
          color="purple"
          icon={<FaHiking />}
        >
          <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
            {experiences.map((experience, index) => (
              <VendorCard key={index} {...experience} />
            ))}
          </div>
        </BookingCard>
      )
    },
    advertise: {
      title: 'Advertise Here',
      icon: <FaBullhorn className="mr-2" />,
      content: (
        <BookingCard 
          title="Promote Your Business on Drelo Routes" 
          color="amber"
          icon={<FaBullhorn />}
        >
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-sm mb-4">
              Are you a hotel, rental agency, or tour operator? List your business here and get discovered by travelers exploring Ghana.
            </p>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 text-center">
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="text-amber-600 text-xl mb-2">🎯</div>
                <h5 className="font-medium text-sm mb-1">Targeted Visibility</h5>
                <p className="text-xs text-gray-600">Reach local and global tourists planning their Ghana adventure</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="text-amber-600 text-xl mb-2">📱</div>
                <h5 className="font-medium text-sm mb-1">Mobile Optimized</h5>
                <p className="text-xs text-gray-600">Your listing works perfectly on all devices</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="text-amber-600 text-xl mb-2">💼</div>
                <h5 className="font-medium text-sm mb-1">Business Growth</h5>
                <p className="text-xs text-gray-600">Connect with travelers ready to book your services</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a href="mailto:ads@dreloapp.com" className="inline-block bg-amber-500 hover:bg-amber-600 transition-colors text-white py-2 px-6 rounded-full font-medium text-sm">
                Contact Our Team
              </a>
              <p className="mt-2 text-xs text-gray-500">Email: dreloroutes@gmail.com</p>
            </div>
          </div>
        </BookingCard>
      )
    }
  };

  return (
    <div
      className="bg-cover bg-center p-6 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2013/10/30/19/05/sunset-203188_640.jpg')"
      }}
    >
      <div className="max-w-4xl w-full bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg overflow-hidden border border-green-100">

        {/* Header with Back button on RIGHT */}
        <div className="bg-gradient-to-r from-green-600 to-lime-500 p-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="bg-green-600 bg-opacity-20 p-3 rounded-full mr-4">
              <FaClipboardList className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">Booking Center</h2>
              <p className="text-lime-100 mt-1 text-base">Explore and connect with trusted vendors in Ghana</p>
            </div>
          </div>

          {/* Back Button now on the right */}
          <button
            onClick={() => navigate('/home')}
            className="flex items-center text-white font-semibold px-4 py-2 rounded-full text-sm ml-4 transition"
          >
            <FaArrowLeft className="mr-2" /> Back
          </button>
        </div>

        {/* Tabs */}
        <div className="flex bg-white border-b overflow-x-auto">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-6 py-4 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === key
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50 shadow-sm'
                  : 'text-gray-600 hover:text-green-500 hover:bg-green-50'
              }`}
            >
              {tabs[key].icon}
              {tabs[key].title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          {tabs[activeTab].content}
        </div>

        {/* Footer */}
        <div className="bg-green-50 p-4 text-xs text-green-800 border-t border-green-100 flex flex-col md:flex-row items-center justify-between">
          <p className="mb-2 md:mb-0"><strong>Note:</strong> Listings are curated or submitted by vendors. Always verify details before booking.</p>
          <div className="flex items-center">
            <span className="mr-2">Powered by</span>
            <span className="font-bold text-green-700">Drelo Routes</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Booking;