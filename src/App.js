import React, { useState , useEffect} from 'react';
import axios from 'axios';
import MainTemperatureDisplay from './components/MainTemperatureDisplay';
import WeatherDashboard from './components/WeatherDashboard';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Function to fetch weather data by city name
  const fetchWeather = async () => {
    const apiKey = '74c10a19c625b7139a7693d18282ad46';
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    setWeather(response.data);
  };

  // Function to fetch weather data by current location
  const fetchWeatherByLocation = async (lat, lon) => {
    // console.log(lat,lon)
    const apiKey = '74c10a19c625b7139a7693d18282ad46';
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      alert("Unable to fetch weather data for your location.");
    }
  }; 

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          fetchWeatherByLocation(latitude,longitude);
        },
        (error) => {
          console.error("Error getting the location: ", error);
          alert("Unable to retrieve your location. Please enable location services.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeatherByLocation(latitude, longitude);
    }
  }, [latitude, longitude]);


  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    fetchWeather();
  };

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  // const [weather, setWeather] = useState(null);
  
  const getWeatherConditionClass = () => {
    if(!weather) return '';
    const condition = weather.weather[0].main.toLowerCase();
    console.log(condition);
    switch (condition) {
      case 'clear':
        return 'sunny';
      case 'clouds':
        return 'clouds';
      case 'thunderstorm':
        return 'rainy';
      case 'haze':
        return 'haze';
      case 'mist':
        return 'haze';
      default:
        return 'defa'
    }
  };

  return (
    <div className={`app-container ${showDashboard ? 'with-dashboard' : 'full-screen'}`}>
      <div className={`main-section ${getWeatherConditionClass()}`}>
     {/* <div className={`app-container ${showDashboard ? 'with-dashboard' : 'full-screen'} weather-app ${getBackgroundClass(weatherCondition)}`}> */}
       {/* <div className="main-section"> */}
        <SearchBar city={city} setCity={setCity} handleSearch={fetchWeather} getCurrentLocation={getCurrentLocation} />
        {weather && <MainTemperatureDisplay weather={weather}/>}
        <button onClick={toggleDashboard} className="dashboard-button">
          ☰
        </button>
      </div>
      {showDashboard && (
         <div className="dashboard-section"> 
           <WeatherDashboard weather={weather} /> 
         </div> 
       )} 
    </div>
  );
}

export default App;


