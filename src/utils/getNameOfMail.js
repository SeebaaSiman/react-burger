export const getNameOfMail = (email) => {
 if (!email) return;
 const atIndex = email.indexOf("@");
 return atIndex !== -1 ? email.substring(0, atIndex) : email;
};