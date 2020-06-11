import React from 'react';
import { LoadingSpinner } from '../viewComponents/LoadingSpinner';
import { WeatherBlock } from './weatherBlock';
import { Coordinates } from '../viewComponents/Coordinates';
import { useSelector } from 'react-redux';
import { selectorLocation } from '../reducers/location/locationReducer';
import './MainContent.scss';
import { selectorAppState } from '../reducers/appState/appStateReducer';

export const MainContent = () => {
  const { coordinates } = useSelector(selectorLocation);
  const { loading } = useSelector(selectorAppState);

  return (
    <div className="main-content">
      {loading ?
        <LoadingSpinner />
        :
        <>
          <WeatherBlock />
          <div className="map-block">
            <div className="map" id="map"></div>
            <Coordinates coordinates={coordinates} />
          </div>
        </>
      }
    </div>
  );
}