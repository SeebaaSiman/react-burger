import { BtnCart } from "../../ui/styles/Buttons-style";

export const ButtonCart = ({ cartButtonTypes, type, item }) => {
  const btn = cartButtonTypes[type] || cartButtonTypes.add;

  return (
    <BtnCart onClick={() => btn.fn(item)}>
      {!btn.text === "Restar" || (!btn.text === "Sumar" && <p>{btn.text}</p>)}
      <img src={btn.icon} alt={btn.alt} />
    </BtnCart>
  );
};
