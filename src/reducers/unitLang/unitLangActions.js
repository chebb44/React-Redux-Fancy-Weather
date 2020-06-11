export const SET_CURRENT_LANGUAGE = 'SET_CURRENT_LANGUAGE';
export const setCurrentLanguage = (lang) => ({
  type: SET_CURRENT_LANGUAGE,
  payload: lang,
});

export const SET_CURRENT_UNIT = 'SET_CURRENT_UNIT';
export const setCurrentUnit = (unit) => ({
  type: SET_CURRENT_UNIT,
  payload: unit,
});