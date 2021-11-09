import React from 'react';
import { SkeletonCountrySelected } from '../Skeletons/SkeletonCountrySelected/SkeletonCountrySelected';
import { CountrySelectedStyles } from './CountrySelectedStyles';

export const CountrySelected = ({
  png,
  common,
  population,
  region,
  capitalRef,
  common2,
  subregion,
  tldRef,
  nameCurrencies,
  langs,
  borders,
  loaded,
}) => {
  return (
    <>
      {!loaded ? (
        <SkeletonCountrySelected />
      ) : (
        <CountrySelectedStyles>
          <div className="country-img">
            <img loading="lazy" src={png} alt={common} />
          </div>

          <div>
            <h1 className="country-title">{common}</h1>

            <div className="grid">
              <div>
                <p>
                  <strong>Native Name: </strong>
                  {common2 && common2}
                </p>
                <p>
                  <strong>Population: </strong>
                  {population}
                </p>
                <p>
                  <strong>Region: </strong>
                  {region}
                </p>
                <p>
                  <strong>Sub Region: </strong>
                  {subregion && subregion}
                </p>
                <p>
                  <strong>Capital: </strong>
                  {capitalRef && capitalRef}
                </p>
              </div>
              <div>
                <p>
                  <strong>Top Level Domain: </strong>
                  {tldRef && tldRef}
                </p>
                <p>
                  <strong>Currencies: </strong>
                  {nameCurrencies && nameCurrencies}
                </p>
                <p className="languages">
                  <strong>Languages: </strong>
                  {langs
                    ? langs.map((lang) => <span key={lang}>{lang}</span>)
                    : 'Not Found'}
                </p>
              </div>
            </div>

            <h3 className="borders">Border Countries:</h3>
            <p className="border-items">
              {borders
                ? borders.map((border) => (
                    <span className="border-item" key={border}>
                      {border}
                    </span>
                  ))
                : 'Not Found'}
            </p>
          </div>
        </CountrySelectedStyles>
      )}
    </>
  );
};
