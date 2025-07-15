import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/loader/Loader";
import { useMenuContext } from "../store/context/MenuProvider";
import { ButtonCart } from "../components/buttons/ButtonCart";
import { formatPrice } from "../utils/formatPrice";
import { ProductPage, ProductPageContent } from "../ui/styles/product-detail-style";
import { ProductButtonBack } from "../ui/styles/Buttons-style";
import { useAdmin } from "../store/context/AdminContext";

export default function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const { products } = useMenuContext();
  const { mockapiProducts } = useAdmin();

  const allItems = products?.flatMap((cat) => cat.items);
  const depurProduct = allItems?.find((item) => item.id === id);
  const depurMockapiProduct = mockapiProducts?.find((item) => item.id === id);
  const product = location.includes("admin") ? depurMockapiProduct : depurProduct;

  return (
    <>
      {product ? (
        <ProductPage>
          <ProductButtonBack onClick={() => navigate(-1)}>- Volver </ProductButtonBack>
          <ProductPageContent>
            <img src={product?.image} alt={product?.name} />
            <h1> {product?.name}</h1>

            <p>{product?.description}</p>
            <div>
              <span>${formatPrice(product?.price)}</span>
              <ButtonCart type={"add"} item={product} />
            </div>
          </ProductPageContent>
        </ProductPage>
      ) : (
        <Loader />
      )}
    </>
  );
}
