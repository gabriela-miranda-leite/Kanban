import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  height: 80%;
  width: 80%;
  margin: 2rem 2rem;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    width: 50%;
  }
`;

export const Header = styled.div`
  width: 100%;

  display: flex;

  justify-content: flex-end;
`;

export const CloseModal = styled.button`
  background: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem 0;
  margin-left: 4rem;

  svg {
    color: ${({ theme }) => theme.colors.text.light};

    &:hover {
      filter: brightness(0.2);
    }
  }
`;

export const ContentCard = styled.div`
  width: 100%;
  text-align: left;
  padding: 0 4rem 4rem;

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

export const Separator = styled.div`
  height: 0.1rem;
  width: 100%;
  margin: 2rem 0;

  background-color: ${({ theme }) => theme.colors.text.light};
`;

export const Title = styled.h2`
  width: 100%;
  text-transform: capitalize;
  font-size: 2.4rem;
`;

export const Description = styled.h3`
  text-transform: capitalize;
  width: 100%;
  font-weight: 400;
  font-size: 1.8rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin: 1rem 0;
  font-size: 2rem;
`;

export const Input = styled.input`
  margin: 1rem 0;
  font-size: 1.8rem;
  padding: 1rem;
  margin-bottom: 1.5rem;

  border-radius: 0.5rem;
`;

export const TextArea = styled.textarea`
  margin: 1rem 0;
  padding: 1rem;

  font-size: 1.8rem;

  margin-bottom: 1.5rem;
  border-radius: 0.5rem;

  resize: vertical;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.status.brown};
  color: ${({ theme }) => theme.colors.text.light};

  padding: 1rem;
  margin: 1.5rem 0;
  width: 100%;

  &:hover {
    filter: brightness(0.6);
  }
`;
