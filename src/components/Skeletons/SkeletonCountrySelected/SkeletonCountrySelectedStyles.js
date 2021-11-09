import styled from 'styled-components';
import { breakpoints } from '../../../styles/MediaQueries';

export const SkeletonCountrySelectedStyles = styled.div`
  grid-template-columns: 1fr;
  overflow: hidden;
  padding-bottom: 5rem;

  ${breakpoints.desktop} {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    column-gap: 7.5rem;
  }

  .skeleton-country-image {
    width: 100%;
    height: 60vw;
    ${breakpoints.desktop} {
      height: 340px;
    }
  }

  .skeleton-country-details {
    width: 100%;
    height: 100%;
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      ${breakpoints.desktop} {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  .skeleton-country-borders {
    display: flex;
  }
`;
