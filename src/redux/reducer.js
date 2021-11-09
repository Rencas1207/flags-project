import { types } from '../types/types';

const initialState = {
  countryList: [],
  countryByName: '',
  countryByRegion: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCountryList:
      return {
        ...state,
        countryList: action.payload,
      };

    case types.getCountryByName:
      return {
        ...state,
        countryByName: action.payload,
      };

    case types.getCountryByRegion:
      return {
        ...state,
        countryByRegion: action.payload,
      };

    default:
      return state;
  }
};
