import styled from 'styled-components';

export const HeaderStyles = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  background: var(--white);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
  }
  .header-dark-mode {
    display: flex;
    align-items: center;
    cursor: pointer;
    i {
      font-size: 1.6rem;
      margin-right: 0.5rem;
      transform: rotate(-32deg);
    }
    p {
      font-weight: 600;
    }
  }
`;
