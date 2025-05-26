import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { ButtonArrow } from "../buttons/ButtonArrow";
import { ButtonCart } from "../buttons/ButtonCart";
import {
  CardProductContainer,
  CardProductHeader,
  CardProductContent,
  CardProductPrice,
  ItemDetailsButton,
} from "../../ui/styles/menu-style";
export const CardProduct = ({ item, cartButtonTypes }) => {
  const navigate = useNavigate();
  const handleProductDetails = (item) => {
    navigate(`/product/${item.id}`);
  };
  return (
    <CardProductContainer key={item.id}>
      <CardProductHeader>
        <h3>{item.name}</h3>
        <img src={item.image || "/placeholder.svg"} alt={item.name} width={90} height={90} />
      </CardProductHeader>
      <CardProductContent>{item.description}</CardProductContent>
      <CardProductPrice>
        <div className='item-detail-price'>
          {item.originalPrice && <span>$ {formatPrice(item.originalPrice)}</span>}
          <p>$ {formatPrice(item.price)}</p>
        </div>
        <ButtonCart cartButtonTypes={cartButtonTypes} type={"add"} item={item} />
      </CardProductPrice>
      <ItemDetailsButton>
        <ButtonArrow text='Más detalles' fn={() => handleProductDetails(item)} />
      </ItemDetailsButton>
    </CardProductContainer>
  );
};
