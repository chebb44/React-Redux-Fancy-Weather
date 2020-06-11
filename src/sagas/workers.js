import { put, call } from 'redux-saga/effects';
import { getBackgroundURL } from "../utilities/getBackgroundURL";
import { updateCity } from "../utilities/updateStoreData/updateCity";
import { updateWeatherData } from '../utilities/updateStoreData/updateWeatherData';
import { setBackgroundURL } from '../reducers/appState/appStateActions';
import store from '../store';

export function* updateWidgetByLangWorker() {
  yield call(() => updateCity('current'));
  yield updateWeatherData();
}
export function* updateWidgetByUnitWorker() {
  yield updateWeatherData();
}

export function* changeBackgroundURLWorker() {
  const { currCity } = store.getState().location;
  const { timezoneOffset } = store.getState().appState;
  const payload = yield call(() => getBackgroundURL(currCity, timezoneOffset));
  yield put(setBackgroundURL(payload));
}

