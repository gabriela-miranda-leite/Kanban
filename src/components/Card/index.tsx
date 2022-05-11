import * as S from './styles';

interface CardProps {
  title: string;
  description?: string;
}

export const Card = ({title, description}: CardProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};
