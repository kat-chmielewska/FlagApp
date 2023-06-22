import { createGlobalStyle } from "styled-components";
import { Theme } from "./theme";

const GlobalStyles = createGlobalStyle`
:root{
    /* Colors Light */
    --color-very-dark-grey: #131313;
    --color-dark-grey: #1C1C1C;
    --color-grey: #464646;
    --color-light-grey: #D3D3D3;
    --color-very-light-grey: #F5F5F7;
    --color-white: #fff;


    /* Fonts */
    --font-size-h1: 2.4rem;
    --font-size-h2: 2rem;
    --font-size-h3: 1.6rem;
    --font-size-h4: 1rem;
    --font-size-p: 1rem;

    /* Styles App */
    height: fit-content;
    background-color: var(--background-app);
    color: var(--color-text);

    /* Color Light/Dark Mode */
    --background-app: ${({ theme }: { theme: Theme }) => theme.backgroundBody};
    --background-single-card: ${({ theme }) => theme.backgroundSingleCard};
    --background-single-card-border: ${({ theme }) => theme.borderSingleCard};
    --color-input: ${({ theme }) => theme.inputBackground};
    --color-text: ${({ theme }) => theme.textColor};
    --color-text-hover: ${({ theme }) => theme.hoverTextColor};
    --background-color-button: ${({ theme }) => theme.button};
    --background-color-button-hover: ${({ theme }) => theme.buttonHover};
    --color-text-button: ${({ theme }) => theme.buttonText};
    --color-text-button-hover: ${({ theme }) => theme.buttonTextHover};
    --color-text-input: ${({ theme }) => theme.inputTextColor};

}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html{
    width: auto;
}

body {
    font-family: 'Inter', sans-serif; 
}

.app{
    min-width: 100vh;
}

.infoCountryWrapper{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 80px;
}

.bold{
 font-weight: bold;
}

`;

export default GlobalStyles;
