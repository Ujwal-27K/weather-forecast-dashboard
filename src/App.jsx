import React, { useState, useEffect } from 'react';
import useWeatherData from './hooks/useWeatherData';
import useLocalStorage from './hooks/useLocalStorage';
import useGeolocation from './hooks/useGeolocation';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';
import LoadingSpinner from './components/LoadingSpinner';
import WeatherIcon from './components/WeatherIcon';
import { Search, MapPin, Thermometer, Droplets, Wind, Eye, Sun, Moon, Download, RefreshCw, X } from 'lucide-react';
import { formatDate, formatTime, getUVIndexLevel, getAQILevel, exportToCSV } from './utils/helpers';
import weatherApi from './services/weatherApi';
import './App.css';

function App() {
  const [location, setLocation] = useLocalStorage('weather-location', 'Mumbai');
  const [searchInput, setSearchInput] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [isDarkMode, setIsDarkMode] = useLocalStorage('dark-mode', false);
  const [showHourly, setShowHourly] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  
  const { data, loading, error, refetch } = useWeatherData(location);
  const geolocation = useGeolocation();

  // Search suggestions with debounce
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchInput.trim().length >= 2) {
        setIsSearching(true);
        try {
          const suggestions = await weatherApi.searchLocations(searchInput.trim());
          setSearchSuggestions(suggestions || []);
          setShowSuggestions(true);
          setSelectedSuggestionIndex(-1);
        } catch (error) {
          console.error('Search suggestions error:', error);
          setSearchSuggestions([]);
        }
        setIsSearching(false);
      } else {
        setSearchSuggestions([]);
        setShowSuggestions(false);
      }
    }, 300); // 300ms debounce

    return () => clearTimeout(timeoutId);
  }, [searchInput]);

  // Keyboard shortcuts
  useKeyboardShortcuts({
    ' ': (e) => { e.preventDefault(); refetch(); }, // Spacebar to refresh
    'Escape': () => {
      setSearchInput('');
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    },
    'Enter': (e) => {
      e.preventDefault();
      if (showSuggestions && selectedSuggestionIndex >= 0) {
        handleSuggestionSelect(searchSuggestions[selectedSuggestionIndex]);
      } else if (searchInput.trim()) {
        handleSearch();
      }
    },
    'ArrowDown': (e) => {
      if (showSuggestions) {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => 
          prev < searchSuggestions.length - 1 ? prev + 1 : prev
        );
      }
    },
    'ArrowUp': (e) => {
      if (showSuggestions) {
        e.preventDefault();
        setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
      }
    },
    't': () => setIsDarkMode(!isDarkMode), // Toggle theme
    'h': () => setShowHourly(!showHourly), // Toggle hourly view
  });

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  const handleSearch = () => {
    if (searchInput.trim()) {
      setLocation(searchInput.trim());
      setSearchInput('');
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  };

  const handleSuggestionSelect = (suggestion) => {
    const locationString = `${suggestion.name}, ${suggestion.region}, ${suggestion.country}`;
    setLocation(locationString);
    setSearchInput('');
    setShowSuggestions(false);
    setSelectedSuggestionIndex(-1);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
    setSelectedSuggestionIndex(-1);
  };

  const handleInputFocus = () => {
    if (searchSuggestions.length > 0 && searchInput.trim().length >= 2) {
      setShowSuggestions(true);
    }
  };

  const handleInputBlur = () => {
    // Delay hiding suggestions to allow clicks
    setTimeout(() => {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }, 200);
  };

  const clearSearch = () => {
    setSearchInput('');
    setShowSuggestions(false);
    setSearchSuggestions([]);
    setSelectedSuggestionIndex(-1);
  };

  const handleUseLocation = () => {
    if (geolocation.loaded && !geolocation.error) {
      setLocation(`${geolocation.coordinates.lat},${geolocation.coordinates.lng}`);
    }
  };

  const exportWeatherData = () => {
    if (!data) return;
    
    const csvData = [
      ['Date', 'Location', 'Temperature (°C)', 'Condition', 'Humidity (%)', 'Wind (km/h)', 'Pressure (mb)'],
      [
        new Date().toLocaleDateString(),
        `${data.location.name}, ${data.location.country}`,
        data.current.temp_c,
        data.current.condition.text,
        data.current.humidity,
        data.current.wind_kph,
        data.current.pressure_mb
      ],
      ...data.forecast.forecastday.map(day => [
        formatDate(day.date),
        `${data.location.name}, ${data.location.country}`,
        `${day.day.maxtemp_c}/${day.day.mintemp_c}`,
        day.day.condition.text,
        day.day.avghumidity,
        day.day.maxwind_kph,
        '-'
      ])
    ];
    
    exportToCSV(csvData, `weather-data-${data.location.name}-${new Date().toISOString().split('T')[0]}.csv`);
  };

  return (
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="weather-emoji">🌤️</span>
            Weather Dashboard
          </h1>
          <div className="header-actions">
            <button 
              className="theme-toggle"
              onClick={() => setIsDarkMode(!isDarkMode)}
              title="Toggle dark mode (T)"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="refresh-btn"
              onClick={refetch}
              disabled={loading}
              title="Refresh data (Spacebar)"
            >
              <RefreshCw size={20} className={loading ? 'spinning' : ''} />
            </button>
            {data && (
              <button 
                className="export-btn"
                onClick={exportWeatherData}
                title="Export data to CSV"
              >
                <Download size={20} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-wrapper">
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input 
                type="text"
                placeholder="Search for a city or location..."
                value={searchInput}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                className="search-input"
                autoComplete="off"
              />
              {searchInput && (
                <button 
                  className="clear-search"
                  onClick={clearSearch}
                  title="Clear search"
                >
                  <X size={18} />
                </button>
              )}
              <button onClick={handleSearch} className="search-button">
                Search
              </button>
            </div>

            {/* Search Suggestions Dropdown */}
            {showSuggestions && (
              <div className="suggestions-dropdown">
                {isSearching ? (
                  <div className="suggestion-item loading-suggestion">
                    <LoadingSpinner size="sm" />
                    <span>Searching cities...</span>
                  </div>
                ) : searchSuggestions.length > 0 ? (
                  <>
                    {searchSuggestions.slice(0, 8).map((suggestion, index) => (
                      <div
                        key={`${suggestion.lat}-${suggestion.lon}`}
                        className={`suggestion-item ${index === selectedSuggestionIndex ? 'selected' : ''}`}
                        onClick={() => handleSuggestionSelect(suggestion)}
                        onMouseEnter={() => setSelectedSuggestionIndex(index)}
                      >
                        <MapPin size={16} className="suggestion-icon" />
                        <div className="suggestion-content">
                          <span className="suggestion-name">{suggestion.name}</span>
                          <span className="suggestion-details">
                            {suggestion.region && `${suggestion.region}, `}{suggestion.country}
                          </span>
                        </div>
                      </div>
                    ))}
                    <div className="suggestions-footer">
                      <span>💡 Use ↑↓ arrow keys to navigate, Enter to select</span>
                    </div>
                  </>
                ) : (
                  <div className="suggestion-item no-results">
                    <span>No cities found. Try a different search term.</span>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {geolocation.loaded && !geolocation.error && (
            <button onClick={handleUseLocation} className="location-btn">
              <MapPin size={18} />
              Use My Location
            </button>
          )}
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="loading-container">
          <LoadingSpinner size="lg" />
          <p>Fetching weather data...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-container">
          <div className="error-message">
            <h3>Oops! Something went wrong</h3>
            <p>{error}</p>
            <button onClick={refetch} className="retry-btn">
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Weather Content - Same as before */}
      {data && !loading && (
        <main className="weather-content">
          {/* Location & Time */}
          <div className="location-info">
            <h2 className="location-name">
              <MapPin size={24} />
              {data.location.name}, {data.location.region}
            </h2>
            <p className="location-country">{data.location.country}</p>
            <p className="current-time">
              {new Date(data.location.localtime).toLocaleString('en-IN', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>

          {/* Weather Alerts */}
          {data.alerts?.alert?.length > 0 && (
            <div className="weather-alerts">
              <h3>⚠️ Weather Alerts</h3>
              {data.alerts.alert.map((alert, index) => (
                <div key={index} className="alert-item">
                  <strong>{alert.headline}</strong>
                  <p>{alert.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Current Weather */}
          <section className="current-weather">
            <div className="current-main">
              <div className="temperature-display">
                <span className="temperature">{Math.round(data.current.temp_c)}</span>
                <span className="temperature-unit">°C</span>
              </div>
              <div className="weather-condition">
                <WeatherIcon 
                  condition={data.current.condition} 
                  isDay={data.current.is_day === 1} 
                  size={100} 
                />
                <div className="condition-details">
                  <p className="condition-text">{data.current.condition.text}</p>
                  <p className="feels-like">Feels like {Math.round(data.current.feelslike_c)}°C</p>
                </div>
              </div>
            </div>

            {/* Weather Details Grid */}
            <div className="weather-details-grid">
              <div className="detail-card">
                <Thermometer className="detail-icon" />
                <div>
                  <span className="detail-label">Real Feel</span>
                  <span className="detail-value">{Math.round(data.current.feelslike_c)}°C</span>
                </div>
              </div>
              
              <div className="detail-card">
                <Droplets className="detail-icon" />
                <div>
                  <span className="detail-label">Humidity</span>
                  <span className="detail-value">{data.current.humidity}%</span>
                </div>
              </div>
              
              <div className="detail-card">
                <Wind className="detail-icon" />
                <div>
                  <span className="detail-label">Wind</span>
                  <span className="detail-value">{data.current.wind_kph} km/h</span>
                </div>
              </div>
              
              <div className="detail-card">
                <Eye className="detail-icon" />
                <div>
                  <span className="detail-label">Visibility</span>
                  <span className="detail-value">{data.current.vis_km} km</span>
                </div>
              </div>
              
              <div className="detail-card">
                <span className="detail-icon">🌡️</span>
                <div>
                  <span className="detail-label">Pressure</span>
                  <span className="detail-value">{data.current.pressure_mb} mb</span>
                </div>
              </div>
              
              <div className="detail-card">
                <span className="detail-icon">☀️</span>
                <div>
                  <span className="detail-label">UV Index</span>
                  <span className={`detail-value uv-${getUVIndexLevel(data.current.uv).level.toLowerCase().replace(' ', '-')}`}>
                    {data.current.uv} - {getUVIndexLevel(data.current.uv).level}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Air Quality */}
          {data.current.air_quality && (
            <section className="air-quality">
              <h3>🌬️ Air Quality</h3>
              <div className="aqi-container">
                <div className="aqi-main">
                  <span className={`aqi-value aqi-${getAQILevel(Math.round(data.current.air_quality.pm2_5)).level.toLowerCase().replace(' ', '-')}`}>
                    {Math.round(data.current.air_quality.pm2_5)} AQI
                  </span>
                  <span className="aqi-label">{getAQILevel(Math.round(data.current.air_quality.pm2_5)).level}</span>
                </div>
                <div className="pollutants">
                  <div className="pollutant">
                    <span>CO</span>
                    <span>{data.current.air_quality.co?.toFixed(1)} μg/m³</span>
                  </div>
                  <div className="pollutant">
                    <span>NO2</span>
                    <span>{data.current.air_quality.no2?.toFixed(1)} μg/m³</span>
                  </div>
                  <div className="pollutant">
                    <span>O3</span>
                    <span>{data.current.air_quality.o3?.toFixed(1)} μg/m³</span>
                  </div>
                  <div className="pollutant">
                    <span>PM10</span>
                    <span>{data.current.air_quality.pm10?.toFixed(1)} μg/m³</span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Forecast Toggle */}
          <div className="forecast-toggle">
            <button 
              className={`toggle-btn ${!showHourly ? 'active' : ''}`}
              onClick={() => setShowHourly(false)}
            >
              5-Day Forecast
            </button>
            <button 
              className={`toggle-btn ${showHourly ? 'active' : ''}`}
              onClick={() => setShowHourly(true)}
            >
              Hourly Forecast
            </button>
          </div>

          {/* Hourly Forecast */}
          {showHourly && (
            <section className="hourly-forecast">
              <h3>📊 24-Hour Forecast</h3>
              <div className="hourly-scroll">
                {data.forecast.forecastday[selectedDay].hour.map((hour, index) => (
                  <div key={index} className="hourly-item">
                    <span className="hourly-time">{formatTime(hour.time.split(' ')[1])}</span>
                    <WeatherIcon condition={hour.condition} isDay={hour.is_day === 1} size={40} />
                    <span className="hourly-temp">{Math.round(hour.temp_c)}°</span>
                    <span className="hourly-condition">{hour.condition.text}</span>
                    <div className="hourly-details">
                      <span>💧 {hour.humidity}%</span>
                      <span>💨 {hour.wind_kph}km/h</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5-Day Forecast */}
          {!showHourly && (
            <section className="forecast">
              <h3>📅 5-Day Forecast</h3>
              <div className="forecast-grid">
                {data.forecast.forecastday.map((day, index) => (
                  <div 
                    key={day.date} 
                    className={`forecast-card ${index === selectedDay ? 'selected' : ''}`}
                    onClick={() => setSelectedDay(index)}
                  >
                    <div className="forecast-date">
                      <span className="day-name">
                        {index === 0 ? 'Today' : 
                         index === 1 ? 'Tomorrow' : 
                         new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                      </span>
                      <span className="date-number">{formatDate(day.date)}</span>
                    </div>
                    
                    <div className="forecast-weather">
                      <WeatherIcon condition={day.day.condition} isDay={true} size={50} />
                      <span className="forecast-condition">{day.day.condition.text}</span>
                    </div>
                    
                    <div className="forecast-temps">
                      <span className="max-temp">{Math.round(day.day.maxtemp_c)}°</span>
                      <span className="temp-divider">/</span>
                      <span className="min-temp">{Math.round(day.day.mintemp_c)}°</span>
                    </div>
                    
                    <div className="forecast-details">
                      <div className="forecast-detail">
                        <span>💧</span>
                        <span>{day.day.avghumidity}%</span>
                      </div>
                      <div className="forecast-detail">
                        <span>💨</span>
                        <span>{Math.round(day.day.maxwind_kph)}km/h</span>
                      </div>
                    </div>

                    {/* Sunrise & Sunset */}
                    <div className="sun-times">
                      <div className="sun-time">
                        <Sun size={16} />
                        <span>{formatTime(day.astro.sunrise)}</span>
                      </div>
                      <div className="sun-time">
                        <Moon size={16} />
                        <span>{formatTime(day.astro.sunset)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Footer Info */}
          <footer className="app-footer">
            <p>
              <strong>Keyboard Shortcuts:</strong> 
              Spacebar (Refresh) • T (Theme) • H (Hourly) • Esc (Clear search) • ↑↓ (Navigate suggestions)
            </p>
            <p>Data provided by WeatherAPI.com • Last updated: {new Date(data.current.last_updated).toLocaleTimeString()}</p>
          </footer>
        </main>
      )}
    </div>
  );
}

export default App;
