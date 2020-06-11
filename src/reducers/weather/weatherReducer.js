import {
  SET_ONE_DAY_WEATHER,
  SET_THREE_DAY_WEATHER,
  SET_IS_SPEAK,
} from './weatherActions';

const defaultData = {
  todayWeather: {
    todayTemp: '',
    todayPicUrl: '',
    currWeatherDescription: '',
    currFillLike: '',
    currWind: '',
    currHumidity: '',
  },
  threeDayWeather: {
    dayName: ['', '', ''],
    dayTemp: ['', '', ''],
    dayPicUrl: ['', '', ''],
  },
  isSpeaking: false,
};

export const weatherSelector = (state => state.weather);

export default function weather(state = defaultData, action) {
  switch (action.type) {
    case SET_ONE_DAY_WEATHER:
      return {
        ...state,
        todayWeather: action.payload,
      };
    case SET_THREE_DAY_WEATHER:
      return {
        ...state,
        threeDayWeather: action.payload,
      };
    case SET_IS_SPEAK:
      return {
        ...state,
        isSpeaking: action.payload,
      };
    default:
      return state;
  }
}
