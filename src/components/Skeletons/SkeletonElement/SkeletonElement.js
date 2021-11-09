import React from 'react';
// import './Skeleton.css';
import { SkeletonElementStyles } from './SkeletonElementStyles';

export const SkeletonElement = ({ type }) => {
  const classes = `skeleton ${type}`;
  return (
    <SkeletonElementStyles className={classes}>
      <div className="loaderSwipeStyles"></div>
    </SkeletonElementStyles>
  );
};
