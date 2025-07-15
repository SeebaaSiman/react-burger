import { Link } from "react-router-dom";
import { useCart } from "../../../store/context/CartContext";
import { HeroContent, HeroOverlay, HeroSectionContainer } from "../../../ui/styles/home-style";
import { ButtonAnatomy } from "../../buttons/ButtonAnatomy";
import iconMoto from "../../../assets/icons/motorbike.svg";
import iconStore from "../../../assets/icons/bag.svg";
import { CartActionTypes } from "../../../store/cartReducer";
import { ORDER_TYPE } from "../../../services/db/order-type";
export const HeroSection = () => {
  const { dispatch } = useCart();
  const selectUserLocation = (type) => {
    dispatch({ type: CartActionTypes.SET_TYPE_ORDER, payload: type });
  };
  return (
    <HeroSectionContainer>
      {/* <HeroOverlay /> */}
      <HeroContent>
        <h1>
          Hamburguesas con el sabor de la <span>programación</span>
        </h1>
        <p>Donde cada bocado es una experiencia única, como cada línea de código.</p>

        <div>
          <Link to='/menu' onClick={() => selectUserLocation(ORDER_TYPE.TAKEAWAY)}>
            <ButtonAnatomy text='Para llevar' icon={iconStore} />
          </Link>
          <Link to='/menu' onClick={() => selectUserLocation(ORDER_TYPE.DELIVERY)}>
            <ButtonAnatomy text='A domicilio' icon={iconMoto} />
          </Link>
        </div>
      </HeroContent>
    </HeroSectionContainer>
  );
};
