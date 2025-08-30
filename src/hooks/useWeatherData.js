// src/hooks/useWeatherData.js
import { useState, useEffect, useCallback } from 'react';
import weatherService from '../services/weatherApi';

function useWeatherData(location) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = useCallback(async () => {
    if (!location) return;

    setLoading(true);
    setError(null);

    try {
      console.log('Fetching weather for:', location); // Debug log
      console.log('API Key exists:', !!import.meta.env.VITE_WEATHER_API_KEY); // Debug log
      
      const weatherData = await weatherService.getForecast(location, 5, true, true);
      console.log('Weather data received:', weatherData); // Debug log
      
      setData(weatherData);
    } catch (err) {
      console.error('Weather fetch error:', err); // Debug log
      setError(err.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  }, [location]);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return { data, loading, error, refetch: fetchWeatherData };
}

export default useWeatherData;
