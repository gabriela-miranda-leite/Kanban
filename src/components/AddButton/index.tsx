import { FiPlus } from "react-icons/fi";

import { useListCards, CreateCardProps } from "../../context/useListCards";

import * as S from "./styles";

export const AddButton = ({ titulo, conteudo, lista }: CreateCardProps) => {
  const { createCard } = useListCards();

  return (
    <S.Container
      onClick={() =>
        createCard({
          titulo: "teste",
          conteudo: "testgjhfdgjfhd fbdjhfgdjh gjhfd ",
          lista: "doingList",
        })
      }
    >
      <FiPlus size={24} />
    </S.Container>
  );
};
