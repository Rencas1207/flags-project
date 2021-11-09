import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const WrapperStyles = styled.div`
  max-width: 1328px;
  padding: 0 2rem;
  margin: auto;
  ${breakpoints.phone} {
    padding: 0 4rem;
  }
  ${breakpoints.tablet} {
    padding: 0 5rem;
  }
  ${breakpoints.desktop} {
    padding: 0 6rem;
  }
`;
