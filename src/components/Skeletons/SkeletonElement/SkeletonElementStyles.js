import styled from 'styled-components';
import { breakpoints } from '../../../styles/MediaQueries';

export const SkeletonElementStyles = styled.div`
  background: var(--content-loader);
  border-radius: 4px;
  &.text {
    position: relative;
    width: 80%;
    height: 1.5rem;
    margin: 1.5rem 2.3rem;
    overflow: hidden;

    &.selected {
      width: 50%;
      margin: 1.5rem 0;
      &:nth-child(2n + 1) {
        width: 40%;
      }
      ${breakpoints.desktop} {
        width: 80%;
        &:nth-child(2n + 1) {
          width: 60%;
        }
      }
    }
  }
  &.title {
    position: relative;
    width: 50%;
    height: 20px;
    margin: 2.8rem 0 2rem;
    margin-left: 2.3rem;
    overflow: hidden;
    &.selected {
      width: 60%;
      margin: 2.8rem 0 2rem;
      ${breakpoints.desktop} {
        width: 60%;
      }
    }
  }
  &.subtitle {
    position: relative;
    overflow: hidden;
    margin: 2.2rem 0 2rem;
    width: 30%;
    height: 2rem;
  }
  &.thumbnail {
    position: relative;
    overflow: hidden;
    width: 28rem;
    height: 16rem;
  }
  &.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  &.thumbnail-grande {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  &.btn {
    width: 7rem;
    height: 2rem;
    margin-right: 1.5rem;
    position: relative;
    overflow: hidden;
  }

  /* Loader */
  .loaderSwipeStyles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: loaderSwipeAnim 0.9s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    background: linear-gradient(
      to right,
      var(--bg-shimmer) 10%,
      rgba(255, 255, 255, 0.05) 50%,
      var(--bg-shimmer) 90%
    );
  }
  @keyframes loaderSwipeAnim {
    0% {
      left: -100%;
    }
    100% {
      left: 100%;
    }
  }
`;
