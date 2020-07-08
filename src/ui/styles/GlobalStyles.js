import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    list-style: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    color: black;
    background-color: white;
  }

  html,
  body,
  #root {
    height: 1px;
    min-height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .limited-container {
    max-width: 1250px;
    margin: 0 auto;

    @media (max-width: calc(1250px + 30px)) {
      margin: 0 15px;
    }
  }
`;
