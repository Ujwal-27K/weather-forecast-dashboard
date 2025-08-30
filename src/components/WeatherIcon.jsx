import React from 'react';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  Moon,
  CloudDrizzle,
  Cloudy,
  CloudFog
} from 'lucide-react';

function WeatherIcon({ condition, isDay = true, size = 64, className = '' }) {
  const iconProps = {
    size,
    className: `weather-icon ${className}`,
    'aria-label': condition?.text || 'Weather condition'
  };

  if (!condition) {
    return (
      <div 
        className="weather-icon-placeholder" 
        style={{ width: size, height: size }}
      />
    );
  }

  const { code } = condition;

  // Clear/Sunny
  if (code === 1000) {
    return isDay ? 
      <Sun {...iconProps} style={{ color: '#FFD700' }} /> : 
      <Moon {...iconProps} style={{ color: '#E2E8F0' }} />;
  }
  
  // Partly cloudy
  if (code === 1003) {
    return <Cloudy {...iconProps} style={{ color: '#94A3B8' }} />;
  }
  
  // Cloudy/Overcast
  if ([1006, 1009].includes(code)) {
    return <Cloud {...iconProps} style={{ color: '#64748B' }} />;
  }
  
  // Mist/Fog
  if ([1135, 1147].includes(code)) {
    return <CloudFog {...iconProps} style={{ color: '#9CA3AF' }} />;
  }
  
  // Light rain/drizzle
  if ([1063, 1150, 1153, 1168, 1171].includes(code)) {
    return <CloudDrizzle {...iconProps} style={{ color: '#60A5FA' }} />;
  }
  
  // Moderate to heavy rain
  if ([1180, 1183, 1186, 1189, 1192, 1195, 1198, 1201].includes(code)) {
    return <CloudRain {...iconProps} style={{ color: '#3B82F6' }} />;
  }
  
  // Snow conditions
  if ([1066, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264].includes(code)) {
    return <CloudSnow {...iconProps} style={{ color: '#E0E7FF' }} />;
  }
  
  // Thunderstorm
  if ([1087, 1273, 1276, 1279, 1282].includes(code)) {
    return <CloudLightning {...iconProps} style={{ color: '#8B5CF6' }} />;
  }
  
  // Default fallback
  return isDay ? 
    <Sun {...iconProps} style={{ color: '#FFD700' }} /> : 
    <Moon {...iconProps} style={{ color: '#E2E8F0' }} />;
}

export default WeatherIcon;
