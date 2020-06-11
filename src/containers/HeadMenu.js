import React, { useCallback } from 'react';
import { ChangeBackgroundBtn } from '../viewComponents/ChangeBackgroundBtn';
import { useDispatch } from 'react-redux';
import { LangBlock } from './LangBlock';
import { UnitBlock } from './UnitBlock';
import { SearchForm } from './SearchForm';
import './HeadMenu.scss';
import { updateBackgroundURL } from '../sagas/sagasActions';

export const HeadMenu = () => {

  const dispatch = useDispatch();


  const changeBackgroundOnClick = useCallback((event) =>{
      event.preventDefault();
      dispatch(updateBackgroundURL());
    }, [dispatch]);

  return (
    <div className="head-menu">
      <div className="buttons-block">
        <ChangeBackgroundBtn
          onClickHandler={changeBackgroundOnClick}
        />
        <LangBlock />
        <UnitBlock />
      </div>
      <SearchForm />
    </div>
  );
}
