import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export const AppContext = createContext<{
  selected: number | null;
  setSelected: Dispatch<SetStateAction<number | null>>;
}>({
  selected: 0,
  setSelected: () => console.log('No valid context'),
});

export const useAppContext = () => useContext(AppContext);
