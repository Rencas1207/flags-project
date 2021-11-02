import React from 'react';

import { CountryStyled } from './CountryStyles.js';

export const Country = ({ flag, name, population, region, capital }) => {
  return (
    <CountryStyled>
      <img loading="lazy" src={flag} alt={name} />
      <h2>{name}</h2>
      <div className="details">
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </CountryStyled>
  );
};
