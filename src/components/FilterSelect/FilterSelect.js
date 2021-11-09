import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';
import { FilterSelectStyles } from './FilterSelectStyles';

export const FilterSelect = () => {
  const [value, setValue] = useState('');
  const [dropdown, setdropdown] = useState(false);
  const dispatch = useDispatch();

  const handleRegionChange = (e) => {
    setValue(e.target.innerText);
    dispatch({ type: types.getCountryByRegion, payload: e.target.innerText });
  };
  return (
    <FilterSelectStyles
      className={`${dropdown ? 'dropdown open' : 'dropdown'}`}
      onClick={() => setdropdown(!dropdown)}
    >
      {value ? value : 'Filter by Region'}
      <i className="fas fa-chevron-down"></i>
      <ul>
        <li onClick={handleRegionChange}>All</li>
        <li onClick={handleRegionChange}>Africa</li>
        <li onClick={handleRegionChange}>Americas</li>
        <li onClick={handleRegionChange}>Asia</li>
        <li onClick={handleRegionChange}>Europe</li>
        <li onClick={handleRegionChange}>Oceania</li>
      </ul>
    </FilterSelectStyles>
  );
};
