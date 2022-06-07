import { useState } from 'react';
import { AppContext } from './AppContext';

export const AppProvider = ({ children }: { children: JSX.Element }) => {
  const [selected, setSelected] = useState<number | null>(0);
  return (
    <AppContext.Provider
      value={{
        selected,
        setSelected,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
