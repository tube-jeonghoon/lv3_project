import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }

  button {
    margin: 0;
    font-size: 100%;
    line-height: 1.15;
    background-color: transparent;
    border: none;
    padding: 0;
    overflow: visible;
    color: inherit;
    cursor: pointer;
    text-align: center;
    text-transform: none;
    -webkit-appearance: button
  }
`;
export default GlobalStyle;
