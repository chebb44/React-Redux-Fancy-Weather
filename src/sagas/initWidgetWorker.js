import { put, call } from 'redux-saga/effects';
import { getBackgroundURL } from "../utilities/getBackgroundURL";
import { updateCity } from "../utilities/updateStoreData/updateCity";
import { updateByAccuracyPosition } from "../utilities/updateStoreData/updateByAccuracyPosition";
import { updateWeatherData } from '../utilities/updateStoreData/updateWeatherData';
import { setAppLoading, setBackgroundURL } from '../reducers/appState/appStateActions';
import store from '../store';
import { mapRender } from '../utilities/network/mapbox';

export function* initWidgetWorker() {
  yield put(setAppLoading(true));
  const isAccuracyAllow = yield call(updateByAccuracyPosition);
  if (isAccuracyAllow) {
    yield call(() => updateCity('byAccuracyPosition'));
  }
  else {
    yield call(() => updateCity('byIP'));
  }
  const { currCity, mapCoords } = store.getState().location;
  const { timezoneOffset } = store.getState().appState;
  const URL = yield call(() => getBackgroundURL(currCity, timezoneOffset));
  yield put(setBackgroundURL(URL));
  yield updateWeatherData();
  yield put(setAppLoading(false));
  yield call (() => mapRender(mapCoords));
}
