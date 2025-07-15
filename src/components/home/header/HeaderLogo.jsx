import { HeaderLogoCartContainer, HeaderLogoContainer } from "../../../ui/styles/home-style";
import { CartNav } from "../../cart/CartNav";

export const HeaderLogo = () => {
  return (
    <HeaderLogoContainer>
      <p>R</p>
      eact
      <p>B</p>
      urger
      <HeaderLogoCartContainer>
        <CartNav />
      </HeaderLogoCartContainer>
    </HeaderLogoContainer>
  );
};
