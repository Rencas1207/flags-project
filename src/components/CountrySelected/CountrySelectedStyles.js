import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const CountrySelectedStyles = styled.div`
  padding-bottom: 5rem;
  .country-img {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .country-title {
    margin: 3.5rem 0 2rem;
  }
  .grid {
    display: grid;
    grid-row-gap: 3rem;
    p {
      margin: 1rem 0;
      strong {
        font-weight: 600;
      }
    }
  }
  .borders {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin: 3rem 0 0;
    font-weight: 600;
  }
  .border-items {
    margin-top: 2rem;
    .border-item {
      display: inline-flex;
      background: var(--white);
      color: var(--black);
      padding: 0.3rem 2rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      border-radius: 0.2rem;
      box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.05);
      &:first-child {
        margin-left: 0rem;
      }
    }
  }
  .languages {
    span {
      &::after {
        content: ', ';
      }
      &:last-child {
        &::after {
          display: none;
        }
      }
    }
  }
  ${breakpoints.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10rem;
    align-items: center;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .country-title {
      margin: 0rem 0 2rem;
    }
  }
`;
