// src/services/weatherApi.js
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.weatherapi.com/v1';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

class WeatherService {
  async makeRequest(endpoint, params = {}) {
    const url = new URL(`${API_BASE_URL}${endpoint}`);
    url.searchParams.append('key', API_KEY);
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        url.searchParams.append(key, value);
      }
    });

    try {
      // Add headers for CORS
      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors', // Explicitly set CORS mode
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Weather API Error:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Network error: Unable to connect to weather service. Please check your internet connection.');
      }
      throw error;
    }
  }

  async getCurrentWeather(query, includeAirQuality = true) {
    return this.makeRequest('/current.json', {
      q: query,
      aqi: includeAirQuality ? 'yes' : 'no'
    });
  }

  async getForecast(query, days = 5, includeAirQuality = true, includeAlerts = true) {
    return this.makeRequest('/forecast.json', {
      q: query,
      days: Math.min(days, 14),
      aqi: includeAirQuality ? 'yes' : 'no',
      alerts: includeAlerts ? 'yes' : 'no'
    });
  }

  async searchLocations(query) {
    return this.makeRequest('/search.json', { q: query });
  }
}

const weatherService = new WeatherService();
export default weatherService;
