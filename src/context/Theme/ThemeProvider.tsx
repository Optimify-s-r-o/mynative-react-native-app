import React, { useState } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
import { darkStyleSheet, lightStyleSheet } from 'theme/styles';

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [theme, setTheme] = useState<Theme>(Theme.Light);
  return (
    <ThemeContext.Provider
      value={{
        styleSheet: theme === Theme.Light ? lightStyleSheet : darkStyleSheet,
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
