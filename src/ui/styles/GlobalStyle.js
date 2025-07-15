import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Erode';
    src: url('/src/ui/font/Erode-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Erode';
    src: url('/src/ui/font/Erode-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Satoshi';
    src: url('/src/ui/font/Satoshi-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Zodiak';
    src: url('/src/ui/font/Zodiak-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }


  *, *::before, *::after {
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    user-select: none;
  }

  html, body {
        font-family: 'Erode', 'Satoshi','Zodiak', Arial, sans-serif;
    font-display: swap;
    width: 100%;
    height: 100%;
    background-color:${(props) => props.theme.bgApp};
     -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      scroll-behavior: smooth;
overflow-x: hidden;
    transition: all 0.3s ease-in-out;
   }
h1,
h2,
h3 {
      font-family: 'Zodiak';
  font-weight: 400;
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
        font-family: 'Satoshi';
    font-weight: 700;
    cursor: pointer;
    border: none;
    background: none;
  }
p{
  font-size: 16px;
        font-family: 'Erode';
    font-weight: 400;
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
