import React from 'react';
import { Link } from 'react-router-dom';
import { WrapperStyles } from '../Wrapper/WrappersStyles';
import { HeaderStyles } from './HeaderStyles';

export const Header = () => {
  return (
    <HeaderStyles>
      <WrapperStyles>
        <div className="content">
          <Link
            to="/"
            style={{ textDecoration: 'none', color: 'var(--black)' }}
          >
            <h1 className="content-title">Where in the world?</h1>
          </Link>

          <div className="header-dark-mode">
            <i className="far fa-moon"></i>
            <p>Dark Mode</p>
          </div>
        </div>
      </WrapperStyles>
    </HeaderStyles>
  );
};
