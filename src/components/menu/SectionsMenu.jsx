import { MenuSections } from "../../ui/styles/menu-style";
import { Featured } from "./Featured";
import { ProductsMenu } from "./ProductsMenu";

export const SectionsMenu = ({ sectionRefs, products, error, cartButtonTypes }) => {
  return (
    <MenuSections>
      <Featured {...{ products, error, cartButtonTypes }} />

      <ProductsMenu sectionRefs={sectionRefs} products={products} error={error} cartButtonTypes={cartButtonTypes} />
    </MenuSections>
  );
};
