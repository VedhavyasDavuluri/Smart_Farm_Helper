import { useState, useEffect } from 'react';
import { toast } from "sonner";
import { useLanguage } from '@/contexts/LanguageContext';

// OpenWeatherMap API key - Replace with your valid API key
const API_KEY = '34bcce0913844caa9f1358e3884ad1f6';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export interface WeatherData {
  location: string;
  temperature: string;
  humidity: string;
  rainfall: string;
  condition: string;
  icon: string;
  forecast: {
    day: string;
    temp: string;
    condition: string;
    icon: string;
  }[];
}

interface LocationCoords {
  lat: number;
  lon: number;
}

// Mock weather data for fallback when API key is invalid
const getMockWeatherData = (city: string, language: string): WeatherData => {
  const englishDays = ['Tomorrow', 'Day After', 'Next Day'];
  const teluguDays = ['రేపు', 'ఎల్లుండి', 'తరువాత'];
  
  const weatherConditions = {
    en: ['Sunny', 'Partly Cloudy', 'Cloudy'],
    te: ['ఎండగా', 'కొంత మేఘావృతం', 'మేఘావృతం']
  };

  // Default to major Indian cities if no city specified
  const defaultCities = ['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata'];
  const selectedCity = city || defaultCities[Math.floor(Math.random() * defaultCities.length)];

  return {
    location: selectedCity,
    temperature: '28°C',
    humidity: '65%',
    rainfall: '2mm',
    condition: language === 'te' ? 'కొంత మేఘావృతం' : 'Partly Cloudy',
    icon: '02d',
    forecast: [
      {
        day: language === 'te' ? teluguDays[0] : englishDays[0],
        temp: '30°C',
        condition: weatherConditions[language === 'te' ? 'te' : 'en'][0],
        icon: '01d'
      },
      {
        day: language === 'te' ? teluguDays[1] : englishDays[1],
        temp: '26°C',
        condition: weatherConditions[language === 'te' ? 'te' : 'en'][1],
        icon: '02d'
      },
      {
        day: language === 'te' ? teluguDays[2] : englishDays[2],
        temp: '24°C',
        condition: weatherConditions[language === 'te' ? 'te' : 'en'][2],
        icon: '03d'
      }
    ]
  };
};

export const useWeatherService = (city: string = 'Delhi', units: string = 'metric', useDeviceLocation: boolean = true) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<LocationCoords | null>(null);
  const [usingMockData, setUsingMockData] = useState<boolean>(false);
  const { language, t } = useLanguage();

  // Get user's current location
  const getUserLocation = (): Promise<LocationCoords> => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        },
        (error) => {
          console.error('Geolocation error:', error);
          reject(new Error('Unable to get your location'));
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000 // 5 minutes
        }
      );
    });
  };

  // Get day names in Telugu or English based on language
  const getDayName = (dayIndex: number): string => {
    const englishDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const teluguDays = ['ఆదివారం', 'సోమవారం', 'మంగళవారం', 'బుధవారం', 'గురువారం', 'శుక్రవారం', 'శనివారం'];
    
    return language === 'te' ? teluguDays[dayIndex] : englishDays[dayIndex];
  };

  // Map weather condition to Telugu or English
  const getWeatherCondition = (condition: string): string => {
    const weatherConditions: Record<string, { en: string; te: string }> = {
      'Clear': { en: 'Clear', te: 'స్పష్టమైన ఆకాశం' },
      'Clouds': { en: 'Cloudy', te: 'మేఘావృతం' },
      'Rain': { en: 'Rainy', te: 'వర్షం' },
      'Drizzle': { en: 'Drizzle', te: 'చినుకులు' },
      'Thunderstorm': { en: 'Thunderstorm', te: 'ఉరుములు మెరుపులు' },
      'Snow': { en: 'Snow', te: 'మంచు' },
      'Mist': { en: 'Mist', te: 'పొగంచు' },
      'Smoke': { en: 'Smoke', te: 'పొగ' },
      'Haze': { en: 'Haze', te: 'పొగంచు' },
      'Dust': { en: 'Dust', te: 'ధూళి' },
      'Fog': { en: 'Fog', te: 'పొగంచు' },
      'Sand': { en: 'Sand', te: 'ఇసుక' },
      'Ash': { en: 'Ash', te: 'బూడిద' },
      'Squall': { en: 'Squall', te: 'తుఫాను' },
      'Tornado': { en: 'Tornado', te: 'సుడిగాలి' }
    };

    const defaultCondition = { en: 'Unknown', te: 'తెలియదు' };
    return weatherConditions[condition]?.[language] || defaultCondition[language];
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        setError(null);
        setUsingMockData(false);

        // Test API key first
        const testResponse = await fetch(`${BASE_URL}/weather?q=Delhi&appid=${API_KEY}`);
        
        if (!testResponse.ok) {
          console.log('API key invalid, using mock data');
          setUsingMockData(true);
          const mockData = getMockWeatherData(city, language);
          setWeatherData(mockData);
          setLoading(false);
          toast.info(language === 'te' ? 'డెమో డేటా చూపిస్తున్నాము' : 'Showing demo weather data');
          return;
        }

        let weatherUrl = '';
        let forecastUrl = '';

        // Try to use device location first if enabled
        if (useDeviceLocation) {
          try {
            const coords = await getUserLocation();
            setUserLocation(coords);
            weatherUrl = `${BASE_URL}/weather?lat=${coords.lat}&lon=${coords.lon}&units=${units}&appid=${API_KEY}`;
            forecastUrl = `${BASE_URL}/forecast?lat=${coords.lat}&lon=${coords.lon}&units=${units}&appid=${API_KEY}`;
          } catch (locationError) {
            console.log('Using fallback city due to location error:', locationError);
            // Default to Delhi for India-wide coverage
            const fallbackCity = city || 'Delhi';
            weatherUrl = `${BASE_URL}/weather?q=${fallbackCity}&units=${units}&appid=${API_KEY}`;
            forecastUrl = `${BASE_URL}/forecast?q=${fallbackCity}&units=${units}&appid=${API_KEY}`;
          }
        } else {
          const selectedCity = city || 'Delhi';
          weatherUrl = `${BASE_URL}/weather?q=${selectedCity}&units=${units}&appid=${API_KEY}`;
          forecastUrl = `${BASE_URL}/forecast?q=${selectedCity}&units=${units}&appid=${API_KEY}`;
        }

        // Current weather
        const currentResponse = await fetch(weatherUrl);
        
        if (!currentResponse.ok) {
          const errorData = await currentResponse.json();
          throw new Error(`Weather API Error: ${errorData.message || 'Unknown error'}`);
        }
        
        const currentData = await currentResponse.json();
        
        // Forecast
        const forecastResponse = await fetch(forecastUrl);
        
        if (!forecastResponse.ok) {
          const errorData = await forecastResponse.json();
          throw new Error(`Forecast data error: ${errorData.message || 'Unknown error'}`);
        }
        
        const forecastData = await forecastResponse.json();

        // Process forecast data
        const today = new Date().getDate();
        const uniqueDaysForecast = forecastData.list
          .filter((item: any) => {
            const date = new Date(item.dt * 1000);
            return date.getDate() !== today;
          })
          .reduce((acc: any[], item: any) => {
            const date = new Date(item.dt * 1000);
            const dayIndex = date.getDay();
            
            if (!acc.some(d => d.dayIndex === dayIndex) && acc.length < 3) {
              acc.push({
                dayIndex,
                day: getDayName(dayIndex),
                temp: `${Math.round(item.main.temp)}°${units === 'metric' ? 'C' : 'F'}`,
                condition: getWeatherCondition(item.weather[0].main),
                icon: item.weather[0].icon
              });
            }
            return acc;
          }, []);

        const rainfall = currentData.rain 
          ? `${currentData.rain['1h'] || currentData.rain['3h'] || 0}mm` 
          : '0mm';

        const processedData: WeatherData = {
          location: `${currentData.name}`,
          temperature: `${Math.round(currentData.main.temp)}°${units === 'metric' ? 'C' : 'F'}`,
          humidity: `${currentData.main.humidity}%`,
          rainfall: rainfall,
          condition: getWeatherCondition(currentData.weather[0].main),
          icon: currentData.weather[0].icon,
          forecast: uniqueDaysForecast
        };

        setWeatherData(processedData);
        setLoading(false);
        
      } catch (err: any) {
        console.error('Weather fetch error:', err);
        console.log('Falling back to mock data due to error');
        setUsingMockData(true);
        const mockData = getMockWeatherData(city, language);
        setWeatherData(mockData);
        setLoading(false);
        toast.info(language === 'te' ? 'డెమో డేటా చూపిస్తున్నాము' : 'Showing demo weather data');
      }
    };

    fetchWeatherData();
  }, [city, units, language, useDeviceLocation]);

  return { weatherData, loading, error, userLocation, usingMockData };
};
