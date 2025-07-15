import { useNavigate } from "react-router-dom";
import { ButtonArrow } from "../../buttons/ButtonArrow";
import BurgerCard from "./BurgerCard";
import { LoaderMenu } from "../../loader/LoaderMenu";
import {
  FeaturedBurgersButton,
  FeaturedBurgersContainer,
  FeaturedBurgersGrid,
  FeaturedHeader,
} from "../../../ui/styles/home-style";
import { useMenuContext } from "../../../store/context/MenuProvider";

export const FeaturedBurgers = ({ menuRef }) => {
  const { products, error } = useMenuContext();
  const navigate = useNavigate();
   const featuredIds = ["simple-1", "simple-2", "simple-3"];
  const burgersSimples = products?.find((cat) => cat.id === "burgers-simples");
  const featuredBurgers = burgersSimples ? burgersSimples.items.filter((item) => featuredIds.includes(item.id)) : [];

  const handleMoreMenu = () => {
    navigate("/menu");
  };
  return (
    <FeaturedBurgersContainer ref={menuRef}>
      <FeaturedHeader>
        <h2>Nuestras Hamburguesas Destacadas</h2>
        <p>Descubre nuestras creaciones más populares, con ingredientes frescos y sabores únicos.</p>
      </FeaturedHeader>
      {error && <p>Error al cargar el menú. {error}</p>}
      {!products && <LoaderMenu />}
      {!error && products && (
        <FeaturedBurgersGrid>
          {featuredBurgers.map((burger, index) => (
            <BurgerCard key={burger.id} burger={burger} index={index} />
          ))}
        </FeaturedBurgersGrid>
      )}

      <FeaturedBurgersButton>
        <ButtonArrow text='Ver menú completo' fn={handleMoreMenu} />
      </FeaturedBurgersButton>
    </FeaturedBurgersContainer>
  );
};
