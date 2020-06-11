
import { SET_CURRENT_UNIT, SET_CURRENT_LANGUAGE } from './unitLangActions';
const defaultData = {
  currentUnit: localStorage.getItem('fancy-unit') || 'C',
  currentLanguage: localStorage.getItem('fancy-lang') || 'en',
}

export const selectorUnitLang = state => state.unitLang;

export default function unitLang( state = defaultData, action) {
  switch (action.type) {
    case SET_CURRENT_UNIT:
      return {
        ...state,
        currentUnit: action.payload
      }
      case SET_CURRENT_LANGUAGE:
        return {
          ...state,
          currentLanguage: action.payload
        }
    default:
      return state;
  }
}
