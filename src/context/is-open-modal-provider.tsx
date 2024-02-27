import React, { useState, createContext, useContext } from 'react';

type IsOpenModalContextType = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

type IsOpenModalProviderProps = {
  children: React.ReactNode;
};

export const IsOpenModalContext = createContext<IsOpenModalContextType | null>(null);

export default function IsOpenModalProvider({ children }: IsOpenModalProviderProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <IsOpenModalContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      {children}
    </IsOpenModalContext.Provider>
  );
}

export function useIsOpenModalContext() {
  const context = useContext(IsOpenModalContext);

  if (context === null) {
    throw new Error('useIsOpenModalContext must be used within an IsOpenModalProvider');
  }

  return context;
}