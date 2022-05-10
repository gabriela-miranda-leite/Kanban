import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  :root{
    font-size: 62.5%;
  }

  body {
    background:${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.light};
    -webkit-font-smoothing: antialiased;
    margin: 0;
    
  }

  body, input, button, textarea {
    font-family: 'poppins', sans-serif;
    font-size: 1.6rem;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
