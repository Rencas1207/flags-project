import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { types } from '../../types/types';
import { ButtonBackStyles } from './ButtonBackStyles';

export const ButtonBack = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleBack = () => {
    history.goBack(`${process.env.PUBLIC_URL}`);
    dispatch({
      type: types.getCountryByName,
      payload: '',
    });
    dispatch({
      type: types.getCountryByRegion,
      payload: '',
    });
  };
  return (
    <ButtonBackStyles onClick={handleBack}>
      <i className="fas fa-long-arrow-alt-left"></i>
      <p>Back</p>
    </ButtonBackStyles>
  );
};
