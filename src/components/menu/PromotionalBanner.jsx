import {
  BannerOverlay,
  BannerText,
  DiscountText,
  PromoSubtitle,
  PromotionalBannerWrapper,
  PromoTitle,
  RestaurantLogo,
} from "../../ui/styles/menu-style";
import logo from "../../assets/logo-transparente.png/";
import promo from "../../assets/promo-banner.mp4";
export const PromotionalBanner = () => {
  return (
    <PromotionalBannerWrapper>
      <BannerOverlay>
        <video autoPlay loop muted lazyload>
          <source src={promo} type='video/mp4' />
        </video>

        <BannerText>
          <DiscountText>20%</DiscountText>
          <PromoTitle>¡Come rico y ahorra!</PromoTitle>
          <PromoSubtitle>Reintegro pago con QR</PromoSubtitle>
        </BannerText>
      </BannerOverlay>

      <RestaurantLogo>
        <div>
          <img src={logo} alt='logo burger' />
        </div>
      </RestaurantLogo>
    </PromotionalBannerWrapper>
  );
};
