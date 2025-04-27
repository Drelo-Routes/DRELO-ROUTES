import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const HealthSafetyResource = () => {
  const [activeTab, setActiveTab] = useState('sexual-health');
  const [hoverTab, setHoverTab] = useState(null);
  const navigate = useNavigate();

  const tabs = {
    'sexual-health': {
      title: 'Sexual Health',
      content: <SexualHealthContent />
    },
    'first-aid': {
      title: 'First Aid',
      content: <FirstAidContent />
    },
    'local-resources': {
      title: 'Local Resources',
      content: <LocalResourcesContent />
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center p-6 bg-gradient-to-br from-white to-green-50">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg overflow-hidden border border-green-100">

        {/* Header with Back Button */}
        <div className="bg-gradient-to-r from-green-600 to-lime-500 p-6 relative overflow-hidden">
          <button
            onClick={() => navigate('/home')}
            className="absolute right-4 top-4 sm:right-6 sm:top-5 text-white font-bold hover:underline text-sm"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-bold text-white tracking-tight">Traveler Health & Safety</h2>
          <p className="text-lime-100 mt-1 text-lg">Essential information for a safe and healthy journey</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white shadow-sm">
          {Object.keys(tabs).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              onMouseEnter={() => setHoverTab(tabKey)}
              onMouseLeave={() => setHoverTab(null)}
              className={`flex items-center px-6 py-4 text-sm sm:text-lg font-semibold whitespace-nowrap transition duration-200 ${
                activeTab === tabKey
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              {tabs[tabKey].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 bg-white">
          <div className="animate-fadeIn">
            {tabs[activeTab].content}
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="bg-green-50 p-5 text-sm text-green-800 border-t border-green-100">
          <p className="font-medium text-green-700 mb-1">Disclaimer:</p>
          <p>This information is for educational purposes only. Always consult qualified healthcare providers for specific concerns.</p>
        </div>
      </div>
    </div>
  );
};

// ========== CONTENTS ==========

const CardSection = ({ title, children, accentColor = "green" }) => (
  <div className={`mb-8 bg-${accentColor}-50 rounded-lg overflow-hidden shadow-sm border border-${accentColor}-100`}>
    <div className={`bg-${accentColor}-600 px-4 py-3`}>
      <h4 className="text-lg font-medium text-white">{title}</h4>
    </div>
    <div className="p-5">
      {children}
    </div>
  </div>
);

const InfoAlert = ({ color, children }) => (
  <div className={`bg-${color}-50 border-l-4 border-${color}-400 p-4 my-4 rounded-r-md shadow-sm`}>
    <p className={`text-sm text-${color}-700`}>{children}</p>
  </div>
);

const SexualHealthContent = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-6 text-green-800 border-b pb-2">Sexual Health While Traveling</h3>

    <CardSection title="Protection & Prevention">
      <ul className="list-disc pl-6 space-y-3 mt-2 text-gray-700">
        <li>Always use condoms and barrier methods to reduce STI risks.</li>
        <li>Pack sufficient contraceptives before traveling.</li>
        <li>Check for interactions affecting contraception.</li>
        <li>Know emergency contraception options abroad.</li>
      </ul>
    </CardSection>

    <CardSection title="Local Considerations">
      <ul className="list-disc pl-6 space-y-3 mt-2 text-gray-700">
        <li>Research local attitudes and healthcare accessibility.</li>
        <li>Identify reputable pharmacies and doctors.</li>
        <li>Understand differences in healthcare product availability.</li>
        <li>Be aware of consent and relationship laws.</li>
      </ul>
    </CardSection>

    <CardSection title="STI Awareness">
      <ul className="list-disc pl-6 space-y-3 mt-2 text-gray-700">
        <li>Know common STI symptoms, even if asymptomatic.</li>
        <li>Get tested if you suspect exposure.</li>
        <li>Consider HIV post-exposure prophylaxis (PEP).</li>
        <li>Retest after travel even if symptom-free.</li>
      </ul>
    </CardSection>

    <InfoAlert color="yellow">
      Alcohol and substances may impair judgment ,  stay protected at all times.
    </InfoAlert>
  </div>
);

const FirstAidContent = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-6 text-green-800 border-b pb-2">First Aid Essentials</h3>

    <CardSection title="Basic First Aid Kit">
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Bandages, antiseptic wipes, and gauze pads.</li>
        <li>Painkillers and anti-diarrheal medicines.</li>
        <li>Antihistamines for allergies.</li>
        <li>Personal medications and prescriptions.</li>
      </ul>
    </CardSection>

    <CardSection title="Emergency Response Tips">
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Know how to treat wounds and burns.</li>
        <li>Recognize dehydration symptoms early.</li>
        <li>Manage allergic reactions properly.</li>
        <li>Call for help in serious emergencies!</li>
      </ul>
    </CardSection>

    <InfoAlert color="green">
      Know local emergency numbers before you need them.
    </InfoAlert>
  </div>
);

const LocalResourcesContent = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-6 text-green-800 border-b pb-2">Local Health Resources</h3>

    <CardSection title="Emergency Contacts">
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Emergency Number (Ghana): <strong>112</strong></li>
        <li>Nearest 24/7 Pharmacy Locator Apps.</li>
        <li>Hospitals close to major tourist centers.</li>
      </ul>
    </CardSection>

    <CardSection title="Recommended Health Centers">
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>City Clinics for general care.</li>
        <li>International hospitals for travelers.</li>
        <li>LGBTQ+ inclusive health centers.</li>
      </ul>
    </CardSection>

    <InfoAlert color="lime">
      Save offline copies of important numbers while traveling!
    </InfoAlert>
  </div>
);

export default HealthSafetyResource;
