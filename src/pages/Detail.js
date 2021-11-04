import React, { useEffect, useState } from 'react';
import { ButtonBack } from '../components/ButtonBack/ButtonBack';
import { Header } from '../components/Header/Header';
import { getFlagDetail } from '../services/getFlagDetail';

export const Detail = ({ match }) => {
  //   console.log(props);

  const name = match.params.name;

  const [detail, setDetail] = useState([]);

  //   localStorage.getItem('name');

  useEffect(() => {
    getFlagDetail(`${name}`).then((data) => setDetail(data));

    return () => setDetail('');
  }, [setDetail, name]);

  //   useEffect(() => {
  //     effect;
  //     return () => {
  //       cleanup;
  //     };
  //   }, [input]);

  console.log(detail);
  return (
    <>
      <Header />
      <ButtonBack />
      <h1>Hola details</h1>
      {match.params.name}
    </>
  );
};
