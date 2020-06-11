import React from 'react';
import { OneDayWeather } from "./OneDayWeather";
import './ThreeDayBlock.scss';

export function ThreeDayBlock({ threeDayWeather }) {
  return (<div className="three-day-block">
    {[0, 1, 2].map((day) => (
    <OneDayWeather 
      key={day} 
      dayName={threeDayWeather.dayName[day]} 
      dayTemp={threeDayWeather.dayTemp[day]} 
      dayPicUrl={threeDayWeather.dayPicUrl[day]}
    />))}
  </div>);
}
