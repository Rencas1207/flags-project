import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';

import { CountryListByNameStyles } from './CountryListByNameStyles';

export const CountryListByName = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch({
      type: types.getCountryByName,
      payload: inputValue,
    });
    // setInputValue('');
    // console.log(inputValue);
  };

  const clearInput = () => {
    setInputValue('');
  };

  return (
    <CountryListByNameStyles>
      <i className="fas fa-search"></i>
      <input
        type="text"
        autoComplete="off"
        name="inputValue"
        className="form-input"
        value={inputValue}
        placeholder="Search for a country..."
        onChange={handleInputChange}
      />
      {inputValue && <button onClick={clearInput}>✖️</button>}
    </CountryListByNameStyles>
  );
};
