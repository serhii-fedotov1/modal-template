import { createContext, useContext, useState } from "react";

const ModalContext = createContext({});

export const ModalProvider = ({ children }) => {
  const [activeModal, setActiveModal] = useState(null);

  const open = (modal) => {
    setActiveModal(modal);
  };

  const hide = () => {
    setActiveModal(null);
  };

  return (
    <ModalContext.Provider value={{ activeModal, open, hide }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
