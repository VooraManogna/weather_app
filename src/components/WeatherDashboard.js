import React from 'react';
import { FaThermometerEmpty } from 'react-icons/fa';
import { BiSolidDropletHalf } from 'react-icons/bi';
import { FiWind } from 'react-icons/fi';
import { GiSunrise,GiSunset } from 'react-icons/gi';
import { FaRegEye } from "react-icons/fa";
function WeatherDashboard({weather}) {
  return (
    <div className="dashboard">
      <h2>{weather.weather[0].main}</h2>
      <p><FaThermometerEmpty size={15} />  Temperature: {Math.round(weather.main.temp)}°C</p>
      <p><BiSolidDropletHalf size={15}/>   Humidity: {weather.main.humidity}%</p>
      <p><FaRegEye/> Visibility: {weather.visibility / 1000} km</p>
      <p><FiWind size={15}/> Windspeed: {weather.wind.speed} km/h</p>
    </div>
  );
}

export default WeatherDashboard;
