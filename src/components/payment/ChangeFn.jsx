import styled from "styled-components";

export const ChangeFn = ({ fn }) => {
   return (
    <ChangeFnStyle onClick={fn}>
      <svg width='20px' height='20px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M16.8 2H14.2C11 2 9 4 9 7.2V11.25H13.44L11.37 9.18C11.22 9.03 11.15 8.84 11.15 8.65C11.15 8.46 11.22 8.27 11.37 8.12C11.66 7.83 12.14 7.83 12.43 8.12L15.78 11.47C16.07 11.76 16.07 12.24 15.78 12.53L12.43 15.88C12.14 16.17 11.66 16.17 11.37 15.88C11.08 15.59 11.08 15.11 11.37 14.82L13.44 12.75H9V16.8C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2Z'
          fill='#F5F5F5'
        />
        <path d='M2.75 11.25C2.34 11.25 2 11.59 2 12C2 12.41 2.34 12.75 2.75 12.75H9V11.25H2.75Z' fill='#F5F5F5' />
      </svg>
      <p>cambiar</p>
    </ChangeFnStyle>
  );
};
const ChangeFnStyle = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  p {
    color: #F5F5F5;
  }
  &:active {
    scale: 0.98;
  }
  &:hover p {
    text-decoration: underline;
  }
`;
