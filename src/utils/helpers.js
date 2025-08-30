// Temperature conversions
export const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
export const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

// Date and time formatting
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric'
  });
};

export const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

// UV Index levels
export const getUVIndexLevel = (uvIndex) => {
  if (uvIndex <= 2) return { level: 'Low', color: '#10B981' };
  if (uvIndex <= 5) return { level: 'Moderate', color: '#F59E0B' };
  if (uvIndex <= 7) return { level: 'High', color: '#F97316' };
  if (uvIndex <= 10) return { level: 'Very High', color: '#EF4444' };
  return { level: 'Extreme', color: '#8B5CF6' };
};

// Air Quality Index levels
export const getAQILevel = (pm25) => {
  if (pm25 <= 12) return { level: 'Good', color: '#10B981' };
  if (pm25 <= 35) return { level: 'Moderate', color: '#F59E0B' };
  if (pm25 <= 55) return { level: 'Unhealthy for Sensitive', color: '#F97316' };
  if (pm25 <= 150) return { level: 'Unhealthy', color: '#EF4444' };
  if (pm25 <= 250) return { level: 'Very Unhealthy', color: '#8B5CF6' };
  return { level: 'Hazardous', color: '#7C2D12' };
};

// Wind direction
export const getWindDirection = (degrees) => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return directions[Math.round(degrees / 22.5) % 16];
};

// CSV export functionality
export const exportToCSV = (data, filename = 'weather-data.csv') => {
  const csvContent = data.map(row => 
    row.map(cell => 
      typeof cell === 'string' && cell.includes(',') ? `"${cell}"` : cell
    ).join(',')
  ).join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    return true;
  }
  return false;
};

// Location formatting
export const formatLocationName = (location) => {
  const parts = [location.name];
  if (location.region && location.region !== location.name) {
    parts.push(location.region);
  }
  parts.push(location.country);
  return parts.join(', ');
};
