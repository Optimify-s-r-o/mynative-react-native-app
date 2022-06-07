import { createContext, Dispatch, SetStateAction, useContext } from 'react';

export const ModalContext = createContext<{
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setOpen: () => console.log('No valid context'),
});

export const useModalContext = () => useContext(ModalContext);
