import styled from "styled-components";
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
padding:6px;
  position:fixed;
  top:2%;
  right: 6%;
  z-index: 9999;

    `
//*SidebarMenu.jsx
export const SideBar = styled.aside`
  background-color: #1A1A1A;
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap:24px;
color:#A4C639;

 @media ${device.tablet} {
    width: 300px;
    position: fixed;
    height: 100vh;
    overflow-y: auto;
  justify-content: space-evenly;
}
h1{
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
   color:#FF6200;

  }
   p{ margin-left: 44px;
  font-size: 14px;
  color: #F5F5F5;
  }

  `
export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  div{
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #4A4A4A;
  display: flex;
  align-items: center;
  justify-content: center;
  }
  span{
     font-weight: 500;
  }
  `
export const SidebarButton = styled.div`
 display: flex;
  gap: 8px;
  margin-left: 44px;
  flex-wrap: wrap;
  button{
     width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #4A4A4A;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  }`
export const HourList = styled.div`
  margin-left: 44px;
div{
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 4px;
  color: #F5F5F5;
  &.highlight {
  color: #A4C639;
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
 background-color: #4A90E2;
 border-top-left-radius: 16px;
 border-top-right-radius: 16px;
 z-index: 800;
  color: #F5F5F5;
  box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.3);
`
//* PromotionalBanner.jsx

export const PromotionalBannerWrapper = styled.section`
  position: relative;
  height: 256px;
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
  z-index: 2;
  filter:brightness(80%);
  object-fit: cover;
  }
    @media ${device.tablet} {
       border-bottom-left-radius: 16px;

    }
`;
export const BannerText = styled.div`
  text-align: center;
  color: #4A90E2;
  z-index: 200;
`;
export const DiscountText = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: #FF6200;
  text-shadow: 1px 1px #1A1A1A;
`;
export const PromoTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px #1A1A1A;
`;
export const PromoSubtitle = styled.div`
  margin-top: 8px;
  text-shadow: 1px 1px #1A1A1A;
`;
export const RestaurantLogo = styled.div`
  position: absolute;
  left: 40px;
  bottom: -40px;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #FF6200;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);

  z-index: 200;
  padding: 5px;
  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #F5F5F5;
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
  align-items: center;

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
  background-color: #4A4A4A;
      color: #1A1A1A;

  cursor: pointer;

  &:first-child {
    border-top-left-radius: 9999px;
    border-bottom-left-radius: 9999px;
  }

  &:last-child {
    border-top-right-radius: 9999px;
    border-bottom-right-radius: 9999px;
  }

  &.active {
    background-color: #A4C639;
    color: #F5F5F5;
  }

  &.active.takeaway {
    background-color: #FF6200;
    color: #F5F5F5;
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
  color: #4A4A4A;
`;
export const DeliveryInfoLink = styled.div`
  font-size: 14px;
  color: #4A90E2;
  cursor: pointer;
`;

//* CategoryNav.jsx

export const CategoryNavStyle = styled.nav`
  position: sticky;
  top: 0;
  height: 4rem;
  background-color: #1A1A1A;
  color: #F5F5F5;
  z-index: 10;
  margin-top: 16px;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Ocultar scrollbar pero mantener funcionalidad */
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${device.tablet} {
    padding: 12px 32px;
     border-bottom-left-radius: 16px;
     border-top-left-radius: 16px;
  }
`;
export const NavItems = styled.div`
  display: inline-flex;
  gap: 24px;
  width: fit-content;
  button {
    background: none;
    border: none;
    color: #F5F5F5;
    cursor: pointer;
    white-space: nowrap;
    transition: color 0.3s;
    padding: 0;
    font-size: 16px;
    &.active {
      color: #FF6200;
      font-weight: 500;
    }
  }
`;
export const NavIndicator = styled.div`
  position: relative;
  background-color: #4A4A4A;
  height: 2px;
  margin-top: 12px;
  max-width: 100%;
  div {
    position: absolute;
    background-color: #A4C639;
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
  color: #4A90E2;
  text-transform:uppercase;
   }

`
//* ProductsMenu.jsx
export const MenuCategory = styled.div` margin-bottom: 40px;
  scroll-margin-top: 80px; /* Ayuda con el scroll para que el título sea visible */
  h2{font-size: 24px;
  font-weight: bold;
  color: #4A90E2;
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
 }`
export const CardProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #f5f5f5;
  border-top: 1px solid #a4c639;
  border-left: 1px solid #a4c639;
  border-right: 1px solid #a4c639;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);

  &:hover {
    img {
      transform: scale(1.05);
    }
  }
`;
export const CardProductHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  h3 {
    padding-left: 8px;
    font-weight: bold;
    font-size: 20px;
    color: #ff6200;
   }

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
  }
`;
export const CardProductContent = styled.p`
  font-size: 14px;
  color: #4a4a4a;
  padding: 16px;
`;
export const CardProductPrice = styled.div`
  padding: 0 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  .item-detail-price {
    width: auto;
    display: flex;
    justify-content:center;
    align-items: center;
    gap:8px;
span{
  scale:0.95;
}
  }
  span {
    color: #4a4a4a;
    text-decoration: line-through;
    font-size: 14px;
  }
  p {
    font-size: 1.125rem;
    font-weight: 700;
    color: #a4c639;
  }
`;

export const ItemDetailsButton = styled.div`
  padding: 0 0 12px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
  }
`;
