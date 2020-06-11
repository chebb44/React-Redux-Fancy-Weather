import React from 'react';
import './Coordinates.scss'

export function Coordinates(props) {
  return (<div className="coordinates">
    <p>{props.coordinates[0]}</p>
    <p>{props.coordinates[1]}</p>
  </div>);
}
