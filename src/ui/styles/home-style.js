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
  background-color: #F5F5F5;
     border-bottom: 1px solid #A4C639;
   margin: 0 auto;
  padding: 0 1rem;
     display: grid;
  grid-template-areas:
    "logo toggle icon nav ";
      grid-template-columns: auto 1fr auto auto;
    grid-template-rows: auto;
align-items: center;
   height: 4rem;

  @media ${device.tablet} {
    grid-template-areas: "logo nav  toggle";

  }
`
export const HeaderLogoContainer = styled.div`
  grid-area: logo;
  font-size: 1.5rem;
  font-weight: 700;
  color: #FF6200;
  span{
    font-size: 1.75rem;
  }
`
export const HeaderToggleContainer = styled.div`
grid-area: toggle;
display: flex;
align-items:center;
justify-content: center;
gap:1.5rem;
`


export const IconStyle = styled.div`
 grid-area: icon;
  width: 35px;
  height: 30px;
  margin: 10px 10px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  span {
    background-color: #1A1A1A;
    position: absolute;
    border-radius: 2px;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);
    width: 100%;
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
        background-color: #4A4A4A;
  }
  &:not(.open):hover span:nth-child(2) {
    transform: scaleX(0.5);

  }
  &:not(.open):hover span:nth-child(3) {
    transform: scaleX(0.8);
        background-color: #4A4A4A;
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
  grid-area: nav;
display: none;
  position: fixed;
  top: 4rem;
  left: 0;
  width: 100%;
  background-color: #F5F5F5;
  padding: 0rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  &.open {
  display: block;
  padding: 1rem;    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  button{
    display: block;
        transition: 0.1s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  }
}


button {
  display: none;
  padding: 0.5rem 0;
  color: #4A4A4A;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  &.active{
    color:#4A90E2;
   transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  }
  &:hover {    transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  text-decoration: underline;
  text-decoration-color:#A4C639;
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
  color: #F5F5F5;
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
  color:#F5F5F5;
  }
  span {
     color: #FF6200;
  }
  p {font-size: 1.125rem;
  max-width: 700px;
  color:#A4C639;
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
export const BurgerCardContainer = styled.div`
position: relative;
   border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  background-color: #F5F5F5;
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
   color: #4A4A4A;
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
  color:#1A1A1A;
}
  svg{
     width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
  color: #FF6200;
  }
 `
export const BurgerFooter = styled.div`
width: 100%;
 display: flex;
  justify-content: space-between;
  align-items: center;
 span {
  font-size: 1.125rem;
  font-weight: 700;
    color:#A4C639;
}
 `
export const FeaturedHeader = styled.div`
 text-align: center;
  margin-bottom: 2.5rem;
 p {
  color: #4A4A4A;
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
  background-color: #4A4A4A;

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
  color:#A4C639;
}
 p {
  color: #F5F5F5;
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
  color: #FF6200;
}
span{
  color:#FF6200;
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
  color:#1A1A1A;
  div {

&:first-child {
    text-align: center;
  margin-bottom: 2.5rem;

  p {
  color: #4A4A4A;
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
  background-color: #F5F5F5;
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
  color: #4A4A4A;
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
   background-color: #A4C639;

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
  color:#4A90E2;
}
  p,
  li {
  font-size: 0.875rem;
  color: #1A1A1A;
  margin-bottom: 0.5rem;
}
  ul {
  list-style: none;
}
  a {
  color: #1A1A1A;
  text-decoration: none;
  &:hover {
  color: #4A4A4A;
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
  border-top: 1px solid #F5F5F5;
  text-align: center;
  p {
  font-size: 0.875rem;
  color: #4A4A4A;
 }
`