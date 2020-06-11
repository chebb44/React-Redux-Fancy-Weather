import { getIpInfo } from '../network/ipInfo';
import getGeoCode from '../network/geocode';
import store from '../../store';
import { setOffsetTime } from '../../reducers/appState/appStateActions';
import { setCurrentLocation } from '../../reducers/location/locationActions';
import { setSearchField } from '../../reducers/searchData/searchDataActions';


export async function updateCity(option) {
  let location;
  let coordinates = [];
  const state = store.getState();
  const { currentLanguage } = state.unitLang;
  const { currCity, currCountry, mapCoords } = state.location;
  const { searchCity } = state.searchData;
  
  if (option === 'byAccuracyPosition') {
    location = await getGeoCode(`${mapCoords[0]}+${mapCoords[1]}`, currentLanguage);
  }
  if (option === 'byIP') {
    const ipInfo = await getIpInfo();
    coordinates = ipInfo.loc.split(',').reverse();
    location = await getGeoCode(`${coordinates[1]}+${coordinates[0]}`, currentLanguage);
  }
  if (option === 'bySearch') {
    location = await getGeoCode(searchCity, currentLanguage);
  }
  if (option === 'current') {
    location = await getGeoCode(`${currCity}+${currCountry}`, currentLanguage);
  }
  if (location.results.length > 0) {
    let mapCoords = [];
    mapCoords[1] = location.results[0].geometry.lat;
    mapCoords[0] = location.results[0].geometry.lng;
    coordinates[1] = location.results[0].annotations.DMS.lat;
    coordinates[0] = location.results[0].annotations.DMS.lng;
    const city = location.results[0].components.city ||
      location.results[0].components.city_district ||
      location.results[0].components.state;
    store.dispatch(setOffsetTime(location.results[0].annotations.timezone.offset_sec));
    store.dispatch(setCurrentLocation(city, location.results[0].components.country, coordinates, mapCoords));
  }
  else {
    store.dispatch(setSearchField('Location not found'));
  }
}
