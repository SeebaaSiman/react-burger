import styled, { keyframes } from "styled-components";
import { device } from "./device";
//* Menu.jsx
export const MenuPage = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width:100vw;
  min-height: 100dvh;
    @media ${device.tablet} {
       flex-direction: row;
  }
  `
//* MenuCartContainer */
export const MenuCartContainer = styled.div`
  position:fixed;
left:16px;
top:20px;
  z-index: 400;
p{
  color:${(props) => props.theme.primaryButtons};
}
    `
//*SidebarMenu.jsx

export const SideBar = styled.section`
  background: ${props => props.theme.secondaryText};
  color: ${props => props.theme.details};
  z-index: 300;
  box-shadow: ${props => props.theme.cardShadow};
  transition: ${props => props.theme.transition};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80vw;
  max-width: 350px;
  display: flex;
    flex-direction: column;
   align-items: start;
  gap: 22px;
padding:16px;
  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;
  &.open {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
  }

h1{
     font-size: 2rem;
     cursor:pointer;
  font-weight: bold;
    color:${props => props.theme.primaryText};
      text-shadow: 2px 2px 0 ${(props) => props.theme.secondaryText};
     line-height: 1em;
   }
 @media ${device.tablet} {
      max-width: none;
    transform: none;
    opacity: 1;
       left: 0;
    right: auto;
    flex-direction: column;
align-items:start;
    padding:18px 12px;
    width: 300px;
    position: fixed;
    height: 100vh;
  justify-content: space-between;
  transition:${(props) => props.theme.transition};
h1{
   margin-left:auto;
}
}
  `
export const HamburgerMenuContainer = styled.div`
margin-left: auto;
margin-right: 16px;
z-index: 600;
@media ${device.tablet} {
display: none;
}
`

export const SidebarContent = styled.div`
   display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap:wrap;
  gap: 8px;
cursor:pointer;
transition:${(props) => props.theme.transition};

     p{
   font-size: 14px;
  color: ${(props) => props.theme.bgApp};
  }
svg{
  transform:translateY(-5px);
}
  &.info-location{
width: 100%;
  }
  &.hour{

    cursor: initial;
span{
       transform:translateX(-25px);
}
     svg{
       transform:translateY(-14px) translateX(-10px);
     }
  }
@media ${device.tablet} {
  &.info-digital-clock{

  align-items: center;
  svg{
  transform:translateY(-3px);
}
  }
  &.hour{
     flex-wrap: wrap;
  }
}
  `

export const HourList = styled.div`
margin-left:22px;
display: flex;
flex-direction:column;
width: 100%;
  div{
    display: flex;
  flex-direction:row;
  justify-content: space-between;
  gap:16px;
  font-size: 14px;
  margin-bottom: 4px;
  color: ${(props) => props.theme.bgApp};
 @media ${device.tablet} {
  padding:0 12px;
 }
  &.highlight {
  color: ${props => props.theme.details};
}
}`
//* MenuContent.jsx
export const MenuContentWrapper = styled.section`
  flex: 1;
 @media ${device.tablet} {
    margin-left: 320px;
}`
//* BannerClouseShop.jsx
export const BannerClouseShopWrapper = styled.aside`
 position: fixed;
bottom: 0;
left:0;
width: 100vw;
padding:1rem 2rem;
 background-color: ${props => props.theme.thirdText};
  color: ${(props) => props.theme.primaryText};
 border-top-left-radius: 16px;
 border-top-right-radius: 16px;
 z-index: 800;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.3);
`
//* PromotionalBanner.jsx

export const PromotionalBannerWrapper = styled.section`
  position: relative;
  height: 256px;
  border:none;
  @media ${device.tablet} {
    height: 320px;
  }
  img {
    object-fit: cover;
  }
`;
export const BannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
       border-bottom-left-radius: 0px;

  video{
    position:absolute;
    width:100%;
    height:100%;
  z-index: 20;
  filter:brightness(80%);
  object-fit: cover;
  }
    @media ${device.tablet} {
       border-bottom-left-radius: 16px;

    }
`;
export const BannerText = styled.div`
  text-align: center;
  color: ${props => props.theme.secondaryButtons};
  z-index: 200;
`;
export const DiscountText = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: ${props => props.theme.primaryButtons};
  text-shadow: 1px 1px ${props => props.theme.secondaryText};
`;
export const PromoTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px ${props => props.theme.secondaryText};
`;
export const PromoSubtitle = styled.div`
  margin-top: 8px;
  text-shadow: 1px 1px ${props => props.theme.secondaryText};
`;
export const RestaurantLogo = styled.div`
  position: absolute;
  left: 40px;
  bottom: -40px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: ${props => props.theme.secondaryText};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);

  z-index: 200;
  padding: 5px;
  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${(props) => props.theme.bgApp};
    display: flex;
    align-items: center;
    justify-content: center;

  }
  img{
    object-fit: cover;
    width: 100%;
  }
`;
//* DeliveryOptions.jsx
export const DeliveryOptionsStyle = styled.div`
  margin-top: 64px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  align-items: center;
  color:${(props) => props.theme.primaryText};
p{
  width: 100%;
  margin-bottom:8px;
  color:${(props) => props.theme.primaryText};
}
  @media ${device.tablet} {
     .delivery-options {
      padding: 0 32px;
    }
  }
`;
export const DeliveryToggleButtonWrapper = styled.div`
  display: flex;
`;
export const DeliveryToggleButton = styled.button`
  padding: 8px 24px;
  border: none;
  background-color:${props => props.theme.secondaryText};
      color: ${props => props.theme.primaryText};
      box-shadow: ${(props) => props.theme.cardShadow};
  cursor: pointer;
     transition: 0.3s cubic-bezier(0.8, 0.5, 0.2, 1.4);

  &:first-child {
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
  }

  &:last-child {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }

  &.active {
    background-color: ${props => props.theme.details};
    color: ${(props) => props.theme.bgApp};
  }

  &.active.takeaway {
    background-color: ${props => props.theme.thirdText};
    color: ${(props) => props.theme.bgApp};
    font-weight: 500;
  }
`;
export const OrderInfo = styled.div`
  display: flex;
  gap: 16px;
`;
export const DeliveryInfoBlock = styled.div`
  text-align: right;
`;
export const DeliveryInfoLabel = styled.div`
  font-size: 14px;
  color:${props => props.theme.secondaryText};
`;
export const DeliveryInfoLink = styled.div`
  font-size: 14px;
  color: ${props => props.theme.secondaryButtons};
  cursor: pointer;
`;

//* CategoryNav.jsx

export const CategoryNavStyle = styled.nav`
  position: sticky;
  top: 0;
  height: 4rem;
  background-color:${props => props.theme.primaryText};
  color: ${(props) => props.theme.bgApp};
  z-index: 10;
  margin-top: 16px;
  box-shadow: ${(props) => props.theme.cardShadow};
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.tablet} {
    align-items: center;
    padding: 12px 32px;
    border-bottom-left-radius: 16px;
    border-top-left-radius: 16px;
  }
`;
const openSearch = keyframes`
  from {
rotate: 0deg;
  }
  to{
rotate: -285deg;
  }
`
const closeSearch = keyframes`
  from{
rotate: -285deg;
  }
  to {
rotate: 0deg;
  }

`
export const navItemsShowIn = keyframes`
0%{
  transform: translateX(-100%);
  scale:0;
width: 0%;
}
100%{
  transform: translateX(0%);
  scale:1;
width:100%;
}
`
export const navItemsShowOut = keyframes`
 0%{
  transform: translateX(0%);
  scale:1;
width:100%;
}
100%{
  transform: translateX(-100%);
  scale:0;
width:0%;
}
`
export const CategoryNavSearchContainer = styled.div`
display: flex;
justify-content:end;
  align-items: center;
  gap:8px;
 svg{
 cursor: pointer;
&.search-open{
animation: ${openSearch} 0.5s ease-in-out forwards;
}
&.search-close{
  animation: ${closeSearch} 0.5s ease-in-out forwards;
}
}
svg:hover {
scale:1.1;
}
`
export const CategoryNavSearchInputContainer = styled.div`
position: relative;
  width: 180px;
  /* margin: 12px 5px; */
  --accent-color: #a3e583;

    border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  max-height: 36px;
  background-color: #252525;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #e8e8e8;
  font-size: 14px;
  font-weight: 500;
   width: 100%;
  border-left: none;
  border-bottom: none;
  border-right: none;
  &:before{
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  }
  &:before,
&:after {
  content: "";
  left: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  bottom: -1px;
  z-index: 4;
  width: 100%;
}
&:focus-within:before {
  border-bottom: 1px solid var(--accent-color);
  transform: scaleX(1);
}
&:focus-within:after {
  border-bottom: 2px solid var(--accent-color);
  transform: scaleX(1);
}
&:after {
  content: "";
  transform: scaleX(0);
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  will-change: transform;
  border-bottom: 2px solid var(--accent-color);
  border-bottom-color: var(--accent-color);
}
&:focus-within input {
  background-color: #353535;
}
&:focus-within input::placeholder {
  opacity: 0;
}
&.input-search-close{
  animation:${navItemsShowOut} 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) forwards;
}
&.input-search-open{
 animation:${navItemsShowIn} 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) forwards;
}
input{
    border-radius: 5px 5px 0px 0px;
  box-shadow: 0px 2px 5px rgb(35 35 35 / 30%);
  max-height: 36px;
  background-color: #252525;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 200ms;
  transition-property: background-color;
  color: #e8e8e8;
  font-size: 14px;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  border-left: none;
  border-bottom: none;
  border-right: none;
&::placeholder {
  transition: opacity 250ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  opacity: 1;
  user-select: none;
  color: rgba(255, 255, 255, 0.582);
}
&:focus,
&:active {
  outline: none;
  background-color: #353535;
}
}`
export const NavItemsContainer = styled.div`
  margin-right:12px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  overflow: hidden;
  transform: translateX(0%);
  scale:1;
width:100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
   &::-webkit-scrollbar {
    display: none;
  }
&.nav-items-close{
  animation:${navItemsShowOut} 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) forwards;
}
&.nav-items-open{
 animation:${navItemsShowIn} 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) forwards;
}
`
export const NavItems = styled.div`
  display: inline-flex;
  gap: 24px;
  width: fit-content;
  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.bgApp};
    cursor: pointer;
    white-space: nowrap;
    transition: color 0.3s ease-in-out;
    padding: 0;
    font-size: 16px;
    &.active {
      color: ${props => props.theme.thirdText};
      font-weight: 500;
    }
  }
`;
export const NavIndicator = styled.div`
  position: relative;
  background-color:${props => props.theme.secondaryText};
  height: 2px;
  margin-top: 12px;
  max-width: 100%;
  div {
    position: absolute;
    background-color: ${props => props.theme.thirdText};
    height: 2px;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
`;
export const Paragraph = styled.p`
  display: none;

  @media (min-width:925px) {
    display: block;
  }
`;
export const ParagraphIsMobile = styled.p`
  display: block;

  @media (min-width:925px) {
    display: none;
  }
`;
//* SectionsMenu.jsx
export const MenuSections = styled.section`
   padding: 24px 16px;
 @media ${device.tablet} {
    padding: 24px 32px;
  }
`
//* Featured.jsx
export const FeaturedSection = styled.section`
margin-bottom: 32px;
display: flex;
flex-direction: column;
  gap: 16px;


  h2{
    font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.primaryText};
  text-transform:uppercase;
   }

`
//* ProductsMenu.jsx
export const MenuCategory = styled.div` margin-bottom: 40px;
  scroll-margin-top: 80px;
  h2{
    font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.primaryText};
  margin-bottom: 16px;
  text-transform:uppercase;
  }
  `
export const MenuItems = styled.div`
 display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
    @media ${device.tablet} {
     grid-template-columns: 1fr 1fr;
 }

 `
