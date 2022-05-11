import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem 4rem;
  overflow-y: hidden;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  margin-bottom: 1rem;

  user-select: none;
`;

export const ContainerList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 90%;
  gap: 1rem;
`;
