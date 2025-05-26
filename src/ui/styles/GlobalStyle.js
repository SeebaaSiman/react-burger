import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  *, *::before, *::after {
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    user-select: none;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;
     -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      scroll-behavior: smooth;
overflow-x: hidden;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
   }
h1,
h2,
h3 {
  font-weight: 700;
  line-height: 1.2;
}
h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
