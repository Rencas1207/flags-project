import styled from 'styled-components';

export const CountryListByNameStyles = styled.label`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  padding: 0 2rem;
  margin: 0 1rem;
  background: var(--white);
  border-radius: 0.8rem;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04);
  i {
    color: #c4c4c4;
    margin-right: 1rem;
  }
  .form-input {
    /* width: 100%; */
    height: 4.8rem;
    line-height: 4.8rem;
    flex: 1;
    outline: none;
    border: none;
    /* box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.04); */
    &::-webkit-input-placeholder {
      color: #c4c4c4;
    }
  }
`;
