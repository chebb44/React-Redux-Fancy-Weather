import React, { useState } from 'react';
import { DateTimeView } from "../viewComponents/weatherBlockComponents/DateTimeView";
import { useSelector } from 'react-redux';
import { selectorAppState } from '../reducers/appState/appStateReducer';
import { selectorUnitLang } from '../reducers/unitLang/unitLangReducer';
import { getDateTime } from '../utilities/getDateTime';
import { useInterval } from '../utilities/useInterval';
import { DELAY_FOR_TIME } from './../constants/delayConstants';

export function DateTime() {
  const [date, setDate] = useState('Loading');
  const [time, setTime] = useState('Loading');
  const {timezoneOffset} = useSelector(selectorAppState);
  const {currentLanguage } = useSelector(selectorUnitLang);
  
  useInterval(()=>{
    const {currTime, currDate} = getDateTime(currentLanguage, timezoneOffset);
    setTime(currTime);
    setDate(currDate);
  },DELAY_FOR_TIME);

  return(
    <DateTimeView 
      date={date}
      time={time}
    />
  );

}

