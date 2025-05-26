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
  padding: 1rem 2rem;
  border-radius: 1.25rem;

  color: rgb(124, 124, 124);
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 25px;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 40px;
  padding: 10px 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;
const LoaderWordsContainer = styled.div`
  overflow: hidden;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(var(--bg-color) 10%, transparent 30%, transparent 70%, var(--bg-color) 90%);
    z-index: 20;
  }
`;
const LoaderWord = styled.span`
  display: block;
  height: 100%;
  padding-left: 6px;
  color: #956afa;
  animation: ${showWords} 4s infinite;
`;
