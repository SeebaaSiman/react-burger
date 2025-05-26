import styled from "styled-components";
import { LoaderBalls } from "./LoaderBalls";
import { LoaderText } from "./LoaderText";

const Loader = () => {
  return (
    <LoaderPage>
      <LoaderBalls />
      <LoaderText />
    </LoaderPage>
  );
};

export default Loader;

const LoaderPage = styled.section`
  height: 100dvh;
  width: 100vw;
  background-color: #191919;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
