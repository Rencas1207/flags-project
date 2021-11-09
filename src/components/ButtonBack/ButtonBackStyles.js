import styled from 'styled-components';

export const ButtonBackStyles = styled.button`
  border: none;
  background: var(--white);
  color: var(--black);
  font-weight: 300;
  font-size: 1.2rem;
  padding: 1.2rem 3rem;
  margin: 5rem 0;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.04);
  i {
    margin-right: 1rem;
    font-size: 1.8rem;
  }
  p {
    font-weight: 300;
  }
`;
