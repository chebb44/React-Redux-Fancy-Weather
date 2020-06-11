import React from 'react';
import './City.scss';

export function City({ city, country }) {
  return (<div className="city">
    {city}
    <p>{country}</p>
  </div>);
}
