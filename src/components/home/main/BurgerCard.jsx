import { useNavigate } from "react-router-dom";
import { ButtonArrow } from "../../buttons/ButtonArrow";

import { ButtonCart } from "../../buttons/ButtonCart";
import {
  BurgerCardContainer,
  BurgerCardContent,
  BurgerFooter,
  BurgerHeader,
  BurgerImage,
} from "../../../ui/styles/Product-card-style";

function BurgerCard({ burger, index }) {
  function burgerRating() {
    if (index === 0) {
      return 4.9;
    } else if (index === 1) {
      return 4.8;
    } else if (index === 2) {
      return 4.7;
    } else {
      return 4.6;
    }
  }
  const navigate = useNavigate();
  const handleProductDetails = (item) => {
    navigate(`/product/${item.id}`);
  };
  return (
    <BurgerCardContainer>
      <BurgerImage>
        <img src={burger.image} alt={burger.name} />
      </BurgerImage>
      <BurgerCardContent>
        <BurgerHeader>
          <h3>{burger.name}</h3>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='#7A9A01' stroke='#7A9A01'>
              <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'></polygon>
            </svg>
            <span>{burgerRating()}</span>
          </div>
        </BurgerHeader>
        <p>{burger.description}</p>

        <BurgerFooter>
          <div>${burger.price.toLocaleString("es-AR")}</div>

          <ButtonArrow text='Ver más' fn={() => handleProductDetails(burger)} />
          <ButtonCart type={"add"} item={burger} />
        </BurgerFooter>
      </BurgerCardContent>
    </BurgerCardContainer>
  );
}

export default BurgerCard;
