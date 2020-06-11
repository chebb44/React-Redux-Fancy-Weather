import React from 'react';
import classNames from 'classnames';
import './UnitBlockItem.scss'

export const UnitBlockItem = ({ unit, currUnit, onClickHandler }) => {
  const classes = classNames({
    'units-block__item': true,
    'active-unit': unit === currUnit,
  });
  return(
  <div
    className={classes}
    onClick={onClickHandler(unit)}
  >
    {unit}
  </div>
  );
};

