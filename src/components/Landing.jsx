import React, { useEffect, useState } from "react";
import logo from '../assets/images/logo.png';
import nkrumah from '../assets/images/nkrumah.png'

const Landing = () => {
  const words = ["Welcome", "Akwaaba", "Woezor", "Nkoee"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const type = () => {
      const word = words[index];
      if (charIndex <= word.length) {
        setText(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % words.length);
          setCharIndex(0);
        }, 1800);
      }
    };
    const timer = setTimeout(type, charIndex <= words[index].length ? 120 : 0);
    return () => clearTimeout(timer);
  }, [charIndex, index]);

  return (
    <div className="bg-gray-50 font-sans">
      

      {/* Hero Section */}
      <section>
        <div
          className="bg-cover bg-center h-screen relative overflow-hidden"
          style={{ backgroundImage: `url(${nkrumah})` }} 
        >
          {/* Overlay with gradient for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20"></div>

          {/* Login & Signup */}
          <div className="absolute top-6 right-8 flex space-x-8 z-20">
            <button className="text-white font-medium text-lg hover:text-yellow-300 transition-colors duration-300 px-3 py-2">
              Login
            </button>
            <button className="bg-white/10 backdrop-blur-sm text-white font-medium text-lg hover:bg-white/20 transition-all duration-300 px-5 py-2 rounded-full border border-white/30">
              Signup
            </button>
          </div>

          {/* Logo at top */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20 ">
            <div className=" bg-white/10 backdrop-blur-sm p-2 rounded-full">
              { <img
                src={logo}
                alt="DreLo Logo"
                className="h-28 md:h-36 object-contain filter drop-shadow-lg"
              /> }
            </div>
          </div>

          {/* Centered text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-6 pt-20">
            <div className="bg-black/30 backdrop-blur-sm px-12 py-10 rounded-3xl border border-white/10 shadow-2xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide">
                <span className="typing bg-gradient-to-r from-yellow-200 to-white bg-clip-text text-transparent">
                  {text}
                </span>
                <span className="animate-pulse text-yellow-300">|</span>
              </h1>

              <p className="text-xl md:text-2xl max-w-3xl font-medium mb-10 leading-relaxed text-gray-100">
                One Ghana, One Thousand Experiences, One People.
              </p>

              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 justify-center">
                <button className="bg-yellow-500 text-black font-semibold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
                  Discover Ghana
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  Explore Routes
                </button>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute bottom-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full z-10 animate-pulse"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border border-yellow-300/30 rounded-full z-10"></div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-medium">EXPLORE</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Popular Destinations
            </h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Destination Cards */}
            {[
              {
                title: "Kwame Nkrumah Memorial",
                location: "Accra",
                img: "https://via.placeholder.com/400x300",
                description:
                  "Visit the final resting place of Ghana's first president and Pan-African visionary.",
              },
              {
                title: "Cape Coast Castle",
                location: "Cape Coast",
                img: "https://via.placeholder.com/400x300",
                description:
                  "Explore this UNESCO World Heritage site and learn about Ghana's complex history.",
              },
              {
                title: "Mole National Park",
                location: "Northern Region",
                img: "https://via.placeholder.com/400x300",
                description:
                  "Ghana's largest wildlife sanctuary featuring elephants, antelopes and over 300 bird species.",
              },
            ].map((dest, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                    src={dest.img}
                    alt={dest.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{dest.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-500 font-medium">
                      {dest.location}
                    </span>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      View Details
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
