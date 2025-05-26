import { keyframes } from "styled-components";

export const apertura = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const cierre = keyframes`
  from {
  transform: translateY(0);
  opacity: 1;
 }
  to {
  transform: translateY(20px);
  opacity: 0;
 }
`
export const waiting = keyframes`
  from {
  width: 100%
 }
  to {
  width: 0%
 }
`
export const showInIcon = keyframes`
0%{
   color: #1A1A1A;
 background-color:transparent;
}
50%{
   color: #1A1A1A;
background-color:transparent;
}
100%{
   top: -12px;
  right: -12px;
  color: white;
  background-color: #FF6200;}
`