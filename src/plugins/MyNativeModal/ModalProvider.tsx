import { useState } from 'react';
import { ModalContext } from './ModalContext';

export function ModalProvider({ children }: { children: JSX.Element }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}
