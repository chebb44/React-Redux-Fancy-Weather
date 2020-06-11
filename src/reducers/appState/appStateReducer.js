import { SET_APP_LOADING, SET_BACKGROUND_URL, SET_OFFSET_TIME } from './appStateActions';

const defaultData = {
  loading: true,
  backgroundURL: '',
  timezoneOffset: 0,
};

export const selectorAppState = state => state.appState;

export default function appState(state = defaultData, action) {
  switch (action.type) {
    case SET_APP_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_BACKGROUND_URL:
      return {
        ...state,
        backgroundURL: action.payload
      }
    case SET_OFFSET_TIME:
      return {
        ...state,
        timezoneOffset: action.payload
      }
    default:
      return state;
  }
}
