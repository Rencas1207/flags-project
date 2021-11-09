import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { Country } from '../Country/Country';
import { CountryListStyled } from './CountryListStyles';

import { types } from '../../types/types';
import { getFlags } from '../../services/getFlags';
import { SkeletonCountry } from '../Skeletons/SkeletonCountry/SkeletonCountry';

export const CountryList = () => {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const [showLimit, setShowLimit] = useState(20);

  const countryList = useSelector((state) => state.countryList);
  const countryByName = useSelector((state) => state.countryByName);
  const countryByRegion = useSelector((state) => state.countryByRegion);

  let countriesListFiltered = countryList;

  countriesListFiltered = countriesListFiltered.filter((country) => {
    const countryName = country.common.toLowerCase();
    const countryContinent = country.region.toLowerCase();

    const countryNameFilter = countryByName.toLowerCase();
    const countryRegionFilter = countryByRegion.toLowerCase();

    if (countryRegionFilter.includes('all')) {
      return country;
    } else {
      return (
        countryName.includes(countryNameFilter) &&
        countryContinent.includes(countryRegionFilter)
      );
    }
  });

  useEffect(() => {
    setLoaded(false);
    getFlags()
      .then((data) => {
        dispatch({
          type: types.setCountryList,
          payload: data,
        });
        setLoaded(true);
      })
      .catch((err) => err);
  }, [dispatch]);

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setShowLimit(showLimit + showLimit);
    }
  };

  if (loaded && countriesListFiltered.length === 0) {
    return (
      <div className="error">
        <p>
          No se encontraron resultados <span>☹️</span>
        </p>
      </div>
    );
  }
  return (
    <CountryListStyled>
      {loaded && (
        <Country countries={countriesListFiltered.slice(0, showLimit)} />
      )}

      {!loaded &&
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => (
          <SkeletonCountry key={n} />
        ))}
    </CountryListStyled>
  );
};
