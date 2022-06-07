import { AppProvider } from './App/AppProvider';
import { ThemeProvider } from 'context/Theme/ThemeProvider';
import React from 'react';

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <AppProvider>
      <ThemeProvider>
        {/**
             Please don't delete this comment block.
             Deleting this comment block will cause non-functionality of MyNative.
             <@MyNativeGlobalContext>
             **/}
        {children}
        {/**
             Please don't delete this comment block.
             Deleting this comment block will cause non-functionality of MyNative.
             <@MyNativeGlobalContext/>
             **/}
      </ThemeProvider>
    </AppProvider>
  );
};
