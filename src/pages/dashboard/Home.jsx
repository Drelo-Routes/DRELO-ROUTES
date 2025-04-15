import React from 'react';
import sea from '../../assets/images/sea.mp4'
import logo from '../../assets/images/logo.png'

const Home = () => {
    
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
    
          {/* Full-screen video background */}
          <div className="relative w-full h-screen overflow-hidden">
            {/* Video behind everything */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            >
              <source src={sea} type="video/mp4" />
            </video>
    
            {/* Overlay on top of video for better contrast */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-30 -z-10"></div> */}
            <div className='absolute inset-0  bg-black opacity-40 -z-10'></div>
    
            {/* Compass centered */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="relative w-[400px] h-[400px] md:w-[550px] md:h-[550px] z-10 shake-on-hover rounded-full overflow-hidden bg-transparent">
                {/* Compass Circle */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-full h-full rounded-full border-2 border-white"></div>
                  <div className="absolute w-2 h-2 bg-white rounded-full"></div>
                </div>
    
                {/* DreLoBot Center */}
                <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={logo}
                    alt="DreLoBot"
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg"
                  />
                </div>
    
                {/* Compass Directions */}
                {[
                  { label: "Explore", icon: "🗺️", btn: "Go", pos: "top-[8%] left-1/2" },
                  { label: "Photos", icon: "📷", btn: "Snap", pos: "top-[20%] left-[76%]" },
                  { label: "Booking", icon: "📅", btn: "View", pos: "top-1/2 left-[90%]" },
                  { label: "Markets", icon: "🛍️", btn: "Find", pos: "top-[76%] left-[76%]" },
                  { label: "Sex Ed", icon: "💜", btn: "Learn", pos: "top-[90%] left-1/2" },
                  { label: "Culture", icon: "🌐", btn: "Explore", pos: "top-[76%] left-[24%]" },
                  { label: "Scams", icon: "⚠️", btn: "Check", pos: "top-1/2 left-[10%]" },
                  { label: "Guide", icon: "📖", btn: "Read", pos: "top-[20%] left-[24%]" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`absolute ${item.pos} transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 z-30`}
                  >
                    <div className="text-2xl text-white">{item.icon}</div>
                    <div className="text-xs font-semibold text-white">{item.label}</div>
                    <button className="text-xs bg-white px-2 py-1 rounded shadow hover:bg-gray-200 transition">
                      {item.btn}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      );
    };
  
export default Home
