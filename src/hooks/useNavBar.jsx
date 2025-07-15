import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import useIntersectionObserver from "./useIntersectionObserver ";

export const useNavBar = (sectionsRefMap) => {
  const initialCategory = sectionsRefMap[0]?.name || null;
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [navWidth, setNavWidth] = useState(0);
  const [manualScroll, setManualScroll] = useState(false);

  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const navButtonsRefs = useRef({});

  const stableSections = useMemo(() => sectionsRefMap, []);


  const visibilities = stableSections.map(({ ref }) => useIntersectionObserver(ref, { threshold: 0.2 }));
  
  const visibilityMap = stableSections.reduce((acc, { name }, idx) => {
    acc[name] = visibilities[idx];
    return acc;
  }, {});
  useEffect(() => {
    if (manualScroll || !visibilityMap) return;

    for (const { name } of stableSections) {
      if (visibilityMap[name]) {
        if (activeCategory !== name) {
          setActiveCategory(name);
        }
        break;
      }
    }
  }, [activeCategory, manualScroll, stableSections, visibilityMap]);

  const updateIndicator = useCallback((categoryId) => {
    requestAnimationFrame(() => {
      if (navRef.current && indicatorRef.current) {
        const activeButton = navButtonsRefs.current[categoryId];
        if (activeButton) {
          const navRect = navRef.current.getBoundingClientRect();
          const buttonRect = activeButton.getBoundingClientRect();
          const left = buttonRect.left - navRect.left + navRef.current.scrollLeft;
          const width = buttonRect.width;
          indicatorRef.current.style.left = `${left}px`;
          indicatorRef.current.style.width = `${width}px`;
        }
      }
    });
  }, []);

  const scrollToCategory = useCallback(
    (categoryName) => {
      const sectionInfo = sectionsRefMap.find((item) => item.name === categoryName);
      if (sectionInfo?.ref?.current) {
        setManualScroll(true);
        sectionInfo.ref.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setActiveCategory(categoryName);
        setTimeout(() => setManualScroll(false), 800);
      }
    },
    [sectionsRefMap]
  );

  useEffect(() => {
    const update = () => {
      updateIndicator(activeCategory);
      if (navRef.current) {
        setNavWidth(navRef.current.offsetWidth);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [activeCategory, updateIndicator]);
  return { activeCategory, navRef, indicatorRef, navButtonsRefs, scrollToCategory, navWidth };
};

export default useNavBar;
