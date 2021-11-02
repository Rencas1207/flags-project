import React from 'react';
import { CountryList } from './components/CountryList/CountryList';
import { GlobalStyles } from './styles/GlobalStyles';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { types } from './types/types';
import { CountryListByRegion } from './components/CountryListByRegion/CountryListByRegion';
import { CountryListByName } from './components/CountryListByName/CountryListByName';

const initialState = {
  countryList: [],
  countryByName: [],
  countryByRegion: [],
  filterByRegion: '',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case types.setCountryList:
      return {
        ...state,
        countryList: action.payload,
      };

    case types.getCountryByRegion: {
      return {
        ...state,
        countryByRegion: state.countryList.filter(
          (country) => country.region === action.payload
        ),
        filterByRegion: action.payload,
      };
    }

    case types.getCountryByName: {
      console.log(action.payload);
      return {
        ...state,
        countryByName: state.countryList.filter((country) => {
          const { common } = country.name;
          const name = common
            .toLowerCase()
            .includes(action.payload.toLowerCase());
          return name;
        }),
      };
    }

    default:
      return state;
  }
}

const store = createStore(reducer, initialState);

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <i className="far fa-moon"></i>
      <CountryListByRegion />
      <CountryListByName />
      <CountryList />
    </Provider>
  );
};
