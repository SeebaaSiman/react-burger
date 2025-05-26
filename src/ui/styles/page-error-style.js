import styled from "styled-components";
import imgError from "../../assets/error-page.png";

export const PageNotFound = styled.div`
  width: 100vw;
  height: 100dvh;
  background-image: url(${imgError});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  div {
    background: rgba(0, 0, 0, 0.5);
    padding: 2rem 3rem;
    border-radius: 20px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-weight: normal;
  }
`;

export const ButtonGroup = styled.span`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

