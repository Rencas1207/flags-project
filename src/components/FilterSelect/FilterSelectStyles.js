import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const FilterSelectStyles = styled.div`
  display: flex;
  margin: 2rem 1.5rem;
  ${breakpoints.tablet} {
    margin: 2rem 0;
  }
  select {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
    background: var(--white);
    color: var(--black);
    outline: none;
    width: 100%;
    /* height: 4.8rem; */
    /* margin: 0 3rem; */
    padding: 1.7rem 1.2rem;
    border-radius: 0.8rem;
    border: none;
    font-weight: 300;
  }
`;
