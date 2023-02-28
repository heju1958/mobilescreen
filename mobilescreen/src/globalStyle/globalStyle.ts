import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --color-primary: #FAFAFA;
    --grey-0: #E5E5E5;
    --text-1: #333333;
    --blue-1: #5B9DE6;
    --button-0: #21BDCA;
    --shadow: 0px 4px 10px 2px rgba(0, 0, 0, 0.25);
  }
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    border: 0;
    font-size: 100%;
    font: inherit;
  }
  body {
    background-color: var(--grey-0);
  }
  ol,
  ul {
  }
  body,
  html {
    width: 100%;
    height: 100vh;
  }
  body,
  input,
  textarea,
  select,
  ::placeholder {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    font-weight: 400;
    font-size: 1rem;
    color: var(--text-1);
  }
  button {
    cursor: pointer;
    border-radius: 10px;
    border: 1px solid var(--button-0);
    background-color: var(--button-0);
    color: var(--color-primary);
  }
  button:hover {
    cursor: pointer;
    background-color: var(--color-primary);
    color: var(--button-0);
  }
  .container {
    margin-top: 2rem;
    width: 25rem;
    height: 50rem;
    padding: 1.5rem;
    border-radius: 10px;
    background-color: white;
}

  .bold{
    font-weight: bold;
  }

  .fontSmall{
    font-size: 12px;
  }
`;

export default GlobalStyle;
