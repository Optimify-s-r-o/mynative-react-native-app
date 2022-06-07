import { createContext, useContext } from 'react';
import { Modal } from 'plugins/MyNativeModal/Modal/types';

export const ModalContext = createContext<Modal>({
  isOpen: false,
  setOpen: () => console.log('No valid context'),
});

export const useModalContext = () => useContext(ModalContext);
