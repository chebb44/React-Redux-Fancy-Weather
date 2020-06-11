export const SET_APP_LOADING = 'SET_APP_LOADING';
export const setAppLoading = (data) => ({
  type: SET_APP_LOADING,
  payload: data,
});

export const SET_BACKGROUND_URL = 'SET_BACKGROUND_URL';
export const setBackgroundURL = (url) => ({
  type: SET_BACKGROUND_URL,
  payload: url,
});

export const SET_OFFSET_TIME = 'SET_OFFSET_TIME';
export const setOffsetTime = (offset) => ({
  type: SET_OFFSET_TIME,
  payload: offset
});