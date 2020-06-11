import React from 'react';
import { ThreeDayBlock } from "../viewComponents/weatherBlockComponents/ThreeDayBlock";
import { TodayBlock } from "../viewComponents/weatherBlockComponents/TodayBlock";
import { City } from "../viewComponents/weatherBlockComponents/City";
import { SpeakButton } from "../viewComponents/weatherBlockComponents/SpeakButton";
import { useSelector } from 'react-redux';
import { weatherSelector } from '../reducers/weather/weatherReducer';
import { selectorLocation } from '../reducers/location/locationReducer';
import './weatherBlock.scss';
import { DateTime } from './DateTime';
import { speakWeather } from '../utilities/voiceEffects/speakWeather';

export const WeatherBlock = () => {
  const { currCity, currCountry } = useSelector(selectorLocation);
  const { todayWeather, threeDayWeather, isSpeaking } = useSelector(weatherSelector);

  return (
    <div className="weather-block">
      <SpeakButton
        isSpeaking={isSpeaking}
        clickHandler={speakWeather}
      />
      <City city={currCity} country={currCountry} />
      <DateTime />
      <TodayBlock todayWeather={todayWeather} />
      <ThreeDayBlock threeDayWeather={threeDayWeather} />
    </div>
  );
}
