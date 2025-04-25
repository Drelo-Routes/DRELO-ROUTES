import React, { useEffect, useState } from "react";
import logo from '../assets/images/logo.png';
import nkrumah from '../assets/images/nkrumah.png';
import { Link } from "react-router";

const Landing = () => {
  const words = ["Welcome", "Akwaaba", "Woezor", "Ojekoo", "Bienvenu", "Karibu"];
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
                One Ghana, One Thousand Routes, One Experiences.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center">
                <button className="bg-yellow-500 text-black font-semibold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 transform hover:-translate-y-1">
                  Discover Ghana
                </button>
                <button className="bg-transparent border-2 border-white text-white font-semibold text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white/10 transition duration-300 transform hover:-translate-y-1">
                  Explore Routes
                </button>
              </div>
            </div>
          </div>

          <div className="hidden sm:block absolute bottom-10 left-10 w-24 sm:w-32 h-24 sm:h-32 border-2 border-white/20 rounded-full z-10 animate-pulse"></div>
          <div className="hidden sm:block absolute top-20 right-20 w-12 sm:w-16 h-12 sm:h-16 border border-yellow-300/30 rounded-full z-10"></div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-yellow-500 font-medium">EXPLORE</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Popular Destinations
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-yellow-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Kwame Nkrumah Memorial",
                location: "Accra",
                img: "https://www.gacl.com.gh/wp-content/uploads/2018/04/Screen-Shot-2018-04-20-at-6.58.58-PM.png",
                description:
                  "Visit the final resting place of Ghana's first president and Pan-African visionary.",
              },
              {
                title: "Cape Coast Castle",
                location: "Cape Coast",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Cape_Coast_Castle%2C_Cape_Coast%2C_Ghana.JPG/1200px-Cape_Coast_Castle%2C_Cape_Coast%2C_Ghana.JPG",
                description:
                  "Explore this UNESCO World Heritage site and learn about Ghana's complex history.",
              },
              {
                title: "Mole National Park",
                location: "Northern Region",
                img: "https://worldbank.scene7.com/is/image/worldbankprod/ghana-mole-national-park-v3?wid=780&hei=439&qlt=85,0&resMode=sharp",
                description:
                  "Ghana's largest wildlife sanctuary featuring elephants, antelopes and over 300 bird species.",
              },
            ].map((dest, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="h-52 sm:h-64 overflow-hidden">
                  <img
                    className="w-full h-full object-cover hover:scale-110 transition duration-700"
                    src={dest.img}
                    alt={dest.title}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4">{dest.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-500 font-medium">
                      {dest.location}
                    </span>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center text-sm"
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
