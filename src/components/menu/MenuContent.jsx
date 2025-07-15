import { useMemo, useRef, useState } from "react";
import useNavBar from "../../hooks/useNavBar";
import { MenuContentWrapper } from "../../ui/styles/menu-style";
import { CategoryNav } from "./CategoryNav";
import { DeliveryOptions } from "./DeliveryOptions";
import { PromotionalBanner } from "./PromotionalBanner";
import { SectionsMenu } from "./SectionsMenu";
import { useFiltered } from "../../hooks/useFiltered";

export const MenuContent = () => {
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
  const { handleSearch, search, filteredItems,setSearch } = useFiltered();
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <MenuContentWrapper>
      <PromotionalBanner />
      <DeliveryOptions />

      <CategoryNav
        {...{
          navRef,
          scrollToCategory,
          handleSearch,
          search,
          navButtonsRefs,
          activeCategory,
          indicatorRef,
          navWidth,
          searchOpen,
          setSearchOpen,setSearch
        }}
      />
      <SectionsMenu sectionRefs={sectionsRefMap} filteredItems={filteredItems} searchOpen={searchOpen} />
    </MenuContentWrapper>
  );
};
