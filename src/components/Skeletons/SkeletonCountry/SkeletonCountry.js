import React from 'react';
import { SkeletonElement } from '../SkeletonElement/SkeletonElement';
import { SkeletonCountryStyles } from './SkeletonCountryStyles';

export const SkeletonCountry = () => {
  return (
    <SkeletonCountryStyles>
      <div className="skeleton-country">
        <SkeletonElement type="thumbnail" />
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
    </SkeletonCountryStyles>
  );
};
