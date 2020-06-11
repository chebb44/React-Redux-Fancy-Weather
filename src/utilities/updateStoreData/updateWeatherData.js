import store from "../../store";
import { getWeatherByCity } from "../updateWeather";
import { setOneDayWeather, setThreeDayWeather } from "../../reducers/weather/weatherActions";


export async function updateWeatherData() {
  const state = store.getState();
  const { currentLanguage, currentUnit } = state.unitLang;
  const { currCity } = state.location;
  const { todayWeather, threeDayWeather } = await getWeatherByCity(currCity, currentLanguage, currentUnit);
  store.dispatch(setOneDayWeather(todayWeather));
  store.dispatch(setThreeDayWeather(threeDayWeather));
}
