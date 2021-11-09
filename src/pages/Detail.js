import React, { useEffect, useState } from 'react';
import { ButtonBack } from '../components/ButtonBack/ButtonBack';
import { CountrySelected } from '../components/CountrySelected/CountrySelected';
import { WrapperStyles } from '../components/Wrapper/WrappersStyles';
import { getFlagDetail } from '../services/getFlagDetail';

export const Detail = ({ match }) => {
  const [loaded, setLoaded] = useState(false);

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
    setLoaded(false);
    getFlagDetail(`${code}`).then((data) => {
      setDetail(data[0]);
      setLoaded(true);
    });

    return () => setDetail('');
  }, [setDetail, code]);

  return (
    <>
      <WrapperStyles>
        <ButtonBack />
        <CountrySelected {...detail} loaded={loaded} setLoaded={setLoaded} />
      </WrapperStyles>
    </>
  );
};
