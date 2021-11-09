import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CountryStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 0.8rem;
  overflow: hidden;
  background: var(--white);
  color: var(--black);
  text-decoration: none;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  .card-country-image {
    height: 16rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  h2 {
    padding: 2.8rem 2.4rem 1rem;
    font-weight: 800;
  }
  .details {
    padding: 0 2.4rem;
    margin-bottom: 4rem;
    p {
      padding: 0.5rem 0;
      strong {
        font-weight: 600;
      }
    }
  }
`;
