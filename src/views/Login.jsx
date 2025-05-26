import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <LoginPage>
      <h1>Login</h1>
      <Link to='/'>
        <button>Home</button>
      </Link>
    </LoginPage>
  );
};

export default Login;
const LoginPage = styled.section`
  width: 100vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding-top: 4rem;
  gap: 4rem;
  button {
    padding: 1rem 2rem;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;
