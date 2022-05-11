import { ReactNode, createContext, useContext, useState } from "react";

import { CardProps } from "../context/useListCards";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextProps {
  toggleModal: boolean;
  setToggleModal: (state: boolean) => void;
  typeModal: string;
  setTypeModal: (state: string) => void;
  setCard: (card: CardProps) => void;
  card: CardProps;
}

const ModalContext = createContext({} as ModalContextProps);

const ModalProvider = ({ children }: ModalProviderProps) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [typeModal, setTypeModal] = useState("create");
  const [card, setCard] = useState({} as CardProps);

  return (
    <ModalContext.Provider
      value={{
        toggleModal,
        setToggleModal,
        typeModal,
        setTypeModal,
        card,
        setCard,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export { ModalProvider, useModal };
