import { useContext, createContext, ReactNode } from "react";

interface ListCardsContextProps {}

interface ListCardsProviderProps {
  children: ReactNode;
}

const ListCardsContext = createContext({} as ListCardsContextProps);

const ListCardsProvider = ({ children }: ListCardsProviderProps) => {
  return (
    <ListCardsContext.Provider value={}>{children}</ListCardsContext.Provider>
  );
};

const useListCards = () => {
  const context = useContext(ListCardsContext);

  if (!context) {
    throw new Error("useListCards must be used within a ListCardsProvider");
  }

  return context;
};

export { ListCardsProvider, useListCards };
