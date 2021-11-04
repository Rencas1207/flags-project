import { types } from '../types/types';

const initialState = {
  countryList: [],
  countryByName: [],
  countryByRegion: [],
  filterByRegion: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCountryList:
      return {
        ...state,
        countryList: action.payload,
      };

    case types.getCountryByRegion:
      // let list;

      // if (state.filterByRegion !== '') {
      //   list =
      // }
      if ('' === action.payload) {
        return {
          ...state,
          countryByRegion: [],
          filterByRegion: '',
        };
      }

      return {
        ...state,
        countryByRegion: state.countryList.filter(
          (country) => country.region === action.payload
        ),
        filterByRegion: action.payload,
      };

    case types.getCountryByName:
      let list;

      if (state.filterByRegion !== '') {
        list = state.countryByRegion;
      } else {
        list = state.countryList;
      }

      return {
        ...state,
        countryByName: list.filter(({ common }) =>
          common.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    default:
      return state;
  }
};
