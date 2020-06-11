import { SET_CURRENT_LOCATION } from "./locationActions";

const defaultData = {
  currCity: 'Download',
  currCountry: 'Download',
  mapCoords: ['', ''],
  coordinates: ['', ''],
};

export const selectorLocation = state => state.location;

export default function location(state = defaultData, action) {
  switch (action.type) {
    case SET_CURRENT_LOCATION:
      return action.payload;
    default:
      return state;
  }
}
