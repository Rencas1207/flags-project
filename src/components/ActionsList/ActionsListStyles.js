import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const ActionsListStyles = styled.section`
  margin: 2rem 0 1rem;
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  ${breakpoints.tablet} {
    .grid {
      grid-template-columns: 300px 200px;
    }
  }
  ${breakpoints.desktop} {
    .grid {
      grid-template-columns: 440px 200px;
    }
  }
`;
