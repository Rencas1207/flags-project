import styled from 'styled-components';

const breakpoints = {
  desktop: '@media screen and (max-width: 1440px)',
  tablet: '@media screen and (max-width: 991px)',
  phone: '@media screen and (max-width: 500px)',
};

export const CountryListStyled = styled.div`
  display: grid;
  /* grid-template-columns: repeat(1, 1fr); */
  gap: 3.6rem 0;
  justify-content: center;
  padding: 4rem 2rem;
  border: 1px solid red;
  /* ${breakpoints.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${breakpoints.desktop} {
    grid-template-columns: repeat(4, 1fr);
  } */
`;
