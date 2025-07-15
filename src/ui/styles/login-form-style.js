import styled from "styled-components";
import { animationForm, showImageIn } from "./animations";
//* LoginForm.jsx*//
export const LoginFormContainer = styled.form`
display: flex;
  flex-direction: column;
  gap: 10px;
  background-color:${(props) => props.theme.bgApp};
  padding: 30px;
  width: 450px;
  border-radius: 20px;
box-shadow:${(props) => props.theme.cardShadow};
button:active {
scale:0.98;
}
.button-submit {
  margin: 20px 0 10px 0;
  background-color: ${(props) => props.theme.primaryText};
  border: none;
  color:  ${(props) => props.theme.white};
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  height: 50px;
  width: 100%;
  cursor: pointer;
}
p {
  text-align: center;
  color: black;
  font-size: 14px;
  margin: 5px 0;
}
span{
  display: flex;
  align-self: center;
  gap:6px;
  button{
    text-decoration: underline;
    color:${(props) => props.theme.secondaryText};
  }
}
  `
export const InputTitle = styled.label`
color:  ${(props) => props.theme.primaryText};
  font-weight: 600;`
export const InputContainer = styled.div`
position: relative;
   border: 1.5px solid${(props) => props.theme.primaryText};
  border-radius: 10px;
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  transition: 0.2s ease-in-out;
&:focus-within {
  border: 1.5px solid${(props) => props.theme.secondaryText};;
}
input {
    background-color:${(props) => props.theme.bgApp};
  margin-left: 10px;
  border-radius: 10px;
  border: none;
  width: 100%;
  height: 100%;
 caret-color:  ${(props) => props.theme.primaryText};
 color: ${(props) => props.theme.primaryText};
}
input:placeholder {
  color:${(props) => props.theme.primaryText};
}
input:focus {
  outline: none;
}
span{
  padding:6px;
  cursor: pointer;
}
  `
export const FormBtnContainer = styled.div`display: flex;
  flex-direction: row;
  align-items:  center;
  gap: 10px;
  justify-content: end;
  & > div > label {
  /* font-size: 14px;
  color: black;
  font-weight: 400; */
}
span {
  font-size: 14px;
  margin-left: 5px;
  color: #2d79f3;
  font-weight: 500;
  cursor: pointer;


}
button{
 margin-top: 10px;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  gap: 10px;
  border: 1px solid #ededef;
  background-color: white;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
button:hover {
  border: 1px solid #2d79f3;
  ;
}
  `

//* DirectionForm.jsx*/

export const DirectionFormPage = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 0px;
  height: 0;
  overflow: hidden;
  animation: ${animationForm} 0.4s ease-in-out forwards;
  transition: ${(props) => props.theme.transition};

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: start;
  justify-content: center;
  gap: 8px;

    button {
    margin-top: 16px;
    width: 100%;
    padding: 10px;
    background:${(props) => props.theme.primaryText};
    border-radius:12px;
    color: #F5F5F5;
    border: none;
    border-radius: 4px;
    font-size: 1em;
    cursor: pointer;
    transition: 0.3s;
  box-shadow:${(props) => props.theme.cardShadow};
  }
`;

export const DirectionFormInputContainer = styled.div`

    position: relative;
  margin: 1em 0 1em 0;
  max-width: 190px;
    margin-bottom: 20px;

    input {
font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid #F5F5F5;
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
  box-shadow:${(props) => props.theme.cardShadow};
  color:#F5F5F5;
  }
    label {
   font-size: 100%;
  position: absolute;
  left: 0;
  padding: 0.8em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color:#F5F5F5;
  }

& :is(input:focus, input:valid)~label {
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: #416445;
   border-radius: 8px;
}

& :is(input:focus, input:valid) {
  border-color:#b1f7c3;
}

    span {
    position: absolute;
    left: 0;
    bottom: -28px;
    width: 100%;
    border: none;
  }
`

// Admin edit form
export const FormEditProductPage = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 6px;
  img {
    max-height: 120px;
    opacity: 0;
    height: 0;
    animation: ${showImageIn} 0.3s ease-in-out forwards;
  }
`;
export const FormBtnContainerAdmin = styled.div`
  margin: 12px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  button {
    padding: 8px 12px;
    border: 1px solid ${(props) => props.theme.primaryText};
    border-radius: 12px;
    background-color: ${(props) => props.theme.primaryText};
    box-shadow: ${(props) => props.theme.cardShadow};
    color: ${(props) => props.theme.white};
    &.form-edit-delete {
      background-color: red;
    }
    &.form-edit-cancel {
      background-color: ${(props) => props.theme.thirdText};
    }
  }
`;