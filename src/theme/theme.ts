export const lightTheme = {
  backgroundBody: `var(--color-very-light-grey)`,
  backgroundSingleCard: `var(--color-white)`,
  borderSingleCard: `var(--color-light-grey)`,
  textColor: `var(--color-very-dark-grey)`,
  hoverTextColor: `var(--color-grey)`,
  inputBackground: `var(--color-white)`,
  inputTextColor: `var(--color-light-grey)`,
  button: `var(--color-white)`,
  buttonHover: `var(--color-very-dark-grey)`,
  buttonText: `var(--color-very-dark-grey)`,
  buttonTextHover: `var(--color-white)`,
};

export const darkTheme = {
  backgroundBody: `var(--color-dark-grey)`,
  backgroundSingleCard: `var(--color-very-dark-grey)`,
  borderSingleCard: `var(--color-very-dark-grey)`,
  textColor: `var(--color-white)`,
  hoverTextColor: `var(--color-grey)`,
  inputBackground: `var(--color-very-dark-grey)`,
  inputTextColor: `var(--color-white)`,
  button: `var(--color-very-dark-grey)`,
  buttonHover: `var(--color-grey)`,
  buttonText: `var(--color-white)`,
  buttonTextHover: `var(--color-white)`,
};

export type Theme = typeof lightTheme | typeof darkTheme;
