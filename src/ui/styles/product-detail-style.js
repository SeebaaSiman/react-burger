import styled from "styled-components";
import { device } from "./device";
export const ProductPage = styled.main`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  height: 100dvh;
  width: 100vw;
  background-color: ${(props) => props.theme.bgApp};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow: auto;
 `;

export const ProductPageContent = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-areas:
    "imagen"
    "titulo"
    "descripcion"
    "precio";
transition:${(props) => props.theme.transition};

  @media ${device.tablet} {
  grid-template-columns: repeat(1, 1fr);
     grid-template-areas:
    "titulo"
     "imagen"
    "descripcion"
    "precio";
  }
  img {
    grid-area: imagen ;
    margin: 0 auto;
    width: 100%;
      max-width: 500px;
    object-fit: contain;
         box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.8);

       @media ${device.tablet} {
        /* width: 49%; */
        /* margin: auto 0; */
        border-radius: 18px;
  }
      }
  h1 {
        grid-area: titulo ;

    color:${props => props.theme.secondaryText};
text-shadow: 1px 1px 0 ${(props) => props.theme.secondaryText};
     text-align:center;
       font-size: 3rem;

     }
  p {
        grid-area: descripcion ;
    max-width: 80%;
    margin: auto;
    padding:12px;
     font-size: 16px;
       color: ${props => props.theme.secondaryButtons};

  }
  div{
        grid-area: precio ;

    width: 100%;
     display: flex;
    align-items: center;
    justify-content: center;
    gap:1rem;
    }
  div span{
    font-size: 26px;
    color:${props => props.theme.secondaryText};
text-shadow: 1px 1px 0 ${(props) => props.theme.bgApp};
font-weight: bold;
   }
div img{
        box-shadow: 0 0px 0px 0px transparent;
}
div button{
  margin: 8px;
}
`

