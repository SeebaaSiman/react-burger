import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const optionsRef = useRef(options); // Usamos useRef para evitar recrear las opciones
  const [ready, setReady] = useState(false);

  // Comprobamos si IntersectionObserver está disponible, y cargamos el polyfill si es necesario
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") {
      setReady(true);
    } else {
      import("intersection-observer").then(() => setReady(true));
    }
  }, []);

  // Observador solo se crea cuando `ready` es true y la referencia es válida
  useEffect(() => {
    if (!ready || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, optionsRef.current); // Usamos las opciones de useRef para evitar recrear el observer

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ready, ref]); // El observer se recrea solo cuando es necesario

  return isIntersecting;
};

export default useIntersectionObserver;

 