import { AppProvider } from 'src/context/App/AppProvider';

export const ContextProvider = ({ children }: { children: JSX.Element }) => (
  <AppProvider>{children}</AppProvider>
);
