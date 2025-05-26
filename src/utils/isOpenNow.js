export const isOpenNow = () => {
 const now = new Date();
 const hour = now.getHours();
 const minutes = now.getMinutes();

 const totalMinutes = hour * 60 + minutes;
 const open = 18 * 60;
 const close = 23 * 60;

 return totalMinutes >= open && totalMinutes < close;
};
