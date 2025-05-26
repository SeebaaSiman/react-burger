export const isToday = (dayName) => {
 const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
 ];
 const todayIndex = new Date().getDay(); // Los días de la semana están en valor absoluto. 0 (domingo) a 6 (sábado)
 return dias[todayIndex] === dayName;
};
