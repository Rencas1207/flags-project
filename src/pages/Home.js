import React from 'react';
import { ActionsList } from '../components/ActionsList/ActionsList';
import { CountryList } from '../components/CountryList/CountryList';

export const Home = () => {
  return (
    <>
      <ActionsList />
      <CountryList />
    </>
  );
};
