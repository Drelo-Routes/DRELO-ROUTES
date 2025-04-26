import React from "react";
import { useNavigate } from "react-router";

const Photos = () => {
  const navigate = useNavigate();

  const images = [
    "https://images.unsplash.com/photo-1630386226447-af0a955c1009?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2hhbmF8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624832040555-d9f92f7be672?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2hhbmF8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1583108607572-a8c0bfc741fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2hhbmF8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1589104602532-9cee07f8f62c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2hhbmF8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1634074967416-dd24d702c93c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2hhbmF8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1622487560941-7f6bd5ed24b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1568306954278-df7b9ad9a72f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1563382454-400a632d7c4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1625191824068-e833954d6c70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1500246432024-efe3c9116a56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1610571005499-7963c7544d54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1625191824427-fe884c7ab3cd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1697049643231-5d6a35b8849c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1507835418932-dfcc1a16d393?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1590497998073-5a3e5e68035e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGdoYW5hfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1712700720456-6027038e9874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdoYW5hfGVufDB8fDB8fHww",
    "https://plus.unsplash.com/premium_photo-1694141252026-3df1de888a21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2hhbmElMjBmb29kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1705088293220-c1a22b5d214a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2hhbmElMjBmb29kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1650815232474-12d5b9375d63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2hhbmElMjBmb29kfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1628690570377-a8d5bd19768c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdoYW5hJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1689187015184-a9bc081f3de6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdoYW5hJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1628690570318-9d1e75e4f590?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2hhbmElMjBmZXN0aXZhbHN8ZW58MHx8MHx8fDA%3D"
  ];

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-green-700">Photo Gallery</h1>
        <button
          onClick={() => navigate("/home")}
          className="text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-full text-sm font-semibold"
        >
          ← Back to Home
        </button>
      </div>

      {/* Photo Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={src}
              alt={`Ghana attraction ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
