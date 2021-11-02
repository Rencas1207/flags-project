import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../types/types';

export const CountryListByRegion = () => {
  const option = useRef(null);
  const dispatch = useDispatch();
  const filterByRegion = useSelector((state) => state.filterByRegion);

  const handleSelectChange = (e) => {
    const value = e.target.value;
    dispatch({ type: types.getCountryByRegion, payload: value });
    option.current.setAttribute('disabled', true);
  };
  return (
    <div>
      <select onChange={handleSelectChange} value={filterByRegion}>
        <option ref={option} value="">
          Filter by Region
        </option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        <option value="Asia">Asia</option>
      </select>
    </div>
  );
};
