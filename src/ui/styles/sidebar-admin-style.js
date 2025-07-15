import styled from "styled-components";
import { device } from "./device";

export const SideContainer = styled.nav`
  background-color: ${(props) => props.theme.secondaryText};
  transition: all 0.6s ease-in-out;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.6s ease-in-out;
  overflow:hidden;
    box-shadow: ${(props) => props.theme.cardShadow};

  @media ${device.mobileL} {
    flex-direction: column;
    height: 100%;
  }
`;

export const ArrowContainer = styled.div`
  display: none;
  padding: 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease-in-out;
  background-color: ${(props) => props.theme.secondaryText};
  @media ${device.mobileL} {
    display: flex;
  padding: 4px;
  }
  &.side-active {
    justify-content: end;
 background-color: ${(props) => props.theme.secondaryText};    transition: all 0.6s ease-in-out;
  }
  button {
    display:flex;
    justify-content: center;
    align-items: center;
    all: unset;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
svg{
        border-radius:50%;
}
&:hover {
      transition: all 0.6s ease-in-out;
      svg{
        background-color:  ${(props) => props.theme.primaryText};
        transition: all 0.6s ease-in-out;
      }
        }
      }
      `;


export const NavBarContainer = styled.ul`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transition: all 0.6s ease-in-out;
  padding: 0 4px 4px 4px;
  width: 100%;
  overflow: hidden;
  @media ${device.mobileL} {
    height: 100%;
    padding: 8px 0;
    flex-direction: column;
    transition: all 0.6s ease-in-out;
  }
  &.side-active {
 background-color: ${(props) => props.theme.secondaryText};    transition: all 0.6s ease-in-out;
    @media ${device.mobileL} {
      span {
        width: 100%;
        opacity: 1;
        scale: 1;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-weight: 500;
      }
    }
  }
  li {
    padding: 4px;
    list-style: none;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;
    @media ${device.mobileL} {
      margin-left: 8px;
      padding: 8px;

      &:hover {
     span {
        color:    ${(props) => props.theme.white};
       fill:    ${(props) => props.theme.white};
              }
            }
    }
svg{
 }
    span {
      display: none;
      width: 0;
      scale: 0;
      opacity: 0;
      font-size: 0em;
      @media ${device.mobileL} {
        display: flex;
      }
    }}
`;
export const Overlay = styled.div`
  position: absolute;
width: 100%;
background-color: ${(props) => props.theme.primaryText};

transition: width 0s ease, all .4s ease-in-out;

border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
border-top-left-radius: 0px;
@media ${device.mobileL} {
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 0px;
  &::before {
    content: " ";
    position: absolute;
    top: -10px;
    right: 0;
    width: 10px;
    height: 10px;
    border-bottom-right-radius: 20px;
    box-shadow: 5px 5px 0 5px ${(props) => props.theme.primaryText};
    background-color: transparent;
  }
  &::after {
    content: " ";
    position: absolute;
    bottom: -10px;
    right: 0;
    width: 10px;
    height: 10px;
    border-top-right-radius: 20px;
    box-shadow: 5px -5px 0 5px  ${(props) => props.theme.primaryText};
    background-color: transparent;
  }
}`

export const ProfileContainer = styled.div`
  transition: all 0.6s ease-in-out;
  border-left: white 1px solid;
  @media ${device.mobileL} {
    width: 100%;
    border-top: white 1px solid;
    border-left: transparent 0px solid;
    padding-top: 8px;
  }
  div {
    &:nth-child(1) {
      display: none;
      @media ${device.mobileL} {
        display: flex;
      }
    }
    &:nth-child(2) {
cursor: pointer;
@media ${device.mobileL} {
  &:hover{

    h2{
      color: red;
      }
  }
      }
    }
    margin-left: 8px;
    padding: 8px;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;
    img {
      width: 2em;
      height: 2em;
    }
  }
  @media ${device.mobileL} {
    &.side-active {
       background-color: ${(props) => props.theme.secondaryText};
      transition: all 0.6s ease-in-out;
      h2 {
        width: auto;
        opacity: 1;
        scale: 1;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: white;
        font-weight: 500;
      }
    }
  }
  h2 {
    display: none;
    width: 0;
    scale: 0;
    opacity: 0;
    font-size: 0em;
    @media ${device.mobileL} {
      display: flex;
    }
  }
`;
