import styled from "styled-components";

export const Container = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 300;

  margin-bottom: 1rem;

  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled(Title)`
  font-weight: 600;
`;
