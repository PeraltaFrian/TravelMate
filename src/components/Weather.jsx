import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Weather.css'; 

function Weather() {
  const [city, setCity] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const predefinedCities = [
    'New York', 'London', 'Sydney', 'Toronto', 'Los Angeles',
    'Madrid', 'Barcelona', 'Mexico City', 'Buenos Aires', 'Lima',
    'Paris', 'Montreal', 'Brussels', 'Geneva', 'Lyon',
    'Berlin', 'Vienna', 'Zurich', 'Munich', 'Frankfurt',
    'Rome', 'Milan', 'Florence', 'Venice', 'Naples',
    'Lisbon', 'Porto', 'Rio de Janeiro', 'Sao Paulo', 'Maputo',
    'Tokyo', 'Osaka', 'Kyoto', 'Hiroshima', 'Sapporo',
    'Seoul', 'Busan', 'Incheon', 'Daegu', 'Pyongyang',
    'Beijing', 'Shanghai', 'Guangzhou', 'Taipei', 'Shenzhen'
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);

    const filtered = predefinedCities.filter(city =>
      city.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(value ? filtered : []);
  };

  const handleSuggestionClick = (suggestedCity) => {
    setCity(suggestedCity);
    setFilteredCities([]);
  };

  const getWeatherData = async () => {
    if (!city) return;

    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (response.data.cod === '404') {
        setError('City not found. Please try again.');
      } else {
        setWeatherData(response.data);
        setAnimationKey(prev => prev + 1);
      }
    } catch (err) {
      setError('Could not fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="weather-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Weather Information</h2>

      <div className="input-group">
        <input
          type="text"
          placeholder="Type a city"
          value={city}
          onChange={handleInputChange}
        />
     
        {filteredCities.length > 0 && (
          <ul className="suggestions">
            {filteredCities.map((suggestedCity, idx) => (
              <li
                key={idx}
                onClick={() => handleSuggestionClick(suggestedCity)}
              >
                {suggestedCity}
              </li>
            ))}
          </ul>
        )}

        <small className="info-text">
          Start typing a city name or choose from the suggestions
        </small>
      </div>

      <motion.button
        onClick={getWeatherData}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        Get Weather
      </motion.button>

      {loading && (
        <motion.p
          className="loading"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          Loading...
        </motion.p>
      )}

      {error && <p className="error">{error}</p>}

      <AnimatePresence mode="wait">
        {weatherData && (
          <motion.div
            className="weather-info"
            key={animationKey}
            initial={{ opacity: 0, x: '100%' }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.3,
                duration: 0.6,
                ease: 'easeOut',
              },
            }}
            exit={{
              opacity: 0,
              x: '-100%',
              transition: { duration: 0.4, ease: 'easeIn' },
            }}
          >
            <h3>
              Weather in {weatherData.name}, {weatherData.sys.country}
            </h3>
            <p><strong>Temperature:</strong> {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p><strong>Condition:</strong> {weatherData.weather[0].description}</p>
            <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
            <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Weather;
