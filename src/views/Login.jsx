import { Link } from "react-router-dom";
import styled from "styled-components";
import { LoginForm } from "../components/login/LoginForm";

const Login = () => {
  const btnStyle = {
    margin: "16px",
    padding: "12px 20px",
    borderRadius: "12px",
    background: "#416445",
    color: "#F5F5F5",
    fontSize: "1.2rem",
  };
  return (
    <LoginPage>
      <LoginForm />
      <Link to='/'>
        <button style={btnStyle}>Home</button>
      </Link>
    </LoginPage>
  );
};

export default Login;
const LoginPage = styled.section`
  background-color: ${(props) => props.theme.bgApp};
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 30px;
  width: 100vw;
  transition: transform 0.5s ease-in-out;
`;
