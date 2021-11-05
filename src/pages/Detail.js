import React, { useEffect, useState } from 'react';
import { ButtonBack } from '../components/ButtonBack/ButtonBack';
import { CountrySelected } from '../components/CountrySelected/CountrySelected';
import { WrapperStyles } from '../components/Wrapper/WrappersStyles';
import { getFlagDetail } from '../services/getFlagDetail';

export const Detail = ({ match }) => {
  const code = match.params.code;

  const [detail, setDetail] = useState({
    png: '',
    common: '',
    population: '',
    region: '',
    capitalRef: '',
    common2: '',
    subregion: '',
    tldRef: '',
    nameCurrencies: '',
    langs: [],
    borders: [],
  });

  useEffect(() => {
    getFlagDetail(`${code}`).then((data) => setDetail(data[0]));

    return () => setDetail('');
  }, [setDetail, code]);

  return (
    <>
      <WrapperStyles>
        <ButtonBack />
        <CountrySelected {...detail} />
      </WrapperStyles>
    </>
  );
};
