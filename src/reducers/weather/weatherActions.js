export const SET_ONE_DAY_WEATHER = 'SET_ONE_DAY_WEATHER';
export const setOneDayWeather = (data) => ({
  type: SET_ONE_DAY_WEATHER,
  payload: data,
});

export const SET_THREE_DAY_WEATHER = 'SET_THREE_DAY_WEATHER';
export const setThreeDayWeather = (data) => ({
  type: SET_THREE_DAY_WEATHER,
  payload: data,
});

export const SET_IS_SPEAK = 'SET_IS_SPEAK';
export const setIsSpeaking = (data) => ({
  type: SET_IS_SPEAK,
  payload: data,
});