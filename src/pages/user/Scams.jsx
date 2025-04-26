import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaBusAlt, FaMoneyBillAlt, FaMapSigns, FaLaptop } from 'react-icons/fa';
import bgImage from '../../assets/images/kente.jpg'; // You can swap this image later

const ScamCard = ({ title, color = 'gray', children }) => (
  <div className={`bg-${color}-50 border-l-4 border-${color}-500 p-4 rounded-md shadow-sm`}>
    <h4 className={`text-${color}-700 font-semibold mb-2`}>{title}</h4>
    {children}
  </div>
);

const tabs = {
  transportation: {
    title: 'Transportation',
    icon: () => <FaBusAlt className="mr-2" />,
    content: (
      <ScamCard title="VIP Bus Ticket Scams & More" color="red">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Fake agents may sell unofficial bus tickets at Circle or Kaneshie terminals.</li>
          <li>Only purchase from known booths (STC, VIP Jeoun).</li>
          <li>Ignore “helpers” claiming to fast-track your seat.</li>
          <li>Watch out for fake drivers who pose as Uber/Bolt, always confirm the plate number in your app.</li>
          <li>Some drivers may “cancel” your trip but still offer to take you offline this is risky and untraceable.</li>
        </ul>
      </ScamCard>
    )
  },
  currency: {
    title: 'Currency/ATM',
    icon: () => <FaMoneyBillAlt className="mr-2" />,
    content: (
      <ScamCard title="ATM & Money Exchange Scams" color="amber">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Locals may offer to help at ATMs then steal card details or cash.</li>
          <li>Fake forex operators give counterfeit or outdated cedi notes.</li>
          <li>Use bank ATMs and official forex bureaus only.</li>
          <li>Some roadside money changers will distract you with “counting tricks” and shortchange you.</li>
          <li>Beware of ATMs that look tampered with, card skimmers are sometimes installed at night.</li>
        </ul>
      </ScamCard>
    )
  },
  tourguide: {
    title: 'Tour Guides',
    icon: () => <FaMapSigns className="mr-2" />,
    content: (
      <ScamCard title="Fake Tour Guides & Gatekeepers" color="blue">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Impostors offer “private tours” with no credentials.</li>
          <li>They may vanish after payment or give false info.</li>
          <li>Book guides via hotels or tourism board recommendations.</li>
          <li>Some “local guides” may charge an unofficial fee at beaches or tourist sites, always check for staff ID.</li>
          <li>Fake cultural events promoted on WhatsApp may lead to nothing but money loss.</li>
        </ul>
      </ScamCard>
    )
  },
  booking: {
    title: 'Booking',
    icon: () => <FaLaptop className="mr-2" />,
    content: (
      <ScamCard title="Online Booking & Fake Listings" color="purple">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Fake websites and listings on social media request full payment upfront.</li>
          <li>They disappear once paid with no trace or contact.</li>
          <li>Use only verified platforms like Airbnb, Booking.com.</li>
          <li>Some fraudsters repost legitimate listings with their own contact info, always cross-check addresses.</li>
          <li>Be careful with “WhatsApp booking” for rentals or events unless you’ve verified the source.</li>
        </ul>
      </ScamCard>
    )
  }
};

const Scams = () => {
  const [activeTab, setActiveTab] = useState('transportation');
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-white to-yellow-50 rounded-xl shadow-lg overflow-hidden border border-yellow-100 mt-10">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-yellow-500 p-6 relative">
          <button
            onClick={() => navigate("/home")}
            className="absolute right-6 top-6 text-sm text-white hover:underline font-bold"
          >
            ← Back
          </button>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ghana Scam Awareness</h2>
          <p className="text-yellow-100 mt-1 text-base">
            Learn how to protect yourself from common tourist scams
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap bg-white border-b overflow-x-auto">
          {Object.keys(tabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-4 md:px-6 py-2 text-sm font-semibold transition whitespace-nowrap ${
                activeTab === key
                  ? 'text-red-600 border-b-2 border-red-600 bg-red-50'
                  : 'text-gray-600 hover:text-red-500 hover:bg-red-50'
              }`}
            >
              {tabs[key].icon()}
              {tabs[key].title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="p-6 bg-white">{tabs[activeTab].content}</div>

        {/* Footer */}
        <div className="bg-red-50 p-4 text-xs text-red-800 border-t border-red-100">
          <p><strong>Note:</strong> This guide is based on real reports and observations. Always verify bookings and avoid sharing sensitive info.</p>
        </div>
      </div>
    </div>
  );
};

export default Scams;
