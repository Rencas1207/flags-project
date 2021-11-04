import React from 'react';
import { useHistory } from 'react-router-dom';
import { ButtonBackStyles } from './ButtonBackStyles';

export const ButtonBack = () => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };
  return (
    <ButtonBackStyles onClick={handleBack}>
      <i className="fas fa-long-arrow-alt-left"></i>
      Back
    </ButtonBackStyles>
  );
};
