import { useMenuContext } from "../../store/context/MenuProvider";
import { FeaturedSection, MenuItems } from "../../ui/styles/menu-style";
import { LoaderMenu } from "../loader/LoaderMenu";
import { CardProduct } from "./CardProduct";

export const Featured = () => {
  const { products, error } = useMenuContext();

  if (error) return <p>Error al cargar los productos destacados</p>;
  if (!products) return <LoaderMenu />;

   const featuredProducts = products?.flatMap((category) => category.items).filter((item) => item.name.includes("⭐"));
  return (
    <FeaturedSection>
      <h2>Nuestros destacados</h2>
      <MenuItems>
        {featuredProducts.map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </MenuItems>
    </FeaturedSection>
  );
};
