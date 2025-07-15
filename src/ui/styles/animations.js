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
    color:${props => props.theme.details};

 background-color:transparent;
}
50%{
    color:${props => props.theme.secondaryText};

background-color:transparent;
}
100%{
   top: -18px;
  right: -20px;
 background-color:${props => props.theme.bgApp};
  color:${props => props.theme.primaryText};

  }
`
export const showRotate = keyframes`

  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
}
`;
export const showTilt = keyframes`

  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-10deg);
  }

  75% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;
export const animationForm = keyframes`
  from {
    height: 0;
  padding: 0px;
   }
  to {
    height: 100%;
  padding: 8px;
  }
`;

// admin
export const showImageIn = keyframes`
0%{
     opacity: 0;
    height: 0;
}
100%{
   opacity: 1;
    height: auto;
}
`;

export const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0);}
  to { opacity: 0; transform: translateY(40px);}
`;
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-40px);}
  to { opacity: 1; transform: translateY(0);}
`;
// loader spinner
export const spinnerDash = keyframes` 0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dashoffset: -125px;
    }`;
export const spinnerRotate = keyframes`
 100% {
      transform: rotate(360deg);
    }`;