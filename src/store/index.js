import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from '../reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';

export const saga = createSagaMiddleware();

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(thunk, saga))
);

export default store;
