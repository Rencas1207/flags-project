import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const ActionsListStyles = styled.div`
  /* display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  justify-content: space-between; */
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
      grid-template-columns: 400px 200px;
    }
  }
`;
