const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

class WeatherService {
  async getCurrentWeather(location) {
    const res = await fetch(`${API_BASE_URL}/current.json?key=${API_KEY}&q=${location}&aqi=yes`);
    return res.json();
  }
  async getForecast(location, days = 5) {
    const res = await fetch(`${API_BASE_URL}/forecast.json?key=${API_KEY}&q=${location}&days=${days}&aqi=yes&alerts=yes`);
    return res.json();
  }
  async searchLocations(query) {
    const res = await fetch(`${API_BASE_URL}/search.json?key=${API_KEY}&q=${query}`);
    return res.json();
  }
}

export default new WeatherService();
