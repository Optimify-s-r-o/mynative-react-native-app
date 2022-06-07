import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}
export const ThemeContext = createContext<{
  theme: Theme;
  styleSheet: any | null; //TODO MAREK asi natypovat styleSheet

  setTheme: Dispatch<SetStateAction<Theme>>;
}>({
  theme: Theme.Light,
  styleSheet: null,
  setTheme: () => console.log('No valid context'),
});

export const useThemeContext = () => useContext(ThemeContext);
