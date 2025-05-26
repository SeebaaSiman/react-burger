import { useNavigate, useParams } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import Loader from "../components/loader/Loader";
import { ButtonCart } from "../components/buttons/ButtonCart";
import { ProductArrowContainer, ProductPage } from "../ui/styles/product-detail-style";
import { ProductButtonBack } from "../ui/styles/Buttons-style";

export default function Product({ products, cartButtonTypes }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const allItems = products?.flatMap((cat) => cat.items);
  const product = allItems?.find((item) => item.id === id);
  return (
    <>
      {product ? (
        <ProductPage>
          <ProductButtonBack onClick={() => navigate(-1)}>- Volver </ProductButtonBack>
          <h1> {product?.name}</h1>
          <img src={product?.image} alt={product?.name} />
          <p>{product?.description}</p>
          <span>${formatPrice(product?.price)}</span>
          <ProductArrowContainer>
            <ButtonCart type={"add"} item={product} cartButtonTypes={cartButtonTypes} />
          </ProductArrowContainer>
        </ProductPage>
      ) : (
        <Loader />
      )}
    </>
  );
}
