import React from 'react';
import './SearchFormView.scss';
import classNames from 'classnames';

export const SearchFormView = ({ onSubmit, onVoice, onChange, searchField, recognitionIsEnable }) => {
  const voiceBtnClasses = classNames({
    'voice-btn': true,
    'active-voice': recognitionIsEnable,
  });
  return (<form onSubmit={onSubmit} className="search-block">
    <input type="text"
      className="search-input"
      value={searchField}
      onChange={onChange}
    />
    <div className={voiceBtnClasses}
      onClick={onVoice}
      title='Say "погода", "прогноз", "weather" or "forecast" say a word to listen to the forecast'
    />
    <div className="search-btn" onClick={onSubmit}></div>
  </form>);
};
