import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  body{
    overflow-x: hidden;
    background-color: ${(props) => props.theme.bg};
  }
  :root {
    --header-height: 3rem;
    --header-height-desktop: 5rem;

    /* color */
    --black-color: #000000;
    --white-color: #ffffff;
    --grey-color: #716f81;
    --light-grey-color: #dddddd;
    --dark-color: #282a36;
    --dark-purple-color: #413c69;
    --purple-color: #bd93f9;

    /* font size */
    --big-font-size: 2rem;
    --medium-font-size: 1.75rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: 0.938rem;
    --small-font-size: 0.813rem;
    --smaller-font-size: 0.75rem;

    /* Font weight */
    --font-medium: 500;
    --font-semi-bold: 600;

    /* Margins */
    --mb-0-25: 0.25rem;
    --mb-0-5: 0.5rem;
    --mb-0-75: 0.75rem;
    --mb-1: 1rem;
    --mb-1-5: 1.5rem;
    --mb-2: 2rem;
    --mb-2-5: 2.5rem;
    --mb-3: 3rem;

    /* Z Index */
    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
  }
`;
