import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';


function Weather (props){
  let weatherIcon = null;
        
  if (props.main === 'Thunderstorm') {
    weatherIcon = <FontAwesomeIcon icon={faBolt} />;
  } else if (props.main === 'Drizzle') {
      weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
  } else if (props.main === 'Rain') {
      weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
  } else if (props.main === 'Snow') {
      weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
  } else if (props.main === 'Clear') {
      weatherIcon = <FontAwesomeIcon icon={faSun} />;
  } else if (props.main === 'Clouds') {
      weatherIcon = <FontAwesomeIcon icon={faCloud} />;
  } else {
      weatherIcon = <FontAwesomeIcon icon={faSmog} />;
  } 

        

       






  return(
    <div className="weatherbox">
    <div className="top">
    <div className="city"><h1>{props.city +","} {props.country}</h1></div>
    <div className="date"><h1>{props.date}</h1></div>
    </div>
    <div className="box">
    <div className="icon" align="center">{weatherIcon}</div>
    <div className="temperature"><h1 className="description">{Math.round(props.temperature)}&deg;C	<br></br></h1><h1 className="description1">
    {props.description}</h1></div>
    <div className="parentinfo">
    <div class className="info">
    <div className="infochild">
    <div className="temp"><p align="center">{Math.round(props.feels_like)}&deg;C</p><p align="center">Feels</p></div>
    <div className="humidity"><p align="center">{props.humidity}%</p><p align="center">Humidity</p></div>
    <div className="wind"><p align="center">{props.windSpeed}</p><p align="center">Wind</p></div>
    <div className="pressure"><p align="center">{props.pressure} Pa</p><p align="center">Pressure</p></div>
    <div className="sunrise"><p align="center">{props.sunrise}</p><p align="center">Sunrise</p></div>
    <div className="sunset"><p align="center">{props.sunset}</p><p align="center">Sunset</p></div>
    </div>
    </div>
    </div>
    </div>
    <div className="forecast">
    <h1 className="h">Forecast</h1>
    </div>
    {props.forecast.map(item =>(
    <div>
    <table className="table">
      <tbody>
      <tr>
        <td width="30%" className="dates">{item.dt_txt}</td>
        <td width="30%" align="center">{item.weather[0].main}</td>
        <td width="30%" align="center">{Math.round(item.main.temp)}&deg;C</td>
      </tr>
      </tbody>
    </table>
    </div>
    ))}
    </div>
  )
}
    

export  default Weather;