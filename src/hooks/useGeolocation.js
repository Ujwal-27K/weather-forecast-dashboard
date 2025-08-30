import { useState, useEffect } from 'react';

function useGeolocation(options = {}) {
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: { lat: null, lng: null },
    error: null,
  });

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setLocation(l => ({ ...l, error: { code: 0, message: "Geolocation not supported" } }));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (loc) => setLocation({
        loaded: true,
        coordinates: { lat: loc.coords.latitude, lng: loc.coords.longitude },
        error: null,
      }),
      (error) => setLocation({
        loaded: true,
        coordinates: { lat: null, lng: null },
        error: { code: error.code, message: error.message },
      }),
      options
    );
  }, [options]);
  return location;
}

export default useGeolocation;
