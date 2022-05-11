import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

import KanbanApi from "../services/kanban";
export interface CreateCardProps {
  titulo: string;
  conteudo: string;
  lista: "toDoList" | "doingList" | "doneList";
}

export interface CardProps {
  id: string;
  titulo: string;
  conteudo: string;
  lista: "toDoList" | "doingList" | "doneList";
}

interface ListCardsContextProps {
  createCard: ({ titulo, conteudo, lista }: CreateCardProps) => Promise<void>;
  deleteCard: (id: string, list: string) => Promise<void>;
  changeCard: ({ titulo, conteudo, lista, id }: CardProps) => Promise<void>;
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
  const [doingList, setDoingList] = useState([] as CardProps[]);
  const [doneList, setDoneList] = useState([] as CardProps[]);

  const listCards = async () => {
    const result = await KanbanApi.listCards();

    if (!result.ok) {
      return;
    }

    let list = result.data.filter(
      (value: CardProps) => value.lista === "toDoList"
    );

    setToDoList(list);

    list = result.data.filter(
      (value: CardProps) => value.lista === "doingList"
    );

    setDoingList(list);

    list = result.data.filter((value: CardProps) => value.lista === "doneList");

    setDoneList(list);
  };

  const createCard = async ({ titulo, conteudo, lista }: CreateCardProps) => {
    const result = await KanbanApi.createCard({
      titulo,
      conteudo,
      lista,
    });

    if (!result.ok) {
      return;
    }

    listCards();
  };

  const changeCard = async ({ titulo, conteudo, lista, id }: CardProps) => {
    const result = await KanbanApi.changeCard({
      titulo,
      conteudo,
      lista,
      id,
    });

    if (!result.ok) {
      return;
    }

    listCards();
  };

  const deleteCard = async (id: string) => {
    const result = await KanbanApi.deleteCard(id);

    if (!result.ok) {
      return;
    }

    listCards();
  };

  useEffect(() => {
    const login = async () => {
      const result = await KanbanApi.login({
        login: "letscode",
        senha: "lets@123",
      });

      if (!result.ok) {
        return;
      }

      listCards();
    };

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
