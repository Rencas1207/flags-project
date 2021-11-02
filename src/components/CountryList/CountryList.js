import React, { useEffect } from 'react';
import { Country } from '../Country/Country';
import { CountryListStyled } from './CountryListStyles';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { types } from '../../types/types';

export const CountryList = () => {
  const countryList = useSelector((state) => {
    if ('' !== state.filterByRegion) {
      return state.countryByRegion;
    }
    if (state.countryByName.length > 0) {
      return state.countryByName;
    }
    return state.countryList;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: types.setCountryList,
          payload: data,
        });
      });
  }, [dispatch]);

  return (
    <CountryListStyled>
      {countryList.map((country) => {
        const {
          flags: { png },
          name: { common },
          population,
          region,
        } = country;
        const { capital } = country;
        const capitalRef = capital === undefined ? 'Desconocido' : capital[0];
        return (
          <Country
            key={common}
            flag={png}
            name={common}
            population={population}
            region={region}
            capital={capitalRef}
          />
        );
      })}
    </CountryListStyled>
  );
};
