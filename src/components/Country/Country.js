import React from 'react';
import { useHistory } from 'react-router-dom';

import { CountryStyled } from './CountryStyles.js';

export const Country = ({ flag, name, population, region, capital, cca3 }) => {
  const history = useHistory();

  const handleClick = () => {
    // history.push(`/country/${name.replaceAll(' ', '-')}`);
    history.push(`/country/${cca3}`);
  };

  return (
    <CountryStyled onClick={handleClick}>
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
