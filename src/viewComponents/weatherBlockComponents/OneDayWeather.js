import React from 'react';
import './OneDayWeather.scss';

export function OneDayWeather({ dayName, dayTemp, dayPicUrl }) {
  let dayPicStyle = { backgroundImage: `url("${dayPicUrl}")` };
  return (
  <div className="day-weather">
    <div className="day-weather-name">{dayName}</div>
    <div className="day-weather-temp">{dayTemp}</div>
    <div className="day-weather-pic" style={dayPicStyle}></div>
  </div>);
}
