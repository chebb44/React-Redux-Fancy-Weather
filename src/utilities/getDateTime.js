import { days, months } from "../constants/languageLibrary";

export function getDateTime(currentLanguage, timezoneOffset) {

  if (timezoneOffset) {
    const time = new Date(new Date().getTime() + timezoneOffset * 1000);
    const date = `${days[currentLanguage][time.getDay()]}, ${time.getDate()} ${
      months[currentLanguage][time.getMonth()]
    }`;
    const HR =
      time.getUTCHours() > 9 ? time.getUTCHours() : `0${time.getUTCHours()}`;
    const MN =
      time.getUTCMinutes() > 9
        ? time.getUTCMinutes()
        : `0${time.getUTCMinutes()}`;
    const SEC =
      time.getUTCSeconds() > 9
        ? time.getUTCSeconds()
        : `0${time.getUTCSeconds()}`;
    const hoursMinutesSecs = `${HR}:${MN}:${SEC}`;
    
    return {
      currDate: date,
      currTime: hoursMinutesSecs
    }
  }
  return {
    currDate: 'Loading',
    currTime: 'Loading'
  }
}