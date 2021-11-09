import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';

import { SearchBarStyles } from './SearchBarStyles';

export const SearchBar = () => {
  const [values, setValues] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValues(e.target.value);
    dispatch({
      type: types.getCountryByName,
      payload: e.target.value,
    });
  };

  const clearInput = () => {
    setValues('');
    dispatch({
      type: types.getCountryByName,
      payload: '',
    });
  };

  return (
    <SearchBarStyles>
      <i className="fas fa-search"></i>
      <input
        type="text"
        autoComplete="off"
        name="values"
        className="form-input"
        value={values}
        placeholder="Search for a country..."
        onChange={handleInputChange}
      />
      {values && (
        <button className="close" onClick={clearInput}>
          ✖️
        </button>
      )}
    </SearchBarStyles>
  );
};
