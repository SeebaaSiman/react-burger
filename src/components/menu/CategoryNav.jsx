import { mappingCategories } from "../../services/db/mapping-categories";
import { menuCategories } from "../../services/db/menu-data";
import { CategoryNavStyle, NavIndicator, NavItems, Paragraph, ParagraphIsMobile } from "../../ui/styles/menu-style";

export const CategoryNav = ({ navRef, scrollToCategory, navButtonsRefs, activeCategory, indicatorRef, navWidth }) => {
  return (
    <CategoryNavStyle>
      <NavItems ref={navRef}>
        {menuCategories.map((category) => (
          <button
            key={category.id}
            ref={(el) => (navButtonsRefs.current[category.id] = el)}
            className={`${activeCategory === category.id ? "active" : ""}`}
            data-category={category.id}
            onClick={() => scrollToCategory(category.id)}
          >
            <Paragraph>{category.name}</Paragraph>
            <ParagraphIsMobile>{mappingCategories[category.name]}</ParagraphIsMobile>
          </button>
        ))}
      </NavItems>
      <NavIndicator style={{ width: `${navWidth}px` }}>
        <div ref={indicatorRef}></div>
      </NavIndicator>
    </CategoryNavStyle>
  );
};
