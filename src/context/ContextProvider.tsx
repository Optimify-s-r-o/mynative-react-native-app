import { AppProvider } from './App/AppProvider';

export const ContextProvider = ({ children }: { children: JSX.Element }) => {
    return(
        <AppProvider>
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
        </AppProvider>
    )
}
