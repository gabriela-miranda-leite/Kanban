import styled from "styled-components";

interface ColorProps {
  color: "blue" | "green" | "violet" | "brown";
}

export const Container = styled.div`
  display: flex;
  width: 90%;

  flex-direction: column;

  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.listCards};
`;

export const ContainerTitle = styled.div<ColorProps>`
  padding: 1.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color: ${({ color, theme }) => theme.colors.status[color]};
`;

export const ListTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const ListCards = styled.ul`
  padding: 1.5rem 1.5rem 0;
  list-style-type: none;

  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.6rem;
    background: ${(props) => props.theme.colors.text.light};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.text.light};
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.card};
  }
`;

export const Card = styled.li`
  margin-bottom: 1.5rem;
`;
