import React, { useState } from "react"; 
import { apiGetWeather } from "../../services/auth";
import cloud from "../../assets/images/cloud.mp4"

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
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const formatTemp = (temp) => `${Math.round(temp)}°`;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    if (isNaN(date)) return dateStr;

    const day = date.toLocaleDateString("en-US", { weekday: "short" });
    const time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true
    });

    return `${day} ${time}`;
  };

  const generateForecastSummary = (forecast) => {
    if (!forecast || forecast.length === 0) return "";

    const descriptions = forecast.map(f => f.description);
    const temps = forecast.map(f => f.temperature);

    const mostCommon = descriptions.sort((a, b) =>
      descriptions.filter(v => v === a).length -
      descriptions.filter(v => v === b).length
    ).pop();

    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);

    return `Heads up! You can expect mostly ${mostCommon} with temperatures between ${Math.round(minTemp)}°C and ${Math.round(maxTemp)}°C through the coming days.`;
  };

  const dummyData = {
    city: "Koforidua",
    current: {
      temperature: 27,
      humidity: 81,
      wind: 2.28,
      description: "light rain",
      icon: "10d",
      date: new Date().toString()
    },
    forecast: [
      { date: new Date().toString(), temperature: 37, description: "light rain", icon: "10d" },
      { date: new Date().toString(), temperature: 37, description: "light rain", icon: "10d" },
      { date: new Date().toString(), temperature: 36, description: "light rain", icon: "10d" },
      { date: new Date().toString(), temperature: 35, description: "light rain", icon: "10d" },
      { date: new Date().toString(), temperature: 36, description: "light rain", icon: "10d" },
    ]
  };

  const displayData = weatherData || dummyData;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={cloud} type="video/mp4" />
      </video>
      <div className="bg-white bg-opacity-90 text-black w-full max-w-2xl min-h-[80vh] rounded-xl shadow-md p-6 overflow-auto">

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Enter a city.."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress}
            className="px-4 py-2 border rounded-lg w-full"
            required
          />
          <button
            onClick={handleSearch}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg"
          >
            Search
          </button>
        </div>

        {displayData && (
          <>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">{displayData.city}</h2>
              <p className="text-sm text-gray-700 mb-2">{formatDate(displayData.current.date)}, {displayData.current.description}</p>
              <p className="text-pink-600 mb-2">
                Humidity: <span className="font-bold">{displayData.current.humidity}%</span>,
                Wind: <span className="font-bold">{displayData.current.wind}km/h</span>
              </p>
              <div className="flex justify-center items-center gap-4">
                <img
                  src={`https://openweathermap.org/img/wn/${displayData.current.icon}@2x.png`}
                  alt="weather icon"
                />
                <h3 className="text-6xl font-bold text-gray-900">
                  {Math.round(displayData.current.temperature)}<span className="text-2xl align-top">°C</span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-center">
              {displayData.forecast.map((item, index) => (
                <div key={index} className="bg-transparent">
                  <p className="text-gray-700 font-medium">{formatDate(item.date)}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                    alt="forecast icon"
                    className="mx-auto"
                  />
                  <p className="text-pink-600 font-bold">
                    {formatTemp(item.temperature)}
                  </p>
                  <p className="text-gray-600 text-xs">{item.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-800 mt-6 italic">
              {generateForecastSummary(displayData.forecast)}
            </p>

            <div className="mt-6 text-center">
              <button className="text-blue-600 hover:underline font-semibold">
                ← Back to Home
              </button>
            </div>
          </>
        )}

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Weather;
