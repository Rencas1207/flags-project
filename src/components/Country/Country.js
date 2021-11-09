import React from 'react';

import { CountryStyled } from './CountryStyles.js';

export const Country = ({ countries }) => {
  return (
    <>
      {countries.map(
        ({ common, png, population, region, capitalRef, cca3 }) => (
          <CountryStyled
            to={`${process.env.PUBLIC_URL}/country/${cca3}`}
            key={cca3}
          >
            <div className="card-country-image">
              <img loading="lazy" src={png} alt={common} />
            </div>

            <div className="card-country-description">
              <h2>{common}</h2>
              <div className="details">
                <p>
                  <strong>Population:</strong> {population}
                </p>
                <p>
                  <strong>Region:</strong> {region}
                </p>
                <p>
                  <strong>Capital:</strong> {capitalRef}
                </p>
              </div>
            </div>
          </CountryStyled>
        )
      )}
    </>
  );
};
