import styled from "styled-components";

export const ProductPage = styled.main`
  position: relative;
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  padding-bottom: 1rem;
  h1 {
    color: #ff6200;
    text-shadow: 1px 1px #1a1a1a;
  }
  img {
    object-fit: contain;
  }
  p {
    padding-left: 8px;
    font-size: 16px;
    color: #4a90e2;
  }
  &:first-child span {
    color: #a4c639;
    font-weight: 900;
    font-size: 22px;
    border: 1px solid #a4c639;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 8px 12px;
  }
`;
export const ProductArrowContainer = styled.div`
  position: absolute;
  top: 2%;
  left: 2%;
  color: #a4c639;
  font-size: 18px;
  font-weight: 800;
  border: 1px solid transparent;
  padding: 6px 8px;

  cursor: pointer;
  &:hover {
    color: #ff6200;
    border: 1px solid #a4c639;
    border-radius: 8px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;
    scale: 1.05;
  }
  &:active {
    scale: 0.95;
  }
`;
