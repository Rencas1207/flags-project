import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const FilterSelectStyles = styled.div`
  &.dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
    width: 60%;
    padding: 1.45rem 1.8rem;
    margin: 2rem 1.6rem;
    position: relative;
    background: var(--white);
    text-align: left;
    border-radius: 0.8rem;
    cursor: pointer;
  }
  ${breakpoints.tablet} {
    &.dropdown {
      margin: 2rem 0;
      width: 100%;
    }
  }
  .fa-chevron-down {
    margin-left: 10px;
  }
  &.dropdown.open ul {
    display: block;
  }
  &.dropdown ul li {
    margin: 1rem 0;
    margin-left: -2rem;
  }
  &.dropdown ul {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    background: var(--white);
    border-radius: 0.8rem;
    width: 100%;
    list-style-type: none;
    text-align: left;
    z-index: 99;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
  }
`;
