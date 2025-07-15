import { useEffect, useState, useRef } from "react";

const useIntersectionObserver = (ref, options = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const optionsRef = useRef(options);
  const [ready, setReady] = useState(false);

  // se carga el polyfill si es necesario
  useEffect(() => {
    if (typeof IntersectionObserver !== "undefined") {
      setReady(true);
    } else {
      import("intersection-observer").then(() => setReady(true));
    }
  }, []);

   useEffect(() => {
    if (!ready || !ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, optionsRef.current);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ready, ref]);  

  return isIntersecting;
};

export default useIntersectionObserver;

