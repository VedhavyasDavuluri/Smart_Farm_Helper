
import { useState, useCallback } from 'react';
import { useWeatherService } from '@/services/weatherService';

export const useWeather = () => {
  const [currentWeather, setCurrentWeather] = useState({
    temperature: '28°C',
    humidity: '65%',
    condition: 'Partly Cloudy'
  });

  const { weatherData, loading, error } = useWeatherService();

  const fetchWeather = useCallback(() => {
    if (weatherData) {
      setCurrentWeather({
        temperature: weatherData.temperature,
        humidity: weatherData.humidity,
        condition: weatherData.condition
      });
    }
  }, [weatherData]);

  return {
    currentWeather,
    fetchWeather,
    loading,
    error
  };
};
