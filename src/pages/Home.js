import React from 'react';
import { ActionsList } from '../components/ActionsList/ActionsList';
import { CountryList } from '../components/CountryList/CountryList';
import { Header } from '../components/Header/Header';

export const Home = () => {
  return (
    <>
      <Header />
      <ActionsList />
      <CountryList />
    </>
  );
};
