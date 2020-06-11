import React from 'react';
import classNames from 'classnames';
import './LangBlockItem.scss';

export const LangBlockItem = ({ lang, currLang, clickHandler }) => {
  const classes = classNames({
    'lang-item': true,
    'active-lang': lang === currLang.toUpperCase(),
  });
  return(
    <div className={classes} onClick={clickHandler(lang.toLowerCase())}>
      {lang}
    </div>
  );
};
