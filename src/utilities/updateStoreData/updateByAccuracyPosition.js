import getPosition from '../network/geolocation';
import store from '../../store';
import { setCurrentLocation } from '../../reducers/location/locationActions';
export async function updateByAccuracyPosition() {
  let isSuccess = false;
  try {
    let coordinates = [];
    const location = await getPosition();
    coordinates[1] = location.coords.longitude;
    coordinates[0] = location.coords.latitude;
    const state = store.getState().location;
    const { currCity, currCountry } = state;
    store.dispatch(setCurrentLocation(currCity, currCountry, coordinates, coordinates));
    isSuccess = true;
  }
  catch (e) {
    console.log(e);
  }
  return isSuccess;
}
