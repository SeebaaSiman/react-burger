import styled from "styled-components";
import { spinnerDash, spinnerRotate } from "../../ui/styles/animations";

export const SpinnerLoader = () => {
  return (
    <SpinnerStyle viewBox='25 25 50 50'>
      <circle r='20' cy='50' cx='50'></circle>
    </SpinnerStyle>
  );
};

const SpinnerStyle = styled.svg`
  width: 2.25em;
  transform-origin: center;
  animation: ${spinnerRotate} 2s linear infinite;
  circle {
    fill: none;
    stroke: #f5f5f5;
    stroke-width: 2;
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: ${spinnerDash} 1.5s ease-in-out infinite;
  }
`;
