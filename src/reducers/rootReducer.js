import { combineReducers } from 'redux';
import location from './location/locationReducer';
import searchData from './searchData/searchDataReducer';
import weather from './weather/weatherReducer';
import unitLang from './unitLang/unitLangReducer';
import appState from './appState/appStateReducer';
export default combineReducers({
  unitLang,
  location,
  searchData,
  weather,
  appState,
});
