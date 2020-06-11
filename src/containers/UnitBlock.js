import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorUnitLang } from '../reducers/unitLang/unitLangReducer'
import { UnitBlockItem } from '../viewComponents/UnitBlockItem';
import './UnitBlock.scss'
import { setCurrentUnit } from '../reducers/unitLang/unitLangActions';


export const UnitBlock = () => {
  const {currentUnit} = useSelector(selectorUnitLang);
  const dispatch = useDispatch();
  const setUnit = (unit) => () => {
    dispatch(setCurrentUnit(unit));
    localStorage.setItem('fancy-unit', unit);
  }

  return (
    <div className="units-block">
      <UnitBlockItem
        unit="C"
        onClickHandler = { setUnit }
        currUnit= { currentUnit }
      />
      <UnitBlockItem
        unit="F"
        onClickHandler= { setUnit }
        currUnit = { currentUnit }
      />
    </div>
  );
}



