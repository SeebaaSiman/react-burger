import { useMemo, useRef } from "react";
import useNavBar from "../../hooks/useNavBar";
import { MenuContentWrapper } from "../../ui/styles/menu-style";
import { CategoryNav } from "./CategoryNav";
import { DeliveryOptions } from "./DeliveryOptions";
import { PromotionalBanner } from "./PromotionalBanner";
import { SectionsMenu } from "./SectionsMenu";

export const MenuContent = ({ products, error,  cartButtonTypes }) => {
  // Refs de secciones
  const promoRef = useRef(null);
  const burgersSimplesRef = useRef(null);
  const burgersDobleRef = useRef(null);
  const hotdogsRef = useRef(null);
  const bebidasRef = useRef(null);

  const sectionsRefMap = useMemo(
    () => [
      { name: "promo", ref: promoRef },
      { name: "burgers-simples", ref: burgersSimplesRef },
      { name: "burgers-dobles", ref: burgersDobleRef },
      { name: "otros", ref: hotdogsRef },
      { name: "bebidas", ref: bebidasRef },
    ],
    []
  );

  const { activeCategory, navRef, indicatorRef, navButtonsRefs, scrollToCategory, navWidth } =
    useNavBar(sectionsRefMap);

  return (
    <MenuContentWrapper>
      <PromotionalBanner />
      <DeliveryOptions />
      <CategoryNav {...{ navRef, scrollToCategory, navButtonsRefs, activeCategory, indicatorRef, navWidth }} />
      <SectionsMenu
        sectionRefs={sectionsRefMap}
        products={products}
        error={error}
        cartButtonTypes={cartButtonTypes}
      />
    </MenuContentWrapper>
  );
};
