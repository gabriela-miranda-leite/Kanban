import { useContext, createContext, ReactNode, useState } from "react";

import KanbanApi from "../services/kanban";
interface CardProps {
  title: string;
  description: string;
  list: "ToDoList" | "DoingList" | "DoneList";
}
interface ListCardsContextProps {
  createCard: ({ title, description, list }: CardProps) => void;
  toDoList: CardProps[];
  doingList: CardProps[];
  doneList: CardProps[];
}

interface ListCardsProviderProps {
  children: ReactNode;
}

const ListCardsContext = createContext({} as ListCardsContextProps);

const ListCardsProvider = ({ children }: ListCardsProviderProps) => {
  const [toDoList, setToDoList] = useState([] as CardProps[]);
  const [doingList, setDoingList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const createCard = async ({ title, description, list }: CardProps) => {
    setToDoList((prev) => [...prev, { title, description, list }]);
  };

  return (
    <ListCardsContext.Provider
      value={{ toDoList, doingList, doneList, createCard }}
    >
      {children}
    </ListCardsContext.Provider>
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
