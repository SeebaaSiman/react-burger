import styled from "styled-components"
//* Burger Card (Home) */
export const BurgerCardContainer = styled.div`
position: relative;
   border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.theme.bgApp};
  `
export const BurgerImage = styled.div`
width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
 img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

 img:hover {
  transform: scale(1.05);
}
 `
export const BurgerCardContent = styled.div`
  padding: 1rem;
  p {
     font-size: 0.875rem;
   color: ${props => props.theme.secondaryText};
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  }
  `
export const BurgerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  div{
     display: flex;
  align-items: center;
  }
h3{
  color:${props => props.theme.primaryText};
}

  svg{
     width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
  color:${props => props.theme.secondaryButtons};
  }
  span{
    font-family: "Erode";
    font-weight: 700;
  color:${props => props.theme.secondaryButtons};

  }
 `
export const BurgerFooter = styled.div`
width: 100%;
 display: flex;
  justify-content: space-between;
  align-items: center;
  div {
  font-size: 1.125rem;
  font-weight: 700;
    color:${props => props.theme.secondaryButtons};
}
 `



//** Card Product (menu) */

export const CardProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h3 {
    padding-left: 8px;
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.secondaryText};
   }

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
          border-bottom-left-radius:16px ;

  }
`;
export const CardProductContent = styled.p`
  font-size: 14px;
  color:${props => props.theme.secondaryText};
  padding: 16px;
  opacity: 0.6;
`;
export const CardProductPrice = styled.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
 transform: translateX(44%);
     transition:${(props) => props.theme.transition};

  .item-detail-price {
    width: auto;
    display: flex;
    justify-content:center;
    align-items: center;
    gap:8px;
  span {
  scale:0.95;
    color:${props => props.theme.secondaryText};
    text-decoration: line-through;
    font-size: 14px;
  }
  p {
    font-size: 1.125rem;
    font-weight: 700;
    color: ${props => props.theme.secondaryButtons};

  }
  }
    button {
        transform:  translateX(50px);
  transition:${(props) => props.theme.transition};

  }
`;
export const ItemDetailsButton = styled.div`
  padding: 0 0 12px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition:${(props) => props.theme.transition};
  button {
     transform:  translateY(80px);
  transition:${(props) => props.theme.transition};

  }
`;
export const CardProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${(props) => props.theme.bgApp};
  border-top: 1px solid ${props => props.theme.details};
  border-left: 1px solid ${props => props.theme.details};
  border-right: 1px solid ${props => props.theme.details};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  transition:${(props) => props.theme.transition};

  &:hover {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.8);

    .card-product-image {
      transform: scale(1.25);
     }
     button{
      scale:1;
      opacity: 1;
      transform: translateX(0) translateY(0);
     }

${CardProductPrice}{
 transform: translateX(0%);
  transition:${(props) => props.theme.transition};
}
  ${CardProductContent}{
    opacity: 1;
  transition:${(props) => props.theme.transition};
  }
  }
`;