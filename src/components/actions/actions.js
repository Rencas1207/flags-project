import { types } from '../../types/types';

export const filterByName = (name) => {
  return {
    type: types.getCountryByName,
    payload: name,
  };
};
