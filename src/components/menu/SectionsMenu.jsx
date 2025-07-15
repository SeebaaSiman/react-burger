import { MenuItems, MenuSections } from "../../ui/styles/menu-style";
import { CardProduct } from "./CardProduct";
import { Featured } from "./Featured";
import { ProductsMenu } from "./ProductsMenu";

export const SectionsMenu = ({ sectionRefs, filteredItems, searchOpen }) => {
  if (filteredItems && filteredItems.length > 0) {
    return (
      <MenuSections>
        <MenuItems>
          {filteredItems.map((item) => (
            <CardProduct item={item} key={item.id} />
          ))}
        </MenuItems>
      </MenuSections>
    );
  }
  if (!searchOpen) {
    return (
      <MenuSections>
        <Featured />
        <ProductsMenu sectionRefs={sectionRefs} />
      </MenuSections>
    );
  }
};
