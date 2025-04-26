import React, { useState } from 'react';
import { FaCheckCircle, FaLanguage, FaUtensils, FaPeopleCarry } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import kente from '../../assets/images/kente.jpg';

const CultureCard = ({ title, color = 'green', children }) => (
  <div className={`bg-${color}-50 border-l-4 border-${color}-500 p-4 rounded-md shadow-sm`}>
    <h4 className={`text-${color}-700 font-semibold mb-2`}>{title}</h4>
    {children}
  </div>
);

const cultureTabs = {
  dosdonts: {
    title: 'Dos & Don’ts',
    icon: () => <FaCheckCircle className="mr-2" />,
    content: (
      <CultureCard title="Ghanaian Etiquette" color="green">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>👋 Always greet people when you enter a room or meet someone—it’s big here.</li>
          <li>🫱 Use your right hand when giving or receiving items. Left hand = rude.</li>
          <li>🙏 Avoid public confrontation. Respect is a huge cultural pillar.</li>
          <li>👣 Don’t point at people with your fingers—gesture with your whole hand.</li>
        </ul>
      </CultureCard>
    )
  },
  slangs: {
    title: 'Slangs & Meanings',
    icon: () => <FaLanguage className="mr-2" />,
    content: (
      <CultureCard title="Common Ghanaian Slangs" color="yellow">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>“Chale” – Friend or buddy (you’ll hear this everywhere!)</li>
          <li>“Abi” – Right?/Isn’t it? (used for confirmation)</li>
          <li>“Troski” – Local shared minibus transport.</li>
          <li>“Wahala” – Trouble/problem. (“No wahala” = no problem.)</li>
        </ul>
      </CultureCard>
    )
  },
  food: {
    title: 'Foods & Snacks',
    icon: () => <FaUtensils className="mr-2" />,
    content: (
      <CultureCard title="Tasty Treats in Ghana" color="red">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Jollof Rice 🍚🔥 – A spicy tomato-based rice dish. Fierce rivalry with Nigeria.</li>
          <li>Kelewele 🍌🌶️ – Fried spicy plantain cubes, often sold by street vendors.</li>
          <li>Waakye 🫘🍖 – A breakfast fave made of rice and beans, usually with meat and spaghetti.</li>
          <li>Chinchinga 🍢 – Ghanaian kebabs. Spicy and smoky, absolute street gold.</li>
        </ul>
      </CultureCard>
    )
  },
  lifestyle: {
    title: 'Way of Life',
    icon: () => <FaPeopleCarry className="mr-2" />,
    content: (
      <CultureCard title="Ghanaian Lifestyle" color="blue">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>🕰️ Things move at their own pace. “Ghana Man Time” is real—be flexible.</li>
          <li>🎶 Music and dance are deeply rooted. Highlife, Azonto, and Afrobeat rule the airwaves.</li>
          <li>👪 Community and family are everything. Don’t be surprised by how close-knit people are.</li>
          <li>🛐 Religion is part of everyday life—expect to see churches and hear gospel music a lot.</li>
        </ul>
      </CultureCard>
    )
  }
};

const Culture = () => {
  const [activeTab, setActiveTab] = useState('dosdonts');
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center p-4 md:p-8 flex items-center justify-center"
      style={{ backgroundImage: `url(${kente})` }}
    >
      <div className="relative w-full max-w-4xl bg-gradient-to-br from-white to-green-50 rounded-xl shadow-lg overflow-hidden border border-green-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-yellow-400 p-6 relative">
          <button
            onClick={() => navigate('/home')}
            className="absolute right-4 top-4 text-sm text-white font-bold hover:underline"
          >
            ← Back
          </button>
          <h2 className="text-2xl md:text-3xl font-bold text-white">Ghana Cultural Insights</h2>
          <p className="text-yellow-100 mt-1 text-base">A guide to living, vibing, and eating like a local</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap bg-white border-b overflow-x-auto">
          {Object.keys(cultureTabs).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center px-4 md:px-6 py-2 text-sm font-semibold transition whitespace-nowrap ${
                activeTab === key
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-green-500 hover:bg-green-50'
              }`}
            >
              {cultureTabs[key].icon()}
              {cultureTabs[key].title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 bg-white">{cultureTabs[activeTab].content}</div>

        {/* Footer */}
        <div className="bg-green-50 p-4 text-xs text-green-800 border-t border-green-100">
          <p>
            <strong>Note:</strong> Ghana is warm and welcoming. Embrace the culture, stay respectful, and you’ll enjoy every moment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Culture;
