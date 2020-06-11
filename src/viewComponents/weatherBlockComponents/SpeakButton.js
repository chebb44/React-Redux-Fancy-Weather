import React from 'react';
import classNames from 'classnames';
import './SpeakButton.scss';

export function SpeakButton({ isSpeaking, clickHandler }) {
  const classes = classNames({
    'speak-button': true,
    'active-voice': isSpeaking,
  });
  return (
  <div
    className={classes}
    onClick={clickHandler} />);
}
