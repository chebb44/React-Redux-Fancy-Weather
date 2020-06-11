import { getWeatherFromApi } from './network/weatherApi';
import { days, feels, wind, units, humidity } from '../constants/languageLibrary';


export async function getWeatherByCity(currCity, currentLanguage, currentUnit) {
  const todayWeather = {};
  const threeDayWeather = {};
  const unit = currentUnit === 'C' ? 'metric' : 'imperial';
  const weather = await getWeatherFromApi(currCity, currentLanguage, unit);
  if (weather) {
    let currTemp = Math.round(weather.list[0].main.temp);
    if (currTemp > 0)
      currTemp = `+${currTemp}`;
    todayWeather.todayTemp = `${currTemp}°${currentUnit}`;
    const picUrl = `http://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`;
    const photo = new Image();
    photo.src = picUrl;
    todayWeather.todayPicUrl = picUrl;
    let description = weather.list[0].weather[0].description.toString();
    todayWeather.currWeatherDescription =
      description[0].toUpperCase() + description.slice(1);
    let feelTemp = Math.round(weather.list[0].main.feels_like);
    if (feelTemp > 0) feelTemp = `+${feelTemp}`;
    todayWeather.currFillLike = `${feels[currentLanguage]} ${feelTemp}°${currentUnit}`;
    todayWeather.currWind = `${wind[currentLanguage]} ${Math.round(weather.list[0].wind.speed)} ${units[currentLanguage][currentUnit]}`;
    todayWeather.currHumidity = `${humidity[currentLanguage]} ${weather.list[0].main.humidity}%`;
    const currDate = new Date();
    const weatherObj = {};
    const threeDayPics = [];
    for (let i = 0; i < 39; i += 1) {
      const weatherDate = new Date(weather.list[i].dt_txt);
      if (weatherDate.getDate() !== currDate.getDate() &&
        Object.keys(weatherObj).length < 4) {
        if (!Array.isArray(weatherObj[weatherDate.getDate()]))
          weatherObj[weatherDate.getDate()] = [];
        weatherObj[weatherDate.getDate()].push(weather.list[i].main.temp);
        if (weatherDate.getHours() === 12) {
          threeDayPics.push(weather.list[i].weather[0].icon);
        }
      }
    }
    const threeDayWeatherTemp = [];
    for (let index = 1; index <= 3; index += 1) {
      const currDate = new Date(new Date().getTime() + index * 1000 * 3600 * 24).getDate();
      let temp = Math.round(Math.max(...weatherObj[currDate]));
      if (temp > 0)
        temp = `+${temp}`;
      threeDayWeatherTemp.push(temp);
    }
    threeDayWeather.dayTemp = threeDayWeatherTemp;
    threeDayWeather.dayName = [];
    threeDayWeather.dayPicUrl = [];
    const time = new Date();
    for (let index = 0; index <= 2; index += 1) {
      threeDayWeather.dayName[index] = `${days[currentLanguage][(time.getDay() + index + 1) % 7]}`;
      threeDayWeather.dayTemp[index] = `${threeDayWeatherTemp[index]}°${currentUnit}`;
      threeDayWeather.dayPicUrl[index] = `http://openweathermap.org/img/wn/${threeDayPics[index]}@2x.png`;
    }
    return {
      todayWeather,
      threeDayWeather,
    };
  }
  else {
    todayWeather.currFillLike = `The weather service did not provide data for this city. Sometimes this is due to restrictions on requests, try using a VPN of another country.`;
    threeDayWeather.dayTemp = ['', '', ''];
    threeDayWeather.dayName = ['', '', ''];
    threeDayWeather.dayPicUrl = ['', '', ''];
    return {
      todayWeather,
      threeDayWeather,
    };
  }
}
