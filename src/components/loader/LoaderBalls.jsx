import styled, { keyframes } from "styled-components";

export const LoaderBalls = ({ color = "#ffffff" }) => {
  return (
    <LoaderWrapper>
      <LoaderCircle style={{ backgroundColor: color }} />
      <LoaderCircle style={{ backgroundColor: color }} />
      <LoaderCircle style={{ backgroundColor: color }} />
      <LoaderShadow />
      <LoaderShadow />
      <LoaderShadow />
    </LoaderWrapper>
  );
};
const showShadow = keyframes`0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: .7;
  }

  100% {
    transform: scaleX(.2);
    opacity: .4;
  }`;
const showCircle = keyframes`
0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }`;
const LoaderCircle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;

  left: 15%;
  transform-origin: 50%;
  animation: ${showCircle} 0.5s alternate infinite ease;
`;
const LoaderShadow = styled.div`
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: ${showShadow} 0.5s alternate infinite ease;
`;
const LoaderWrapper = styled.div`
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
  ${LoaderCircle}:nth-child(2) {
    left: 45%;
    animation-delay: 0.2s;
  }

  ${LoaderCircle}:nth-child(3) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
  ${LoaderShadow}:nth-child(4) {
    left: 45%;
    animation-delay: 0.2s;
  }

  ${LoaderShadow}:nth-child(5) {
    left: auto;
    right: 15%;
    animation-delay: 0.3s;
  }
`;
