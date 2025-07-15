import styled from "styled-components"
import { showInIcon } from "./animations"
import { device } from "./device"

export const HeaderCartStyle = styled.div`
  position: relative;
    z-index: 500;

img {
 width: 30px;
height: 30px;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  cursor: pointer;
  &:hover {
    transform: scale(1.04);
  }
 }
  p{
  position: absolute;
  color:${(props) => props.theme.primaryText};
  top: -80px;
  right: -80px;
 background-color:${(props) => props.theme.bgApp};;
 font-weight: bolder;
  border-radius: 50%;
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  animation: ${showInIcon} 0.3s ease-in-out forwards;
}
`
export const AsideCartStyle = styled.aside`
position: fixed;
top:0;
left:0;
border-right:1px solid ${props => props.theme.details};
  transform:translateX(-2px);
  background-color:${(props) => props.theme.bgApp};
   width: 0%;
  height: 100dvh;
  transition: 0.4s cubic-bezier(0.8, 0.5, 0.2, 1.4);
  padding: 0;

    z-index: 500;

div,h2,p,button{
  opacity: 0;
  scale:0;
}
&.open{
    transform:translateX(0);
  width: 65%;
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
  border-bottom: 1px ${props => props.theme.details} dashed;
  h2{
  color:${props => props.theme.primaryText};
}
    button{
      font-size: 1.2rem;
     color:${props => props.theme.primaryText};
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
   width: 100%;
  border-top: 1px  ${(props) => props.theme.primaryText} dashed;
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
  div span ,div p{
    font-weight: bold;
    color:${(props) => props.theme.primaryText};
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
     background-color:${(props) => props.theme.primaryText};
     color:${(props) => props.theme.bgApp};
      border:1px solid transparent;
        font-size: 1rem;
      box-shadow: ${(props) => props.theme.cardShadow};

     &:hover {
      background-color: ${(props) => props.theme.bgApp};
      color: ${props => props.theme.secondaryButtons};
      border: 1px solid ${props => props.theme.details};
       transition:all  0.3s ease-in-out;
      }
  }
  .btn-vaciar {
    color: #ff0000;
    background-color: transparent;
    border: 1px solid #000;
      box-shadow: ${(props) => props.theme.cardShadow};
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
  gap: 6px;
  padding-right: 10px;
    margin-bottom: 8px;
   hr {
    width: 80%;
    margin: 2px auto;
  }
`;
export const CartItemName = styled.div`
    color:${(props) => props.theme.primaryText};
    width: 100%;
    display: flex;
    align-items: center;
    gap:10px;
    span,p{
          font-family: 'Erode';
font-weight:400;
      color:${(props) => props.theme.primaryText};
    }
 
    div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
  flex-wrap:wrap;
    }
    span {
      margin: auto;
      font-weight: bold;
      font-size: 1.1rem;
    }
    img {
      width: 90px;
      height: auto;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
            box-shadow: ${(props) => props.theme.cardShadow};
      @media ${device.tablet} {
        width: 120px;
      }
    }
`
export const CartItemQuantity = styled.div`
 margin: auto;
    color: ${props => props.theme.secondaryButtons};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
`
export const CartItemPrice = styled.div`
 color: ${props => props.theme.primaryText};
    display: flex;
    justify-content: center;
    align-items: center;
    gap:6px;
    font-weight: bold;
    font-size: 1.2rem;
    p,span{
 color: ${props => props.theme.primaryText};
    }
`;
export const CartItemQuantityButton = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;

       padding: 6px 4px;
       button {
        background-color: transparent;
        border: none;
        color: ${props => props.theme.secondaryButtons};
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
        color: ${props => props.theme.secondaryButtons};
        font-weight: bold;
        font-size: 18px;
      }
`