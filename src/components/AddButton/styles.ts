import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-bottom: 1.5rem;
  padding: 2.5rem;
  border-radius: 0.5rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text.light};

  &:hover {
    filter: brightness(0.8);
  }
`;
