import React, { useEffect } from 'react';
import './App.scss';

import { useSelector, useDispatch } from 'react-redux';
import { selectorAppState } from '../reducers/appState/appStateReducer';
import { HeadMenu } from './HeadMenu';
import { MainContent } from './MainContent';
import { initWidget } from '../sagas/sagasActions';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(initWidget()) }, [dispatch]);

  const {backgroundURL} = useSelector(selectorAppState);

  let backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url("${backgroundURL}")`,
  };

  return (
    <div className="fancy-weather" style={backgroundStyle}>
      <HeadMenu/>
      <MainContent/>
    </div>
  );
}

export default App;


