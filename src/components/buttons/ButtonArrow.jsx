import { ButtonArrowStyle } from "../../ui/styles/Buttons-style";

export const ButtonArrow = ({ text = "text button", fn }) => {
  return (
    <ButtonArrowStyle text={text} onClick={fn}>
      <p>{text}</p>
      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='4'>
        <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
      </svg>
    </ButtonArrowStyle>
  );
};
