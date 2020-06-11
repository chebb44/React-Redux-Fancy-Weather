import React from 'react';
import './ChangeBackgroundBtn.scss'

export const ChangeBackgroundBtn = ({onClickHandler}) => {
  return (
    <div
      className="background-btn"
      onClick = {onClickHandler}
    ></div>
  );
}


