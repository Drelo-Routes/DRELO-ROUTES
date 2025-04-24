import React, { useState } from 'react';

const HealthSafetyResource = () => {
  const [activeTab, setActiveTab] = useState('sexual-health');
  const [hoverTab, setHoverTab] = useState(null);
  
  const tabs = {
    'sexual-health': {
      title: 'Sexual Health',
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
      ),
      content: <SexualHealthContent />
    },
    'first-aid': {
      title: 'First Aid',
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm5 4a1 1 0 10-2 0v3a1 1 0 102 0V9zm4 0a1 1 0 10-2 0v3a1 1 0 102 0V9z" clipRule="evenodd" />
        </svg>
      ),
      content: <FirstAidContent />
    },
    'local-resources': {
      title: 'Local Resources',
      icon: () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      content: <LocalResourcesContent />
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg overflow-hidden border border-blue-100">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute transform rotate-12 -left-10 -top-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute transform -rotate-12 right-10 bottom-5 w-20 h-20 rounded-full bg-white"></div>
        </div>
        <h2 className="text-3xl font-bold text-white tracking-tight">Traveler Health & Safety</h2>
        <p className="text-blue-100 mt-1 text-lg">Essential information for a safe and healthy journey</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-white shadow-sm">
        {Object.keys(tabs).map((tabKey) => (
          <button
            key={tabKey}
            className={`flex items-center px-6 py-4 text-lg font-medium transition duration-200 ${
              activeTab === tabKey
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
            }`}
            onClick={() => setActiveTab(tabKey)}
            onMouseEnter={() => setHoverTab(tabKey)}
            onMouseLeave={() => setHoverTab(null)}
          >
            <span className={`transition-transform duration-200 ${(hoverTab === tabKey || activeTab === tabKey) ? 'scale-110' : 'scale-100'}`}>
              {tabs[tabKey].icon()}
            </span>
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

      <div className="bg-blue-50 p-5 text-sm text-blue-800 border-t border-blue-100">
        <p className="font-medium text-blue-700 mb-1">Disclaimer:</p>
        <p>
          This information is provided for educational purposes only and is not a substitute for 
          professional medical advice. Always consult qualified healthcare providers for specific 
          health concerns.
        </p>
      </div>
    </div>
  );
};

const CardSection = ({ title, children, accentColor = "blue" }) => (
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
    <div className="flex">
      <div className="ml-3">
        <p className={`text-sm text-${color}-700`}>{children}</p>
      </div>
    </div>
  </div>
);

const SexualHealthContent = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-6 text-blue-800 border-b pb-2">Sexual Health While Traveling</h3>
    
    <CardSection title="Protection & Prevention" accentColor="blue">
      <ul className="list-disc pl-6 space-y-3 mt-2">
        <li>Always use condoms and other barrier methods to reduce the risk of STIs</li>
        <li>Pack sufficient supplies of your preferred contraceptives before traveling</li>
        <li>Be aware that medication interactions (including antibiotics) can affect contraceptive effectiveness</li>
        <li>Consider emergency contraception options and how to access them at your destination</li>
      </ul>
    </CardSection>

    <CardSection title="Local Considerations" accentColor="indigo">
      <ul className="list-disc pl-6 space-y-3 mt-2">
        <li>Research local attitudes toward relationships and sexual health</li>
        <li>Identify reputable pharmacies and healthcare providers at your destination</li>
        <li>Be aware that not all countries have the same access to sexual health products</li>
        <li>Understand local laws regarding consent, age of consent, and LGBTQ+ relationships</li>
      </ul>
    </CardSection>

    <CardSection title="STI Awareness" accentColor="purple">
      <ul className="list-disc pl-6 space-y-3 mt-2">
        <li>Know the symptoms of common STIs, though many infections may be asymptomatic</li>
        <li>Seek testing after unprotected sexual contact or if you notice any symptoms</li>
        <li>Consider post-exposure prophylaxis (PEP) options for HIV exposure (must be started within 72 hours)</li>
        <li>Get tested after returning home, even if you don't have symptoms</li>
      </ul>
    </CardSection>

    <InfoAlert color="yellow">
      Remember that alcohol and substances can impair judgment and may affect your ability to practice safer sex.
    </InfoAlert>
  </div>
);

const FirstAidContent = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-6 text-blue-800 border-b pb-2">Travel First Aid Essentials</h3>
    
    <CardSection title="Basic First Aid Kit" accentColor="green">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ul className="list-disc pl-6 space-y-2">
          <li>Adhesive bandages in various sizes</li>
          <li>Antiseptic wipes and antibacterial ointment</li>
          <li>Sterile gauze pads and adhesive tape</li>
          <li>Tweezers, scissors, and safety pins</li>
        </ul>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pain relievers (acetaminophen, ibuprofen)</li>
          <li>Anti-diarrheal medication and rehydration salts</li>
          <li>Antihistamines for allergic reactions</li>
          <li>Personal medications with copies of prescriptions</li>
        </ul>
      </div>
    </CardSection>

    <CardSection title="Emergency Responses" accentColor="red">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-4 shadow-sm border border-red-100">
          <h5 className="font-medium text-red-700 mb-2">Cuts and Wounds:</h5>
          <ol className="list-decimal pl-6 space-y-1 text-gray-700">
            <li>Clean the wound with clean water</li>
            <li>Apply antiseptic</li>
            <li>Cover with sterile bandage</li>
            <li>Seek medical help for deep cuts or signs of infection</li>
          </ol>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-red-100">
          <h5 className="font-medium text-red-700 mb-2">Heat Exhaustion:</h5>
          <ol className="list-decimal pl-6 space-y-1 text-gray-700">
            <li>Move to a cool place</li>
            <li>Drink water or sports drinks</li>
            <li>Apply cool, wet cloths to the body</li>
            <li>Seek medical help if symptoms persist</li>
          </ol>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-red-100">
          <h5 className="font-medium text-red-700 mb-2">Allergic Reactions:</h5>
          <ol className="list-decimal pl-6 space-y-1 text-gray-700">
            <li>Take antihistamine if symptoms are mild</li>
            <li>For severe reactions, use emergency epinephrine if available</li>
            <li>Seek immediate medical help for difficulty breathing or swelling</li>
          </ol>
        </div>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-red-100">
          <h5 className="font-medium text-red-700 mb-2">Dehydration:</h5>
          <ol className="list-decimal pl-6 space-y-1 text-gray-700">
            <li>Drink water and electrolyte solutions</li>
            <li>Rest in a cool, shaded area</li>
            <li>Avoid alcohol and caffeine</li>
            <li>Seek medical help if severe symptoms occur</li>
          </ol>
        </div>
      </div>
    </CardSection>

    <InfoAlert color="red">
      Call local emergency services immediately for serious injuries, chest pain, difficulty breathing, 
      severe allergic reactions, or loss of consciousness.
    </InfoAlert>
  </div>
);

const LocalResourcesContent = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-6 text-blue-800 border-b pb-2">Local Health Resources</h3>
    
    <CardSection title="Emergency Contacts" accentColor="amber">
      <div className="bg-white rounded-lg p-5 shadow-sm">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 font-medium text-gray-700">Emergency Number:</div>
          <div className="col-span-2 text-amber-700 font-medium">112 (International)</div>
          
          <div className="col-span-1 font-medium text-gray-700">Tourist Police:</div>
          <div className="col-span-2">+XX-XXX-XXXX</div>
          
          <div className="col-span-1 font-medium text-gray-700">24/7 Hospital:</div>
          <div className="col-span-2">Central City Hospital</div>
          
          <div className="col-span-1 font-medium text-gray-700">Pharmacy Hotline:</div>
          <div className="col-span-2">+XX-XXX-XXXX</div>
        </div>
      </div>
    </CardSection>

    <CardSection title="Sexual Health Resources" accentColor="violet">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-violet-400">
          <h5 className="font-medium text-violet-700">City Health Clinic</h5>
          <p className="text-gray-600 mt-1">Free confidential STI testing and treatment</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-violet-400">
          <h5 className="font-medium text-violet-700">International Health Center</h5>
          <p className="text-gray-600 mt-1">English-speaking doctors and services</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-violet-400">
          <h5 className="font-medium text-violet-700">Women's Health Center</h5>
          <p className="text-gray-600 mt-1">Reproductive health services</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-violet-400">
          <h5 className="font-medium text-violet-700">LGBTQ+ Support Center</h5>
          <p className="text-gray-600 mt-1">Resources and healthcare referrals</p>
        </div>
      </div>
    </CardSection>

    <CardSection title="Health Apps & Tools" accentColor="cyan">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="bg-cyan-100 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg>
          </div>
          <h5 className="font-medium text-cyan-700">MedTranslate</h5>
          <p className="text-gray-600 text-sm mt-1">Medical translation app for communicating symptoms</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="bg-cyan-100 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h5 className="font-medium text-cyan-700">PharmFinder</h5>
          <p className="text-gray-600 text-sm mt-1">Locate 24/7 pharmacies nearby</p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm text-center">
          <div className="bg-cyan-100 rounded-full p-3 mx-auto w-16 h-16 flex items-center justify-center mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h5 className="font-medium text-cyan-700">EmergencyConnect</h5>
          <p className="text-gray-600 text-sm mt-1">One-touch emergency services with GPS location</p>
        </div>
      </div>
    </CardSection>

    <InfoAlert color="blue">
      Download our destination-specific health guide before your trip for offline access to
      detailed maps of health facilities and customized emergency information.
    </InfoAlert>
  </div>
);

export default HealthSafetyResource;