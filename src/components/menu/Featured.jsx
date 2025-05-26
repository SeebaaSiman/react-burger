import { FeaturedSection, MenuItems } from "../../ui/styles/menu-style";
import { LoaderMenu } from "../loader/LoaderMenu";
import { CardProduct } from "./CardProduct";

export const Featured = ({ products, error, cartButtonTypes }) => {
  if (error) return <p>Error al cargar los productos destacados</p>;
  if (!products) return <LoaderMenu />;

  // Recorre todas las categorías y junta los items con "⭐" en el nombre
  const featuredProducts = products?.flatMap((category) => category.items).filter((item) => item.name.includes("⭐"));
  return (
    <FeaturedSection>
      <h2>Nuestros destacados</h2>
      <MenuItems>
        {featuredProducts.map((item) => (
          <CardProduct item={item} cartButtonTypes={cartButtonTypes} />
        ))}
      </MenuItems>
    </FeaturedSection>
  );
};
