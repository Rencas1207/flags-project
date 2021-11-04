import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';

import { SearchBarStyles } from './SearchBarStyles';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: types.getCountryByName,
      payload: inputValue,
    });
  };

  const clearInput = () => {
    dispatch({
      type: types.getCountryByName,
      payload: '',
    });
    setInputValue('');
  };

  return (
    <SearchBarStyles>
      <i className="fas fa-search"></i>
      <input
        type="text"
        autoComplete="off"
        name="values"
        className="form-input"
        value={inputValue}
        placeholder="Search for a country..."
        onChange={handleInputChange}
      />
      {inputValue && (
        <button className="close" onClick={clearInput}>
          ✖️
        </button>
      )}
    </SearchBarStyles>
  );
};
