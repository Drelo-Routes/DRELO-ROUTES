import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Navigation Bar */}
      <div className="w-full top-0 z-50 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left side - Availability badge */}
          <div className="bg-white rounded-full py-2 px-4 flex items-center shadow-md hover:shadow-lg transition duration-300">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium">available for projects</span>
          </div>

          {/* Right side - Email contact */}
          <div className="bg-white rounded-full py-2 px-4 flex items-center shadow-md hover:shadow-lg transition duration-300">
            <span className="text-sm font-medium">hey@zenwood.studio</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="hero-section flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('assets/images/nkrumah.png')",
        }}
      >
        <div className="text-center px-4 md:px-8 max-w-4xl z-10 fade-in">
          <span className="inline-block bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            DISCOVER GHANA
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            AKWAABA! WOEZOR! OJEKOO! HAUSA! WELCOME!
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6 font-light">
            One Ghana. One Story. One People. One Experience.
          </p>
          <p className="text-lg text-gray-200 mb-10 max-w-2xl mx-auto">
            Your journey through Ghana starts with us - unforgettable landmarks,
            timeless culture, and stories & beauty that will stay with you
            forever.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-yellow-500 hover:bg-yellow-600 text-yellow-900 font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Tours
            </a>
            <a
              href="#"
              className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
            >
              Learn More
            </a>
          </div>
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

export default Home;
