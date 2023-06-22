import { createContext, useState, ReactNode } from "react";
import { darkTheme, lightTheme, Theme } from "../theme/theme";

export interface State {
  theme: Theme;
  changeTheme: () => void;
}

interface ProviderProps {
  children: ReactNode;
}

export const NightModeContext = createContext<State>({
  theme: lightTheme,
  changeTheme: () => null,
});

export const NightModeContextProps = createContext([]);

export const NightModeProvider = ({ children }: ProviderProps) => {
  const [nightMode, setNightMode] = useState(false);

  const changeTheme = () => (nightMode ? setNightMode(false) : setNightMode(true));

  const theme = nightMode ? darkTheme : lightTheme;

  const value = {
    theme,
    changeTheme,
  };
  return <NightModeContext.Provider value={value}>{children}</NightModeContext.Provider>;
};
