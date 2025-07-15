import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useWindowWidth } from "./useWindowWidth";
import { adminSideBarData } from "../services/db/adminSideBarData";



export const useSideBar = () => {
 const [sideActive, setSideActive] = useState(null);

 const windowWidth = useWindowWidth()

 const [navItemActive, setNavItemActive] = useState(null);

 const [overlayStyle, setOverlayStyle] = useState({});
 const overlayRef = useRef(null);

 const navigate = useNavigate();
 const location = useLocation()

 const navItemRefs = useRef({
  0: useRef(null),
  1: useRef(null),
  2: useRef(null),
  3: useRef(null),
  4: useRef(null),
 });

 const arrData = adminSideBarData();

 useEffect(() => {
  const path = location.pathname;
  const sideBarId = arrData.find(item => item.to === path);
  setNavItemActive(sideBarId?.id)
 }, [])

 //* arrow
 const handleSideActive = () => {
  if (windowWidth < 768) {
   return
  } else {
   setSideActive(!sideActive);
  }
 };

 const updateOverlayPosition = (index) => {
  if (index !== null && navItemRefs.current[index]) {
   const { offsetTop, offsetHeight, offsetLeft, offsetWidth } = navItemRefs.current[index].current;
   setOverlayStyle({
    top: offsetTop,
    height: offsetHeight,
    left: offsetLeft,
    width: offsetWidth,
   });
  }
 };
 const handleNavigation = (id, to) => {
  setNavItemActive(id);
  updateOverlayPosition(id);
  navigate(to);
 };
 useEffect(() => {
  updateOverlayPosition(navItemActive);
 }, [navItemActive, windowWidth, sideActive]);


 useEffect(() => {
  if (navItemActive !== null) {
   const ref = navItemRefs.current[navItemActive];
   if (ref && ref.current) {
    const { offsetTop, offsetHeight, offsetLeft, offsetWidth } = ref.current;
    setOverlayStyle({
     top: offsetTop,
     height: offsetHeight,
     left: offsetLeft,
     width: offsetWidth,
    });
   }
  }
 }, [navItemActive, navItemRefs]);
 useEffect(() => {
  if (windowWidth < 768) {
   setSideActive(null)
  }
 }, [windowWidth])

 return { sideActive, handleSideActive, overlayStyle, overlayRef, handleNavigation, navItemActive, navItemRefs }
}

