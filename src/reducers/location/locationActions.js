export const SET_CURRENT_LOCATION = 'SET_CURRENT_LOCATION';
export const setCurrentLocation = (city, country, coordinates, mapCoords) => ({
  type: SET_CURRENT_LOCATION,
  payload: {
    currCity: city,
    currCountry: country,
    coordinates: coordinates,
    mapCoords: mapCoords,
  },
});