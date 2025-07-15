import styled from "styled-components";
import { device } from "./device";
export const HomePage = styled.main`
 display: flex;
  flex-direction: column;
  min-height: 100vh;`

//*Header styles */
export const HeaderContainer = styled.header`
position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  background-color: ${(props) => props.theme.bgApp};
     border-bottom: 1px solid ${props => props.theme.primaryText};
   margin: 0 auto;
  padding: 0 1rem;
display:flex;
justify-content: space-between;
align-items:center;
   height: 4rem;

`
export const HeaderLogoContainer = styled.div`
font-family: "Zodiak";
   font-size: 1.5rem;
  font-weight: 700;
  color:${props => props.theme.details};
      /* font-size: 9rem; */
      line-height: 1em;
  p{
font-family: "Zodiak";
  font-weight: 700;
    font-size: 1.75rem;
    /* text-shadow: 0px 1px  1px ${(props) => props.theme.secondaryText}; */
  }
  display:flex;
  align-items: end;
   @media ${device.tablet} {
     font-size: 1.75rem;
     p{
    font-size: 2rem;
  }
      }`
export const HeaderLogoCartContainer = styled.div`
margin-left:6px;
p{
  color:${(props) => props.theme.primaryText};
    font-size: 0.85rem;
}
 `
export const HeaderToggleSesionContainer = styled.div`
 display:flex;
 align-items: center;
 justify-content: center;
 gap:1rem;
 `
export const IconStyle = styled.div`
   width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  span {
    background-color: ${props => props.theme.primaryText};
    position: absolute;
    border-radius: 2px;
transition:${(props) => props.theme.transition};    width: 100%;
    height: 4px;
  }

  span:nth-child(1) {
    top: 0px;
    left: 0px;
  }
  span:nth-child(2) {
    top: 13px;
    left: 0px;
  }
  span:nth-child(3) {
    bottom: 0px;
    left: 0px;
  }
  &:not(.open):hover span:nth-child(1) {
    transform: scaleX(0.8);
        background-color: ${props => props.theme.secondaryText};
  }
  &:not(.open):hover span:nth-child(2) {
    transform: scaleX(0.5);

  }
  &:not(.open):hover span:nth-child(3) {
    transform: scaleX(0.8);
        background-color: ${props => props.theme.secondaryText};
  }
  &.open span:nth-child(1) {
    top: 13px;
  }
  &.open span:nth-child(2) {
    top: 13px;
  }
  &.open span:nth-child(3) {
    top: 13px;
  }
      @media ${device.tablet} {
     display: none;
      }

`;
export const HeaderNavContainer = styled.nav`
 display: none;
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.bgApp};
  padding: 0rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
transition:${(props) => props.theme.transition};
  &.open {
  display: block;
  padding: 1rem;
transition:${(props) => props.theme.transition};
  button{
    display: block;
        transition: 0.1s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  }
}


button {
  display: none;
  padding: 0.5rem 0;
  color: ${props => props.theme.details};
  text-decoration: none;
  font-weight: 500;
transition:${(props) => props.theme.transition};
  &.active{
    color:${props => props.theme.secondaryText};
transition:${(props) => props.theme.transition};  text-decoration: underline;
  text-decoration-color:${props => props.theme.secondaryText};

  }
  &:hover {
transition:${(props) => props.theme.transition};  text-decoration: underline;
  text-decoration-color:${props => props.theme.primaryText};

}
}
    @media ${device.tablet} {
  display: flex;
  flex-direction: row;
    position: static;
    gap:1.5rem;
    width: auto;
    padding: 0;
    box-shadow: none;
    justify-content: center;
    align-items: center;
     margin-right: 1.5rem;
  button{
    display: block;
  }
       &.open {
  display: flex;
  flex-direction: row;
button{
 display: block;
}}

    }
`
//* Main */
//* Hero Section styles */
export const HeroSectionContainer = styled.section`
   position: relative;
  height: 70vh;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.bgApp};
  text-align: center;
  background-image: url("/images/hero-bg.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);

`
export const HeroOverlay = styled.div`
 position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  `

export const HeroContent = styled.div`
 position: relative;
  z-index: 1;
width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  h1{  font-size: 2.5rem;
  margin-bottom: 1rem;
  color:${(props) => props.theme.primaryText};
  }
  span {
font-family: "Erode";
font-weight:700;
     color:${props => props.theme.secondaryText};
  }
  p {
    font-size: 1.125rem;
  max-width: 700px;
  color:${props => props.theme.secondaryText};
  margin: 0 auto 1.5rem;}
div { display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 1.5rem;

  }

     @media ${device.tablet} {
      h1 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.25rem;
  }
  div{
     flex-direction: row;
    justify-content: center;
    gap: 5rem;
}
     }
  `
//* FeaturedBurgers /*
export const FeaturedBurgersContainer = styled.section`
  padding: 4rem 1rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
 `

export const FeaturedHeader = styled.div`
 text-align: center;
  margin-bottom: 2.5rem;
  h2{
  color: ${props => props.theme.primaryText};

  }
 p {
  color: ${props => props.theme.secondaryText};
  max-width: 700px;
  margin: 0 auto;
}
`
export const FeaturedBurgersLoaderContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:1rem;
`
export const FeaturedBurgersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;


@media (min-width: 640px) {
     grid-template-columns: repeat(2, 1fr);
 }

@media (min-width: 1024px) {
     grid-template-columns: repeat(3, 1fr);
 }`
export const FeaturedBurgersButton = styled.div`
 margin-top: 2.5rem;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
 `

//* About section */
export const AboutSectionContainer = styled.section`
padding: 4rem 1rem;
  background-color: ${props => props.theme.secondaryText};

    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);

    width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    border-radius: 22px;
  }
 `
export const AboutContent = styled.div`
h2 {
  margin-bottom: 1rem;
  color:#F5F5F5;
    text-shadow: 2px 2px 0 ${(props) => props.theme.primaryText};
       font-size: 3rem;
    line-height: 1em;
}
 p {
 color: 2px solid ${(props) => props.theme.primaryText};
  margin-bottom: 1rem;
}

div {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
}

svg {
  width: 24px;
  height: 24px;
  margin-right: 0.5rem;
  margin-left: 0;
  color:${props => props.theme.primaryButtons};
}
span{
    color:${props => props.theme.primaryButtons};
}
`
export const AboutImage = styled.div`
 height: 300px;
  overflow: hidden;
  border-radius: 0.5rem;
  img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}
@media (min-width: 768px) {
    height: auto;
}
`
//* Location Section */
export const LocationSectionContainer = styled.section`
  padding: 4rem 1rem;
width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color:${props => props.theme.primaryText};
      h2{
  color:${props => props.theme.primaryText};
    text-shadow: 2px 2px 0 ${(props) => props.theme.secondaryButtons};
      line-height: 1em;
      font-size: 3rem;

      }
  div {

&:first-child {
    text-align: center;
  margin-bottom: 2.5rem;

  p {
  color:${props => props.theme.primaryText};
  max-width: 700px;
  margin: 0 auto;
}
  }
  &:last-child{
     display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
     @media ${device.tablet} {
     grid-template-columns: 1fr 1fr;
}
  }
div:first-child{
     height: 300px;
  background-color: transparent;
  border-radius: 0.5rem;
  overflow: hidden;
}
div:last-child {

  h3 {
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

 h3:first-child {
  margin-top: 0;
}

 p {
  color: ${props => props.theme.primaryText};
  margin-bottom: 1rem;
}
button{
  margin:auto;
}
 }
}
 `
//* Footer styles */
export const FooterContainer = styled.footer`
   background-color: ${props => props.theme.primaryText};

  padding: 2rem 1rem;
   width: 100%;
         margin: 0 auto;
  @media ${device.laptop} {
    padding: 2rem 4rem;
  }
`
export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  h3 {
  font-size: 1.125rem;
  margin-bottom: 1rem;
  color:${props => props.theme.secondaryText};
}
  p,
  li {
  font-size: 0.875rem;
  color: ${props => props.theme.white};
  margin-bottom: 0.5rem;
}
  ul {
  list-style: none;
}
  a {
  color: ${props => props.theme.white};
  text-decoration: none;
  &:hover {
  color: ${props => props.theme.secondaryText};
  text-decoration: underline;
  cursor: pointer;
}
}

 @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
}

 @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
}
`
export const FooterButton = styled.div`
 margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.secondaryText};
   text-align: center;
  p {
  font-size: 0.875rem;
  color: ${props => props.theme.white};
 }
`