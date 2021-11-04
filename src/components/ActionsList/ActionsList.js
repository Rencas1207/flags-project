import React from 'react';
import { FilterSelect } from '../FilterSelect/FilterSelect';
import { SearchBar } from '../SearchBar/SearchBar';
import { WrapperStyles } from '../Wrapper/WrappersStyles';

import { ActionsListStyles } from './ActionsListStyles';

export const ActionsList = () => {
  return (
    <ActionsListStyles>
      <WrapperStyles>
        <div className="grid">
          <SearchBar />
          <FilterSelect />
        </div>
      </WrapperStyles>
    </ActionsListStyles>
  );
};
