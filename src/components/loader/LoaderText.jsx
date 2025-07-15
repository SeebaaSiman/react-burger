import styled, { keyframes } from "styled-components";

export const LoaderText = () => {
  return (
    <LoaderContainer>
      <p>Cargando</p>
      <LoaderWordsContainer>
        <LoaderWord>botones</LoaderWord>
        <LoaderWord>menú</LoaderWord>
        <LoaderWord>formularios</LoaderWord>
        <LoaderWord>hamburguesas</LoaderWord>
        <LoaderWord>botones</LoaderWord>
      </LoaderWordsContainer>
    </LoaderContainer>
  );
};
const showWords = keyframes` 10% {
    -webkit-transform: translateY(-102%);
    transform: translateY(-102%);
  }

  25% {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
  }

  35% {
    -webkit-transform: translateY(-202%);
    transform: translateY(-202%);
  }

  50% {
    -webkit-transform: translateY(-200%);
    transform: translateY(-200%);
  }

  60% {
    -webkit-transform: translateY(-302%);
    transform: translateY(-302%);
  }

  75% {
    -webkit-transform: translateY(-300%);
    transform: translateY(-300%);
  }

  85% {
    -webkit-transform: translateY(-402%);
    transform: translateY(-402%);
  }

  100% {
    -webkit-transform: translateY(-400%);
    transform: translateY(-400%);
  }`;
const LoaderContainer = styled.div`
  font-family: "Zodiak";
  padding: 1rem 2rem;
  border-radius: 1.25rem;
  overflow: hidden;
  color: rgb(124, 124, 124);
  font-weight: 500;
  font-size: 25px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 40px;
  padding: 10px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  p {
    font-family: "Zodiak";
    font-weight: 400;
    font-size: 22px;
  }
`;
const LoaderWordsContainer = styled.div`
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 20;
  }
`;
const LoaderWord = styled.span`
  font-family: "Zodiak";
  font-weight: 400;
  font-size: 24px;
  display: block;
  height: 100%;
  padding-left: 6px;
  color: #b1f7c3;
  animation: ${showWords} 4s infinite;
`;
