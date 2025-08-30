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
      const weatherData = await weatherService.getForecast(location, 5, true, true);
      setData(weatherData);
    } catch (err) {
      console.error('Weather fetch error:', err);
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
