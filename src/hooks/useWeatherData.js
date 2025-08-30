import { useState, useEffect, useCallback } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function useWeatherData(location) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = useCallback(async () => {
    if (!location) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/forecast.json?key=${API_KEY}&q=${location}&days=5&aqi=yes&alerts=yes`);
      if (!res.ok) throw new Error('API error');
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }, [location]);

  useEffect(() => { fetchWeather(); }, [fetchWeather]);
  return { data, loading, error, refetch: fetchWeather };
}

export default useWeatherData;
