import { useLocation, useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { ButtonArrow } from "../buttons/ButtonArrow";
import { ButtonCart } from "../buttons/ButtonCart";
import {
  CardProductContainer,
  CardProductHeader,
  CardProductContent,
  CardProductPrice,
  ItemDetailsButton,
} from "../../ui/styles/product-card-style";

export const CardProduct = ({ item }) => {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const handleProductDetails = (item) => {
    if (location.includes("admin")) {
      navigate(`/admin/admin-products/${item.id}`);
    } else navigate(`/product/${item.id}`);
  };

  return (
    <CardProductContainer>
      <CardProductHeader>
        <h3>{item.name}</h3>
        <img
          className='card-product-image'
          src={item.image || "/placeholder.svg"}
          alt={item.name}
          width={90}
          height={90}
        />
      </CardProductHeader>
      <CardProductContent>{item.description}</CardProductContent>
      <CardProductPrice>
        <div className='item-detail-price'>
          {item.originalPrice && <span>$ {formatPrice(item.originalPrice)}</span>}
          <p>$ {formatPrice(item.price)}</p>
        </div>
        {location.includes("admin") ? (
          <ButtonCart type={"admin"} item={item} />
        ) : (
          <ButtonCart type={"add"} item={item} />
        )}
      </CardProductPrice>
      <ItemDetailsButton>
        <ButtonArrow text='Más detalles' fn={() => handleProductDetails(item)} />
      </ItemDetailsButton>
    </CardProductContainer>
  );
};
