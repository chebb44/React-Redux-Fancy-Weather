import React from 'react';
import './DateTimeView.scss';

export function DateTimeView({ date, time }) {
  return (
  <div className="date">
    <p>{date}</p>
    <p>{time}</p>
  </div>);
}
