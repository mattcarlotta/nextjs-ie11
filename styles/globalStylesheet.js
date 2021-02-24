import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Karla Regular";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/Karla-Regular.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Karla Bold";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/Karla-Bold.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Karla Italic";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/Karla-Italic.ttf") format("truetype");
    font-display: swap;
  }
  @font-face {
    font-family: "Karla Bold Italic";
    font-style: normal;
    font-weight: normal;
    src: url("/fonts/Karla-BoldItalic.ttf") format("truetype");
    font-display: swap;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Karla", -apple-system, BlinkMacSystemFont, "Segoe UI",
          Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
  }
`;

export default GlobalStyle;
