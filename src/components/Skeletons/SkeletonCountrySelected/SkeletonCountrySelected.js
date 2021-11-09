import React from 'react';
import { SkeletonElement } from '../SkeletonElement/SkeletonElement';
import { SkeletonCountrySelectedStyles } from './SkeletonCountrySelectedStyles';
// import { SkeletonElement } from './SkeletonElement';

export const SkeletonCountrySelected = () => {
  return (
    <SkeletonCountrySelectedStyles>
      <div className="skeleton-country-image">
        <SkeletonElement type="thumbnail-grande" />
      </div>
      <div className="skeleton-country-details">
        <SkeletonElement type="title selected" />
        <div className="grid">
          <div>
            <SkeletonElement type="text selected" />
            <SkeletonElement type="text selected" />
            <SkeletonElement type="text selected" />
            <SkeletonElement type="text selected" />
            <SkeletonElement type="text selected" />
          </div>
          <div>
            <SkeletonElement type="text selected" />
            <SkeletonElement type="text selected " />
            <SkeletonElement type="text selected" />
          </div>
        </div>
        <SkeletonElement type="subtitle selected" />
        <div className="skeleton-country-borders">
          <SkeletonElement type="btn" />
          <SkeletonElement type="btn" />
          <SkeletonElement type="btn" />
        </div>
      </div>
    </SkeletonCountrySelectedStyles>
  );
};
