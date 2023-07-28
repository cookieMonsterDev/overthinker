"use client";
import { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom";

interface ModalContextType {
  openModal: (component: React.ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState({
    component: null,
    isOpen: false,
  });

  const openModal = (component: any) => {
    setModal({ component, isOpen: true });
  };

  const closeModal = () => {
    setModal({ ...modal, isOpen: false });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal.isOpen && ReactDOM.createPortal(modal.component, document.body)}
    </ModalContext.Provider>
  );
};
