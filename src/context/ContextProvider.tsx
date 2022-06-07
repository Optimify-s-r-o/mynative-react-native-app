import { AppProvider } from './App/AppProvider';
import { ThemeProvider } from './Theme/ThemeProvider';
import React from 'react';
{
  /**
 Please don't delete this comment block.
 Deleting this comment block will cause non-functionality of MyNative.
 <@MyNativeGlobalContextImports>
 **/
}
//import { ModalProvider } from './Modal/ModalProvider';
{
  /**
 Please don't delete this comment block.
 Deleting this comment block will cause non-functionality of MyNative.
 <@MyNativeGlobalContextImports/>
 **/
}
export const ContextProvider = ({ children }: { children: JSX.Element }) => {
  return (
    <AppProvider>
      <ThemeProvider>
        {/**
             Please don't delete this comment block.
             Deleting this comment block will cause non-functionality of MyNative.
             <@MyNativeGlobalContextProviders>
             **/}
        {/*<ModalProvider>*/}
        {children}
        {/*</ModalProvider>*/}
        {/**
             Please don't delete this comment block.
             Deleting this comment block will cause non-functionality of MyNative.
             <@MyNativeGlobalContextProviders/>
             **/}
      </ThemeProvider>
    </AppProvider>
  );
};
