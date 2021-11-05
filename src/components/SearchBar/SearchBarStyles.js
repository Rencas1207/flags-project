import styled from 'styled-components';
import { breakpoints } from '../../styles/MediaQueries';

export const SearchBarStyles = styled.label`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  padding: 0 2rem;
  margin: 2rem 1.5rem;
  height: 5rem;
  background: var(--white);
  color: var(--black);
  border-radius: 0.8rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);

  ${breakpoints.tablet} {
    margin: 2rem 0;
  }

  i {
    color: #c4c4c4;
    margin-right: 2rem;
  }
  .form-input {
    /* width: 100%; */
    height: 4.8rem;
    line-height: 4.8rem;
    flex: 1;
    outline: none;
    border: none;
    background: var(--white);
    color: var(--black);
    /* box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04); */
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
  .close {
    border: 1px solid red;
    border-radius: 50%;
    border: none;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
    background: transparent;
  }
`;
