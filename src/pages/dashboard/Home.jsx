import React, { useState } from 'react';
import { Link } from 'react-router';
import sea from '../../assets/images/sea.mp4';
import logo from '../../assets/images/logo.png';

const Home = () => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      <style>{`
        @keyframes shake {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          50% { transform: rotate(0deg); }
          75% { transform: rotate(-2deg); }
          100% { transform: rotate(0deg); }
        }
        .shake-on-hover:hover {
          animation: shake 3s infinite ease-in-out;
        }
      `}</style>

      <div className="relative w-full h-screen overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
          <source src={sea} type="video/mp4" />
        </video>
        <div className='absolute inset-0 bg-black opacity-40 -z-10'></div>

        {/* Guide Toggle */}
        <div className="absolute top-6 left-6 z-40">
          <button
            onClick={() => setShowGuide(!showGuide)}
            className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white hover:bg-white/30 text-sm"
          >
            {showGuide ? "Hide Guide" : "How It Works"}
          </button>
          {showGuide && (
            <div className="mt-2 bg-white/90 text-black rounded-lg p-4 shadow-xl max-w-sm text-sm">
              <p><strong>Drelo Compass:</strong> Click the icons around the compass to access travel tools like maps, weather, and booking. Click the center to talk to DreLoBot for help anytime.</p>
            </div>
          )}
        </div>

        {/* Compass Interface */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-[400px] h-[400px] md:w-[550px] md:h-[550px] z-10 shake-on-hover rounded-full overflow-hidden bg-transparent">
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-full h-full rounded-full border-2 border-white"></div>
              <div className="absolute w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <Link to="/aichat">
                <img src={logo} alt="DreLoBot" className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover shadow-lg cursor-pointer" />
                <p className="text-white text-sm mt-2">Talk to DreLoBot 🤖</p>
              </Link>
            </div>

            {[ 
              { label: "Map", icon: "📖", btn: "Check", pos: "top-[12%] left-1/2", link: "/map" },
              { label: "Photos", icon: "📷", btn: "View", pos: "top-[20%] left-[76%]", link: "/photos" },
              { label: "Booking", icon: "📅", btn: "View", pos: "top-1/2 left-[90%]", link: "/booking" },
              { label: "Weather", icon: "⛅", btn: "Check", pos: "top-[76%] left-[76%]", link: "/weather" },
              { label: "Health", icon: "💜", btn: "Learn", pos: "top-[84%] left-1/2", link: "/health" },
              { label: "Culture", icon: "🌐", btn: "Explore", pos: "top-[76%] left-[24%]", link: "/culture" },
              { label: "Scams", icon: "⚠️", btn: "Check", pos: "top-1/2 left-[10%]", link: "/scams" },
              { label: "Explore", icon: "🗺️", btn: "Go", pos: "top-[20%] left-[24%]", link: "/explore" },
            ].map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className={`absolute ${item.pos} transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-30`}
              >
                <div className="text-3xl md:text-4xl text-white hover:scale-110 transition">{item.icon}</div>
                <div className="text-base md:text-lg font-semibold text-white">{item.label}</div>
                <button className="text-sm md:text-base bg-white px-3 py-1 rounded shadow hover:bg-gray-200 transition">
                  {item.btn}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;