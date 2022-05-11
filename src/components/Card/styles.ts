import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }

`;

export const Container = styled.button`
  width: 100%;
  padding: 2rem 3rem;

  color: ${({ theme }) => theme.colors.text.light};
  background-color: ${({ theme }) => theme.colors.card};

  border-radius: 0.5rem;
  border: none;

  position: relative;
  z-index: 2;
  overflow: hidden;

  &:hover::before {
    content: "";
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-color: ${({ theme }) => theme.colors.status.brown};

    animation: ${rotate} 4s linear infinite;
  }

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0.5rem;
    top: 0.5rem;
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
    background-color: ${({ theme }) => theme.colors.card};
  }
`;

export const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 300;

  margin-bottom: 2rem;
  width: 100%;

  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
`;

export const Description = styled(Title)`
  font-size: 1.4rem;
  font-weight: 600;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonProperties = styled.button`
  border: none;

  color: ${({ theme }) => theme.colors.text.light};
  background-color: ${({ theme }) => theme.colors.card};

  svg {
    &:hover {
      filter: brightness(0.5);
    }
  }
`;
