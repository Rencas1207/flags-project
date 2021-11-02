import styled from 'styled-components';

export const CountryStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.4rem;
  text-align: left;
  border-radius: 0.8rem;
  overflow: hidden;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
  margin: 1rem;
  h2 {
    padding: 2.8rem 2.4rem 1rem;
    font-weight: 800;
  }
  img {
    max-width: 100%;
    width: 100%;
    height: 16rem;
    object-fit: cover;
  }
  .details {
    padding: 0 2.4rem;
    margin-bottom: 4rem;
    p {
      /* font-weight: 300; */
      padding: 0.5rem 0;
      strong {
        font-weight: 600;
      }
    }
  }
`;
