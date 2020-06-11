import React from 'react';
import './TodayBlock.scss';

export function TodayBlock({ todayWeather }) {
  let todayPicStyle = {
    backgroundImage: `url("${todayWeather.todayPicUrl}")`,
  };
  return (<div className="today-block">
    <div className="today-temp">
      <span>{todayWeather.todayTemp}</span>
    </div>
    <div className="today-pic" style={todayPicStyle}></div>
    <div className="today-data">
      <p>{todayWeather.currWeatherDescription}</p>
      <p>{todayWeather.currFillLike}</p>
      <p>{todayWeather.currWind}</p>
      <p>{todayWeather.currHumidity}</p>
    </div>
  </div>);
}
