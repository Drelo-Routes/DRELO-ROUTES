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
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const formatTemp = (temp) => `${Math.round(temp)}°`;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { weekday: "short" });
  };

  const displayData = weatherData;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-2xl rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Enter a city.."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyPress}
            className="px-4 py-2 border rounded-l-lg w-full"
            required
          />
          <button
            onClick={handleSearch}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-r-lg"
          >
            Search
          </button>
        </div>

        {displayData && (
          <>
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800">{displayData.city}</h2>
              <p className="text-sm text-gray-500 mb-2">{displayData.current.date}, {displayData.current.description}</p>
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

            <div className="grid grid-cols-5 gap-4 text-center">
              {displayData.forecast.map((item, index) => (
                <div key={index} className="bg-transparent">
                  <p className="text-gray-600 font-medium">{formatDate(item.date)}</p>
                  <img
                    src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
                    alt="forecast icon"
                    className="mx-auto"
                  />
                  <p className="text-pink-600 font-bold">
                    {formatTemp(item.temperature)}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {error && (
          <p className="text-red-500 text-center mt-4">{error}</p>
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