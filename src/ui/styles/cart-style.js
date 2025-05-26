import styled from "styled-components"
import { showInIcon } from "./animations"
import { device } from "./device"

export const HeaderCartStyle = styled.div`
  position: relative;

img {
 width: 26px;
height: 26px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
 }
  span{
  position: absolute;
  top: -80px;
  right: -80px;
 background-color:transparent;
  color: #1A1A1A;
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  animation: ${showInIcon} 0.3s ease-in-out forwards;
}
`
export const AsideCartStyle = styled.aside`
position: fixed;
top:0;
left:0;
border-right:1px solid #A4C639;
  transform:translateX(-2px);
  background-color:#F5F5F5;
   width: 0%;
  height: 100dvh;
  transition: 0.4s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  padding: 0;
div,h2,p,button{
  opacity: 0;
  scale:0;
}
&.open{
    transform:translateX(0);
  width: 50%;
  @media ${device.laptop}{
  width: 40%;

  }
div,h2,p,button{
  opacity: 1;
  scale:1;
}
}
`
export const AsideCartHeader = styled.div`
  padding:8px;
   display:flex;
  align-items: start;
  justify-content: space-between;
  border-bottom: 1px #A4C639 dashed;
  h2{
  color:#A4C639;
}
    button{
     color:#4A90E2;
  }
    button:hover{
    scale:1.1;
  }
    button:active{
    scale:0.98;
  }
`
export const AsideCartContent = styled.div`
color:black;
padding:8px 0px;
p{
  color:black;
  text-align: center;
}
`

export const CartItemsPage = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  height: calc(100vh - 5rem);
  min-height: 0;
`;
export const CartItemsContainer = styled.section`
  height: 100%;
  min-height: 0;
  overflow-y: auto;
`;
export const CartFooter = styled.section`
/* margin-top: 10px; */
  width: 100%;
  border-top: 1px #a4c639 dashed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    margin: 10px 0;
  }
  div span {
    font-weight: bold;
  }
 a, button {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 12px;
    background-color: #ff6200;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    text-align: center;
  }
  .btn-proceder {
     background-color: #151515;
     color:#F5F5F5;
      border:1px solid transparent;
     &:hover {
      background-color: #F5F5F5;
      color: #4A90E2;
      border: 1px solid #A4C639;
       transition:all  0.3s ease-in-out;
      }
  }
  .btn-vaciar {
    color: #ff0000;
    background-color: transparent;
    border: 1px solid #000;
    &:hover {
      background-color: #ff0000;
      color: white;
      border:1px solid transparent;
       transition:all  0.3s ease-in-out;
    }
  }
`;
export const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  gap: 12px;
  .cart-item-name {
    color: #ff6200;
    width: 100%;
    display: flex;
    align-items: center;
    span {
      margin: auto;
      font-weight: bold;
      font-size: 1.1rem;
    }
    img {
      width: 80px;
      height: auto;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      @media ${device.tablet} {
        width: 120px;
      }
    }
  }
  .cart-item-quantity {
    margin: auto;
    color: #4a90e2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 10px;
      border: 1px solid #4a90e2;
      padding: 8px 6px;
      button {
        background-color: transparent;
        border: none;
        color: #4a90e2;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          scale: 1.1;
        }
        &:active {
          scale: 0.98;
        }
      }
      p {
        color: #4a90e2;
        font-weight: bold;
        font-size: 18px;
      }
    }
  }
  .cart-item-price {
    color: #a4c639;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    margin: 10px 0;
    font-weight: bold;
    font-size: 1.2rem;
  }
  hr {
    width: 80%;
    margin: 0 auto;
  }
`;