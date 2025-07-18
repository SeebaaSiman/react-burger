import { mappingCategories } from "../../services/db/mapping-categories";
import { menuCategories } from "../../services/db/menu-data";
import {
  NavItemsContainer,
  CategoryNavStyle,
  NavIndicator,
  NavItems,
  Paragraph,
  ParagraphIsMobile,
  CategoryNavSearchContainer,
  CategoryNavSearchInputContainer,
} from "../../ui/styles/menu-style";

export const CategoryNav = ({
  navRef,
  scrollToCategory,
  navButtonsRefs,
  activeCategory,
  indicatorRef,
  navWidth,
  handleSearch,
  search,
  setSearchOpen,
  searchOpen,
  setSearch,
}) => {
  const onCloseSearch = () => {
    setSearchOpen(!searchOpen);
    if (searchOpen) {
      setSearch("");
    }
  };
  return (
    <CategoryNavStyle>
      <CategoryNavSearchContainer>
        <svg
          fill='#F5F5F5'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='25px'
          height='25px'
          viewBox='0 0 72 72'
          onClick={onCloseSearch}
          className={`${searchOpen ? "search-open" : "search-close"}`}
        >
          <g>
            <path
              d='M28.131,10.632c-6.262,0-12.141,3.348-15.342,8.738c-0.282,0.474-0.126,1.089,0.349,1.37
		c0.16,0.096,0.336,0.141,0.51,0.141c0.342,0,0.674-0.174,0.861-0.489c2.843-4.786,8.062-7.76,13.622-7.76c0.553,0,1-0.447,1-1
		C29.131,11.079,28.684,10.632,28.131,10.632z'
            />
            <path
              d='M11.967,23.646c-0.537-0.124-1.075,0.208-1.201,0.746c-0.299,1.276-0.468,2.067-0.468,3.487c0,0.553,0.448,1,1,1
		c0.553,0,1-0.447,1-1c0-1.205,0.135-1.834,0.415-3.032C12.839,24.309,12.505,23.772,11.967,23.646z'
            />
            <path
              d='M66.613,57.793L50.471,41.652c-0.393-0.393-0.788-0.672-1.17-0.877c2.113-3.62,3.33-7.825,3.33-12.311
		c0-13.51-10.99-24.5-24.5-24.5c-13.509,0-24.5,10.99-24.5,24.5s10.991,24.499,24.5,24.499c4.81,0,9.296-1.398,13.084-3.801
		c0.205,0.339,0.462,0.666,0.77,0.974l16.142,16.143c1.136,1.133,2.64,1.756,4.244,1.756c1.603,0,3.108-0.623,4.243-1.756
		c1.133-1.133,1.756-2.641,1.756-4.242C68.369,60.434,67.746,58.928,66.613,57.793z M7.631,28.465c0-11.304,9.196-20.5,20.5-20.5
		c11.305,0,20.5,9.196,20.5,20.5c0,11.305-9.197,20.499-20.5,20.499C16.827,48.964,7.631,39.77,7.631,28.465z M63.784,63.451
		c-0.757,0.754-2.074,0.754-2.83,0L44.813,47.309c-0.14-0.139-0.192-0.232-0.199-0.232c0.003-0.043,0.058-0.455,1.201-1.596
		c1.14-1.143,1.552-1.195,1.565-1.203c0.026,0.008,0.119,0.06,0.263,0.203l16.14,16.141c0.379,0.379,0.586,0.881,0.586,1.416
		C64.368,62.57,64.161,63.072,63.784,63.451z'
            />
          </g>
        </svg>
        <CategoryNavSearchInputContainer className={`${searchOpen ? "input-search-open" : "input-search-close"}`}>
          <input
            type='text'
            placeholder='Buscar producto'
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </CategoryNavSearchInputContainer>
      </CategoryNavSearchContainer>
      <NavItemsContainer className={`${searchOpen ? "nav-items-close" : "nav-items-open"}`}>
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
      </NavItemsContainer>
    </CategoryNavStyle>
  );
};
