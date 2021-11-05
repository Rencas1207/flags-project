import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Country } from '../Country/Country';
import { CountryListStyled } from './CountryListStyles';

import { types } from '../../types/types';
import { getFlags } from '../../services/getFlags';

export const CountryList = () => {
  const dispatch = useDispatch();

  const countryList = useSelector((state) => {
    if ('' !== state.filterByRegion && state.countryByName.length === 0) {
      return state.countryByRegion;
    }
    if (state.countryByName.length > 0) {
      return state.countryByName;
    }

    return state.countryList;
  });

  useEffect(() => {
    getFlags().then((data) => {
      dispatch({
        type: types.setCountryList,
        payload: data,
      });
    });
  }, [dispatch]);

  return (
    <CountryListStyled>
      {countryList.map(
        ({ common, png, population, region, capitalRef, cca3 }) => (
          <Country
            key={common}
            flag={png}
            name={common}
            population={population}
            region={region}
            capital={capitalRef}
            cca3={cca3}
          />
        )
      )}
    </CountryListStyled>
  );
};
