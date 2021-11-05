import styled from 'styled-components';

export const HeaderStyles = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  background: var(--white);
  color: var(--black);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
  }
  .header-dark-mode {
    display: flex;
    align-items: center;
    cursor: pointer;
    i {
      font-size: 1.6rem;
      transform: rotate(-32deg);
    }
    p {
      margin-left: 1rem;
      font-weight: 600;
    }
  }
`;
