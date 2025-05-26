import { MenuCategory, MenuItems } from "../../ui/styles/menu-style";
import { CardProduct } from "./CardProduct";

import { LoaderMenu } from "../loader/LoaderMenu";

export const ProductsMenu = ({ sectionRefs, products, error, cartButtonTypes }) => {
  if (error) return <p>Error al cargar los productos destacados</p>;
  if (!products) return <LoaderMenu />;
  return (
    <>
      {products.map((category) => {
        // Encontrar el objeto de referencia correspondiente por el 'name'
        const sectionRefObject = sectionRefs.find((refObject) => refObject.name === category.id);
        const sectionRef = sectionRefObject ? sectionRefObject.ref : null;

        return (
          <MenuCategory key={category.id} ref={sectionRef} id={category.id}>
            <h2>{category.name}</h2>
            <MenuItems>
              {category.items.map((item) => (
                <CardProduct item={item} cartButtonTypes={cartButtonTypes} />
              ))}
            </MenuItems>
          </MenuCategory>
        );
      })}
    </>
  );
};
