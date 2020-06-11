import { put, call } from 'redux-saga/effects';
import { getBackgroundURL } from "../utilities/getBackgroundURL";
import { updateCity } from "../utilities/updateStoreData/updateCity";
import { updateWeatherData } from '../utilities/updateStoreData/updateWeatherData';
import { setAppLoading, setBackgroundURL } from '../reducers/appState/appStateActions';
import { setSearchField } from '../reducers/searchData/searchDataActions';
import store from '../store';
import { mapRender } from '../utilities/network/mapbox';


export function* updateWidgetBySearchWorker() {
  yield put(setAppLoading(true));
  yield put(setSearchField(''));
  yield call(() => updateCity('bySearch'));
  const { currCity, mapCoords } = store.getState().location;
  const { timezoneOffset } = store.getState().appState;
  const URL = yield call(() => getBackgroundURL(currCity, timezoneOffset));
  yield put(setBackgroundURL(URL));
  yield updateWeatherData();
  yield put(setAppLoading(false));
  yield call (() => mapRender(mapCoords));
}
