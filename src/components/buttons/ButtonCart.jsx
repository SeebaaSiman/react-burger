import { useCartType } from "../../hooks/useCartType";
import { BtnCart } from "../../ui/styles/Buttons-style";

export const ButtonCart = ({ type, item }) => {
  const { cartButtonTypes } = useCartType();

  const btn = cartButtonTypes[type] || cartButtonTypes.add;

  return (
    <BtnCart onClick={() => btn.fn(item)}>
      {btn.text === "Restar" || btn.text === "Sumar" ? null : <p>{btn.text}</p>}
      <img src={btn.icon} alt={btn.alt} />
    </BtnCart>
  );
};
