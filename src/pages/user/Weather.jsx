import React, { useState } from "react";
import { apiGetWeather } from "../../services/auth";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) return;

    setLoading(true);
    try {
      const response = await apiGetWeather(city);
      console.log("Weather API response:", response.data);
      setWeatherData(response.data);
      setError(null);
    } catch (err) {
      console.error("Weather fetch error:", err);
      setWeatherData(null);
      setError("Failed to fetch weather. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const dummyData = {
    city: "Koforidua",
    current: {
      temperature: 27,
      humidity: 81,
      wind: 2.28,
      description: "light rain",
      icon: "10d",
      date: "Monday 19:23, light rain"
    },
    forecast: [
      { date: "Mon", temperature: "37° 24°", icon: "10d" },
      { date: "Tue", temperature: "37° 23°", icon: "10d" },
      { date: "Wed", temperature: "36° 24°", icon: "10d" },
      { date: "Thu", temperature: "35° 24°", icon: "10d" },
      { date: "Fri", temperature: "36° 24°", icon: "10d" },
    ]
  };

  const displayData = weatherData || dummyData;

  const formatForecastTemp = (temp) => {
    if (typeof temp === "string") return temp;
    return `${Math.round(temp)}°C`;
  };

  const formatForecastDate = (dateStr) => {
    if (dateStr.length <= 3) return dateStr;
    const parts = dateStr.split(" ");
    if (parts.length >= 2) {
      const day = parts[0];
      const time = parts[1].replace(":00", "");
      return `${day} ${time}`;
    }
    return dateStr;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 font-sans">
      <div className="w-full max-w-2xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-2xl font-bold text-gray-700">DreloCast</h1>
          <div className="flex items-center border rounded-lg overflow-hidden shadow-sm w-full md:w-auto">
            <input
              type="text"
              placeholder="Enter a city..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              className="px-4 py-2 outline-none w-full md:w-64"
            />
            <button
              onClick={handleSearch}
              disabled={loading}
              className={`$${loading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"} text-white px-6 py-2 transition-colors`}
            >
              {loading ? "Loading..." : "Search"}
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">{displayData.city}</h2>
          <p className="text-sm text-gray-500 mb-2">{displayData.current.date}</p>
          <p className="text-pink-600 mb-3">
            Humidity: {displayData.current.humidity}% · Wind: {displayData.current.wind} km/h
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src={`https://openweathermap.org/img/wn/${displayData.current.icon}@2x.png`}
              alt="weather icon"
              className="w-20 h-20"
            />
            <h3 className="text-5xl font-bold text-gray-700">
              {typeof displayData.current.temperature === 'number' 
                ? Math.round(displayData.current.temperature) 
                : displayData.current.temperature}
              &deg;C
            </h3>
          </div>
          <p className="mt-2 text-gray-600 capitalize">{displayData.current.description}</p>
        </div>

        <div className="grid grid-cols-5 gap-4 mt-8">
          {displayData.forecast.map((f, index) => (
            <div key={index} className="text-center p-2 rounded-lg hover:bg-gray-50">
              <p className="text-sm text-gray-500 font-medium">{formatForecastDate(f.date)}</p>
              <img
                src={`https://openweathermap.org/img/wn/${f.icon}@2x.png`}
                alt="forecast icon"
                className="mx-auto w-12 h-12"
              />
              <p className="text-pink-600 text-sm font-bold">{formatForecastTemp(f.temperature)}</p>
              {weatherData && <p className="text-xs text-gray-500">{f.description}</p>}
            </div>
          ))}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-lg mt-4 text-center">
            {error}
          </div>
        )}

        <div className="mt-6 text-center">
          <button className="text-blue-600 hover:underline font-semibold">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Weather;