import { takeEvery } from 'redux-saga/effects';
import { updateWidgetByLangWorker, updateWidgetByUnitWorker, changeBackgroundURLWorker } from './workers';
import { updateWidgetBySearchWorker } from "./updateWidgetBySearchWorker";
import { initWidgetWorker } from "./initWidgetWorker";
import { INIT_WIDGET, UPDATE_BACKGROUND_URL } from './sagasActions';
import { SET_SEARCH_CITY } from './../reducers/searchData/searchDataActions';
import { SET_CURRENT_LANGUAGE, SET_CURRENT_UNIT } from '../reducers/unitLang/unitLangActions';

export function* sagaWatcher() {

  yield takeEvery(INIT_WIDGET, initWidgetWorker);

  yield takeEvery(SET_SEARCH_CITY, updateWidgetBySearchWorker);

  yield takeEvery(SET_CURRENT_LANGUAGE, updateWidgetByLangWorker);

  yield takeEvery(SET_CURRENT_UNIT, updateWidgetByUnitWorker);

  yield takeEvery(UPDATE_BACKGROUND_URL, changeBackgroundURLWorker);

}

