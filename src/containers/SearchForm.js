import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SearchFormView } from '../viewComponents/SearchFormView';
import { selectorSearchData } from '../reducers/searchData/searchDataReducer';
import { voiceHandler } from '../utilities/voiceEffects/voiceHandler';
import { setSearchCity, setSearchField } from '../reducers/searchData/searchDataActions';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const { searchField, recognitionIsEnable } = useSelector(selectorSearchData);

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(setSearchCity(searchField))
  }

  const onChange = (event) => {
    dispatch(setSearchField(event.target.value));
  }

  return (
    <SearchFormView
      onSubmit={onSubmit}
      onVoice={voiceHandler}
      onChange={onChange}
      searchField={searchField}
      recognitionIsEnable={recognitionIsEnable}
    />
  );
}
