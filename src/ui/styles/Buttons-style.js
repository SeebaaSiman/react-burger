import styled from "styled-components";
import { device } from "./device";
export const ButtonAnatomyStyle = styled.button`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 14px;
  background-image: linear-gradient(#4A90E2, #2A5DB0);
   border: solid 2px #A4C639;
  height: 50px;
  padding: 0px 20px;
  border-radius: 5px;
  font-weight: 600;
  transform: scale(0.89);
  z-index: 2;
  &:not(:hover) .hide,
  &:not(:hover) .icon::before,
  &:not(:hover) .icon::after {
    opacity: 0;
    visibility: hidden;
    transform: scale(1.4);
  }
  .title{
    color:#FF6200;
  font-size: 18px;
  font-weight: bold;;
  }
  .hide {
    transition: all 0.2s ease;
    z-index: 16;
  }
  &:active {
    background-image: linear-gradient(#2A5DB0, #4A90E2);
    border-color: #2A5DB0;
    z-index: 2;
  }
  .icon {
    position: relative;
    margin: 0 auto;
  }
  .icon::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 6px;
    transform: translate(-50%, -50%);
    background-color: #F5F5F5;
    border-radius: 100%;
  }
  .icon::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(-19%, -60%);
    width: 100px;
    height: 33px;
    background-color: transparent;
    border-radius: 12px 22px 2px 2px;
    border-right: solid 2px #F5F5F5;
    border-top: solid 2px transparent;
  }
  .icon .text-icon {
    color: #F5F5F5;
    position: absolute;
    font-size: 12px;
    left: -34px;
    top: -36px;
  }
  .icon img {
    width: 30px;
    height: 30px;
    border: solid 2px transparent;
    display: flex;
   }
  &:hover .icon img {
    border: solid 2px #F5F5F5;
  }
  .padding-left {
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #F5F5F5;
    left: 0;
    top: 0%;
    transform: translateY(-50%);
    z-index: 16;
  }
  .padding-left:before {
    content: "";
    width: 2px;
    height: 10px;
    background-color: #F5F5F5;
    position: absolute;
    left: 0;
    top: 0%;
    transform: translateY(-50%);
    z-index: 16;
  }
  .padding-left:after {
    content: "";
    width: 2px;
    height: 10px;
    background-color: #F5F5F5;
    position: absolute;
    right: 0;
    top: 0%;
    transform: translateY(-50%);
    z-index: 16;
  }
  .padding-left-line {
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #F5F5F5;
    left: -24px;
    top: -8px;
    transform: rotate(-50deg);
    z-index: 16;
  }
  .padding-left-line::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 6px;
    height: 6px;
    transform: translate(-50%, -50%);
    background-color: #F5F5F5;
    border-radius: 100%;
    z-index: 16;
  }
  .padding-left-text {
    color: #F5F5F5;
    font-size: 12px;
    position: absolute;
    white-space: nowrap;
    transform: rotate(50deg);
    bottom: 30px;
    left: -65px;
    z-index: 16;
  }

  .padding-right {
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: #F5F5F5;
    right: 0%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 16;
  }
  .padding-right:before {
    content: "";
    width: 2px;
    height: 10px;
    background-color: #F5F5F5;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 16;
  }
  .padding-right:after {
    content: "";
    width: 2px;
    height: 10px;
    background-color: #F5F5F5;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 16;
  }
  .padding-right-line {
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: #F5F5F5;
    right: -18px;
    top: -8px;
    transform: rotate(50deg);
    z-index: 16;
  }
  .padding-right-line::before {
    content: "";
    position: absolute;
    left: 30px;
    top: 0;
    width: 6px;
    height: 6px;
    transform: translate(-50%, -50%);
    background-color: #F5F5F5;
    border-radius: 100%;
    z-index: 16;
  }
  .padding-right-text {
    color: #F5F5F5;
    font-size: 12px;
    position: absolute;
    white-space: nowrap;
    transform: rotate(-50deg);
    bottom: 26px;
    left: 20px;
    z-index: 16;
  }
  .background {
    position: absolute;
    z-index: 26;
  }
  .background::before {
    content: "";
    position: absolute;
    right: 27px;
    bottom: -55px;
    width: 100px;
    height: 53px;
    background-color: transparent;
    border-radius: 0px 0px 22px 22px;
    border-right: solid 2px #F5F5F5;
    border-bottom: solid 2px transparent;
  }
  .background::after {
    content: "";
    position: absolute;
    right: 25px;
    bottom: -5px;
    width: 6px;
    height: 6px;
    background-color: #F5F5F5;
    border-radius: 100%;
  }
  .background-text {
    position: absolute;
    color: #F5F5F5;
    font-size: 12px;
    bottom: -55px;
    left: -104px;
    z-index: 26;
  }
  .border {
    position: absolute;
    right: -1px;
    top: -22px;
    z-index: 16;
  }
  .border:before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
    height: 15px;
    border: solid 2px #F5F5F5;
    transform: translate(50%, -50%);
    border-radius: 100%;
    z-index: 16;
  }
  .border:after {
    content: "";
    width: 2px;
    height: 25px;
    background-color: #F5F5F5;
    position: absolute;
    right: -16px;
    top: -12px;
    transform: translate(50%, -50%) rotate(60deg);
    z-index: 16;
  }
  .border .border-text {
    position: absolute;
    color: #F5F5F5;
    font-size: 12px;
    right: -110px;
    top: -30px;
    white-space: nowrap;
    z-index: 16;
  }
`;
export const ButtonArrowStyle = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  display: flex;
  font-weight: 600;
  font-size: 20px;
  gap: 0.5rem;
  align-items: center;

  p {
  margin: 0;
  position: relative;
  font-size: 20px;
  color:  #1A1A1A;
}

&::after {
  position: absolute;
  content: "";
  width: 0;
  left: 0;
  bottom: 1px;
  background:  #FF6200;
  height: 2px;
  transition: 0.3s ease-out;
}

  p::before {
  position: absolute;
   content: "${(props) => props.text}";
   width: 0%;
  inset: 0;
  color:  #FF6200;
  overflow: hidden;
  transition: 0.3s ease-out;
  white-space: nowrap;
}
&:hover::after {
  width: 100%;
}
&:hover p::before {
  width: 100%;
}
&:hover svg {
  transform: translateX(4px);
  color:  #FF6200;
}
 svg {
  color:  #1A1A1A;
  transition: 0.3s ease-out;
  width: 15px;
  height: auto;
  transition-delay: 0.2s;
  stroke-width: 4;
}
&:active{
  svg{
    color:  #1A1A1A;
  }
    p::before{
    color:  #1A1A1A;
  }
 }
`
export const BtnCart = styled.button`
   padding:  2px;
  display: flex;
  align-items: center;
  justify-content: center;
   gap: 4px;
  overflow:hidden;
   &:hover p{
    transform:translateX(0px);
    margin:auto;
    opacity:1;
  transition: all .3s cubic-bezier(0.18, 0.89, 0.35, 1.15);
  }
  p {
    transform:translateX(80px);
    opacity:0;
    margin:auto;
      @media ${device.tablet} {

    }
  }
  img {
    width: 24px;
    height: 24px;
   overflow:hidden;
  }
  &:active{
    scale:0.98;
  }
`;
//* error page button */
export const BaseButton = styled.button`
  padding: 0.7rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const BackButton = styled(BaseButton)`
  background: #222;
  color: #fff;

  &:hover {
    background: #444;
  }
`;

export const HomeButton = styled(BaseButton)`
  background: #3470fa;
  color: #fff;

  &:hover {
    background: #1d4ed8;
  }
`;
export const ProductButtonBack = styled.button`
  position: absolute;
  bottom: 3%;
  right: 3%;
  color: #a4c639;
`;
