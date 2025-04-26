import React, { useEffect, useState } from "react";
import logo from '../assets/images/logo.png';
import nkrumah from '../assets/images/nkrumah.png';
import { Link, useNavigate } from "react-router";
import Footer from "./Footer";
import booking from '../assets/images/booking.png';


const destinations = [
  {
    title: "Kwame Nkrumah Memorial",
    location: "Accra",
    img: "https://www.gacl.com.gh/wp-content/uploads/2018/04/Screen-Shot-2018-04-20-at-6.58.58-PM.png",
    shortDescription: "Visit the final resting place of Ghana's first president and Pan-African visionary.",
    fullDescription: "The Kwame Nkrumah Memorial Park honors Ghana’s first President and Pan-African leader. Located in downtown Accra, it includes his mausoleum, a museum with personal artifacts, and beautiful gardens symbolizing unity and liberation."
  },
  {
    title: "Cape Coast Castle",
    location: "Cape Coast",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Cape_Coast_Castle%2C_Cape_Coast%2C_Ghana.JPG/1200px-Cape_Coast_Castle%2C_Cape_Coast%2C_Ghana.JPG",
    shortDescription: "Explore this UNESCO World Heritage site and learn about Ghana's complex history.",
    fullDescription: "Cape Coast Castle was one of the largest slave-holding sites during the Atlantic Slave Trade. Its haunting dungeons and the 'Door of No Return' offer a powerful reflection on history and resilience."
  },
  {
    title: "Mole National Park",
    location: "Northern Region",
    img: "https://worldbank.scene7.com/is/image/worldbankprod/ghana-mole-national-park-v3?wid=780&hei=439&qlt=85,0&resMode=sharp",
    shortDescription: "Ghana's largest wildlife sanctuary featuring elephants, antelopes and over 300 bird species.",
    fullDescription: "Covering 4,840 sq km, Mole National Park is home to elephants, antelopes, baboons, and over 300 bird species. Guided safaris offer thrilling encounters with wildlife in their natural habitat."
  }
];

const Landing = () => {
  const [expanded, setExpanded] = useState(null);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const type = () => {
      const word = ["Welcome", "Akwaaba", "Woezor", "Ojekoo", "Bienvenu", "Karibu", "Maraaba"][index];
      if (charIndex <= word.length) {
        setText(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % 7);
          setCharIndex(0);
        }, 1800);
      }
    };
    const timer = setTimeout(type, charIndex <= 7 ? 120 : 0);
    return () => clearTimeout(timer);
  }, [charIndex, index]);

  const toggleExpand = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div className="bg-gray-50 font-sans">
      {/* Hero Section */}
      <section>
        <div
          className="bg-cover bg-center min-h-screen relative overflow-hidden"
          style={{ backgroundImage: `url(${nkrumah})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>

          <div className="absolute top-4 right-4 flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 z-20">
            <Link to="/login">
              <button className="text-white font-medium text-sm sm:text-lg hover:text-yellow-300 transition px-3 py-2">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="bg-white/10 backdrop-blur-sm text-white font-medium text-sm sm:text-lg hover:bg-white/20 transition px-4 py-2 rounded-full border border-white/30">
                Signup
              </button>
            </Link>
          </div>

          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-white/10 backdrop-blur-sm p-2 rounded-full">
              <img
                src={logo}
                alt="DreLo Logo"
                className="h-20 sm:h-28 md:h-36 object-contain filter drop-shadow-lg"
              />
            </div>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-6 pt-16 sm:pt-20">
            <div className="bg-black/30 backdrop-blur-sm px-6 sm:px-12 py-8 sm:py-10 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                <span className="typing bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                  {text}
                </span>
                <span className="animate-pulse text-yellow-300">|</span>
              </h1>

              <p className="text-base sm:text-xl md:text-2xl max-w-2xl sm:max-w-3xl font-medium mb-10 leading-relaxed text-gray-100">
                One Ghana, One Thousand Routes, One Experience.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                <button 
  onClick={() => navigate("/signup")}
  className="bg-yellow-500 text-black font-semibold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:-translate-y-1"
>
  Get Started
</button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Explore Section */}
      <section className="py-16 sm:py-20 bg-green-50  px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-yellow-500 font-medium">EXPLORE</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Popular Destinations
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((dest, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
                <div className="h-52 sm:h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                    src={dest.img}
                    alt={dest.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">{dest.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{dest.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-500 font-medium">{dest.location}</span>
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm focus:outline-none"
                    >
                      {expanded === idx ? "Hide Details" : "View Details"}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Expanded Full Description */}
                  {expanded === idx && (
                    <div className="mt-4 text-gray-700 text-sm">{dest.fullDescription}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Drelo Section */}
      <section className="relative py-20 px-6 text-center text-white" style={{ backgroundImage: `url(${booking})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-2">
              About Drelo Routes
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          <p className="text-lg sm:text-xl leading-relaxed mb-10 mt-4">
            Drelo Routes is your all-in-one travel companion across Ghana. Explore breathtaking regions, find safety tips, book trusted accommodations, navigate with real-time maps, check weather forecasts, and chat directly with DreloBot, your smart AI assistant for personalized travel advice.
          </p>
          <p className="text-md sm:text-lg text-yellow-300">Travel. Explore. Experience. Safely.</p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Landing;
