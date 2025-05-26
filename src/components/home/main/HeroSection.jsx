import { Link } from "react-router-dom";
import { HeroContent, HeroOverlay, HeroSectionContainer } from "../../../ui/styles/home-style";
import { ButtonAnatomy } from "../../buttons/ButtonAnatomy";
import iconSofa from "../../../assets/icons/sofa.svg";
import iconStore from "../../../assets/icons/store.svg";
export const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <HeroOverlay />
      <HeroContent>
        <h1>
          Hamburguesas con el sabor de la <span>programación</span>
        </h1>
        <p>Donde cada bocado es una experiencia única, como cada línea de código.</p>

        <div>
          <Link to='/menu'>
            <ButtonAnatomy text='Estoy en el Local' icon={iconStore} />
          </Link>
          <Link to='/menu'>
            <ButtonAnatomy text='  Pedir desde casa' icon={iconSofa} />
          </Link>
        </div>
      </HeroContent>
    </HeroSectionContainer>
  );
};
