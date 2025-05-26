import { useMemo, useRef } from "react";
import Header from "../components/home/header/Header";
import Footer from "../components/home/Footer";
import useNavBar from "../hooks/useNavBar";
import { HeroSection } from "../components/home/main/HeroSection";
import { HomePage } from "../ui/styles/home-style";
import { FeaturedBurgers } from "../components/home/main/FeaturedBurgers";
import { AboutSection } from "../components/home/main/AboutSection";
import { LocationSection } from "../components/home/main/LocationSection";
import Loader from "../components/loader/Loader";

function Home({ products, error, isLoading, cart, cartButtonTypes, handleClearCart }) {
  const menuRef = useRef(null);
  const nosotrosRef = useRef(null);
  const ubicacionRef = useRef(null);
  const contactoRef = useRef(null);

  const sectionsRefMap = useMemo(
    () => [
      { name: "menu", ref: menuRef },
      { name: "nosotros", ref: nosotrosRef },
      { name: "ubicacion", ref: ubicacionRef },
      { name: "contacto", ref: contactoRef },
    ],
    []
  );

  const navButtonsMap = [
    { name: "menu", label: "Menú" },
    { name: "nosotros", label: "Nosotros" },
    { name: "ubicacion", label: "Ubicación" },
    { name: "contacto", label: "Contacto" },
  ];

  const { activeCategory, navRef, navButtonsRefs, scrollToCategory } = useNavBar(sectionsRefMap);

  return (
    <HomePage>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            {...{
              navRef,
              navButtonsMap,
              navButtonsRefs,
              scrollToCategory,
              activeCategory,
              cart,
              cartButtonTypes,
              handleClearCart,
            }}
          />
          <main>
            <HeroSection />
            <FeaturedBurgers {...{ menuRef, products, error ,cartButtonTypes}} />
            <AboutSection {...{ nosotrosRef }} />
            <LocationSection {...{ ubicacionRef }} />
          </main>
          <Footer {...{ contactoRef, scrollToCategory }} />
        </>
      )}
    </HomePage>
  );
}

export default Home;
