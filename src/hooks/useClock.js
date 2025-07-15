import { useEffect, useState } from "react";


export function useClock() {
 const [time, setTime] = useState(() => {
  const date = new Date();
  return {
   h: date.getHours(),
   m: date.getMinutes(),
   s: date.getSeconds(),
  };
 });

 useEffect(() => {
  const interval = setInterval(() => {
   const date = new Date();
   setTime({
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
   });
  }, 1000);
  return () => clearInterval(interval);
 }, []);

 const h = time.h < 10 ? "0" + time.h : time.h;
 const m = time.m < 10 ? "0" + time.m : time.m;
 const s = time.s < 10 ? "0" + time.s : time.s;
 const text = "hs.";
 const digitaltime = `${h}:${m}:${s} ${text}`;

 return digitaltime;
}