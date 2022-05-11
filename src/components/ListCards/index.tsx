import { Card } from "..";

import * as S from "./styles";

interface ListCardProps {
  title: string;
  color: "blue" | "green" | "violet" | "brown";
  card: {
    title: string;
    description: string;
  }[];
}

export const ListCards = ({ title, color, card }: ListCardProps) => {
  return (
    <S.Container>
      <S.ContainerTitle color={color}>
        <S.ListTitle>{title}</S.ListTitle>
      </S.ContainerTitle>
      <S.ListCards>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
        <S.Card>
          <Card title={card[0].title} description={card[0].description} />
        </S.Card>
      </S.ListCards>
    </S.Container>
  );
};
