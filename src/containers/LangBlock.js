import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectorUnitLang } from '../reducers/unitLang/unitLangReducer';
import { LangBlockItem } from '../viewComponents/LangBlockItem';
import './LangBlock.scss';
import { setCurrentLanguage } from '../reducers/unitLang/unitLangActions';

export const LangBlock = () => {
  const dispatch = useDispatch();
  const {currentLanguage } = useSelector(selectorUnitLang);
  
  const setLang = (lang) => () => {
    dispatch(setCurrentLanguage(lang));
    localStorage.setItem('fancy-lang', lang);
  }

  const languages = ['EN', 'RU', 'BY'];

  return (
    languages.map((lang, i) => 
      <LangBlockItem
        key = {i}
        lang= {lang}
        clickHandler={setLang}
        currLang={currentLanguage}
      />)
  )
}





