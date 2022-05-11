import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import KanbanApi from "../services/kanban";
interface CreateCardProps {
  title: string;
  description: string;
  list: "toDoList" | "doingList" | "doneList";
}

interface CardProps {
  id: string;
  title: string;
  description: string;
  list: "toDoList" | "doingList" | "doneList";
}

interface ListCardsContextProps {
  createCard: ({ title, description, list }: CreateCardProps) => Promise<void>;
  deleteCard: (id: string, list: string) => Promise<void>;
  changeCard: ({ title, description, list, id }: CardProps) => Promise<void>;
  toDoList: CardProps[];
  doingList: CardProps[];
  doneList: CardProps[];
}

interface ListCardsProviderProps {
  children: ReactNode;
}

const ListCardsContext = createContext({} as ListCardsContextProps);

const ListCardsProvider = ({ children }: ListCardsProviderProps) => {
  const [request, setRequest] = useState("idle");

  const [toDoList, setToDoList] = useState([] as CardProps[]);
  const [doingList, setDoingList] = useState([] as CardProps[]);
  const [doneList, setDoneList] = useState([] as CardProps[]);

  const login = async () => {
    const response = await KanbanApi.login({
      login: "letscode",
      senha: "lets@123",
    });

    console.log(response);
  };

  const listCards = async () => {
    const response = await KanbanApi.listCards();

    console.log(response);
  };

  const createCard = async ({ title, description, list }: CreateCardProps) => {
    const response = await KanbanApi.createCard({
      titulo: title,
      conteudo: description,
      lista: list,
    });
    console.log(response);
  };

  const changeCard = async ({ title, description, list, id }: CardProps) => {
    const response = await KanbanApi.changeCard({
      titulo: title,
      conteudo: description,
      lista: list,
      id,
    });
    console.log(response);
    setToDoList((prev) => [...prev, { title, description, list, id }]);
  };

  const deleteCard = async (id: string, list: string) => {
    const response = await KanbanApi.deleteCard(id);
    console.log(response);
  };

  useEffect(() => {
    login();
  }, []);

  return (
    <ListCardsContext.Provider
      value={{
        toDoList,
        doingList,
        doneList,
        createCard,
        deleteCard,
        changeCard,
      }}
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
