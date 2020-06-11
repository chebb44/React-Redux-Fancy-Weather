import { SET_SEARCH_CITY, SET_SEARCH_FIELD, SET_IS_RECOGNITION_ENABLE } from './searchDataActions';

const defaultData = {
  searchCity: '',
  searchField: '',
  recognitionIsEnable: false
};

export const selectorSearchData = state => state.searchData;

export default function searchData(state = defaultData, action) {
  switch (action.type) {
    case SET_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload,
      } 
    case SET_SEARCH_CITY:
      return {
        ...state,
        searchCity: action.payload,
      } 
    case SET_IS_RECOGNITION_ENABLE:
      return {
        ...state,
        recognitionIsEnable: action.payload,
      } 
    default:
      return state;
  }
}