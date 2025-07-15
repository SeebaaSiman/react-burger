import styled from "styled-components";
import { apertura, cierre, waiting } from "./animations";

export const ToastContainerStyle = styled.div`
  position: fixed;
  width: 80vw;
  max-width: 410px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  z-index: 999;
  transition: all 0.4s ease-in-out;

&.bottom-left {
  bottom: 20px;
  left: 20px;
}

&.bottom-right {
  bottom: 20px;
  right: 20px;
}

&.top-right {
  top: 20px;
  right: 20px;
}

&.top-left {
  top: 20px;
  left: 20px;
}

  &:hover .hidden-toast {
  position: relative;
  scale: 1;
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
  z-index: 1;
  }
`

export const ToastStyle = styled.div`
    margin-left: 10px;
  width: 80vw;
  max-width: 410px;
  height: 100%;
  background: transparent;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 16px;
  overflow: hidden;
  animation: ${apertura} 0.3s ease-in-out;
  opacity: 1;
  padding: 6px 12px;
  position: relative;
  z-index: 999;
  transform: translateY(0);
  transition: all 0.4 ease-in-out;

&.success {
  background: #3ab65c;
  box-shadow: 3px 4px 5px black;
}
&.error {
  background: #bf333b;
  box-shadow: 3px 4px 5px black;
}
&.info {
  background: #1898c0;
  box-shadow: 3px 4px 5px black;
}
&.warning {
  background: #bc8c12;
  box-shadow: 3px 4px 5px black;
}
&.hidden-toast {
    position: absolute;
  scale: 0.9;
  opacity: 0.5;
  transform: translateY(-20px);
  pointer-events: none;
  z-index: -1;
  transition: all 0.3s ease;
}
&.cerrando {
  animation-name: ${cierre};
  animation-duration: 200ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

}
div {
   width: 22px;
  height: 22px;
  color: ${(props) => props.theme.primaryText};
  opacity: 0.4;
}
p {
   padding: 6px 12px;
  font-size: 16px;
  font-weight: 600;
  color:${(props) => props.theme.bgApp};
  margin-bottom: 5px;
}
button{
  position: absolute;
  top: 4%;
  right: 3%;
  background: none;
  border: none;
  color:${(props) => props.theme.bgApp};
  font-size: 16px;
  cursor: pointer;
  margin-left: auto;
  opacity: 0.7;
  transition: opacity 0.2s ease-in-out;
&:hover {
  opacity: 1;
}
}
span{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: ${(props) => props.theme.primaryText};
  opacity: 0.5;
  animation: ${waiting} var(--duracion) linear forwards;
  animation-play-state: running;
}
`