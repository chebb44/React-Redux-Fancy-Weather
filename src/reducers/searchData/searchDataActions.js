export const SET_SEARCH_FIELD = 'SET_SEARCH_FIELD';
export const setSearchField = (searchField) => ({
  type: SET_SEARCH_FIELD,
  payload: searchField,
});

export const SET_SEARCH_CITY = 'SET_SEARCH_CITY';
export const setSearchCity = (searchCity) => ({
  type: SET_SEARCH_CITY,
  payload: searchCity,
});

export const SET_IS_RECOGNITION_ENABLE = 'SET_IS_RECOGNITION_ENABLE';
export const setIsRecognitionEnable = (data) => ({
  type: SET_IS_RECOGNITION_ENABLE,
  payload: data,
});