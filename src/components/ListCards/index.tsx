import { Card, AddButton } from "../../components";
import { CardProps } from "../../context/useListCards";

import * as S from "./styles";

interface ListCardProps {
  titulo: string;
  color: "blue" | "green" | "violet" | "brown";
  card: CardProps[];
}

export const ListCards = ({ titulo, color, card }: ListCardProps) => {
  return (
    <S.Container>
      <S.ContainerTitle color={color}>
        <S.ListTitle>{titulo}</S.ListTitle>
      </S.ContainerTitle>

      <S.ListCards>
        {titulo === "To do" && (
          <S.Card>
            <AddButton
              titulo="teste"
              conteudo="testgjhfdgjfhd fbdjhfgdjh gjhfd "
              lista="toDoList"
            />
          </S.Card>
        )}

        {card.map((value, index) => (
          <S.Card key={index}>
            <Card card={value} />
          </S.Card>
        ))}
      </S.ListCards>
    </S.Container>
  );
};
