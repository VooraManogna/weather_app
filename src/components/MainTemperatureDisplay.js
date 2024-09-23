import React from 'react';
import './MainTemperatureDisplay.css';
function MainTemperatureDisplay({weather}) {
  const d = new Date();
  let day = d.getDay();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  // const [weather, setWeather] = useState(null);
  // const weatherCondition = weather?.weather[0].main;
  // const getBackgroundClass = (condition) => {
  //   switch (condition) {
  //     case 'Clear':
  //       return { backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5ce7218fc886670001846402/1622237076775-M8OMTYD2YSPES37C2NXQ/shutterstock_561665098.jpg?format=1000w')" };
  //     case 'Clouds':
  //       return { backgroundImage: "url('https://torange.biz/photo/55/IMAGE/beautiful-cloudy-sunny-day-55250.jpg')" };
  //     case 'Rain':
  //       return { backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/029/772/287/large_2x/human-daily-life-on-rainy-day-enjoying-rainfall-and-happy-life-lively-rainy-season-concept-generative-ai-free-photo.jpeg')" };
  //     case 'Snow':
  //       return { backgroundImage: "url('https://w0.peakpx.com/wallpaper/20/99/HD-wallpaper-snowy-day-stream-snow-winter-snowflakes.jpg')" };
  //     default:
  //       return { backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY9ySzivdh9z9BRbQ0PGDiYbvkVFRkrSirvQ&s')" }; // Fallback color
  //   }
  // };

  return (
    // <div className="temperature-display ${getBackgroundClass(weatherCondition)}">
    <div className="temperature-display">
      <h2> {weather.name}</h2>
      <p> {new Date().toLocaleDateString()}   {days[day]}</p>
      <h1>{weather.main.temp} °C</h1>
      {/* <p>Connaught Place, IN</p>
      <p>Tuesday, 19 May 2020</p> */}
      <div className='forecast'>
        <div className='forecast-day'>
          <p>{days[(day+1)%6]}</p>
          <p>{Math.round(weather.main.temp)-1}°</p>
        </div>
        <div className='forecast-day'>
          <p>{days[(day+2)%6]}</p>
          <p>{Math.round(weather.main.temp)+1}°</p>
        </div>
        <div className='forecast-day'>
          <p>{days[(day+3)%6]}</p>
          <p>{Math.round(weather.main.temp)+1}°</p>
        </div>
        <div className='forecast-day'>
          <p>{days[(day+4)%6]}</p>
          <p>{Math.round(weather.main.temp)}°</p>
        </div>
      </div>
    </div>
  );
}

export default MainTemperatureDisplay;
