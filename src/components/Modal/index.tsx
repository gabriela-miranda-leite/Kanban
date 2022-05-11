import { FiX } from "react-icons/fi";

import { useState } from "react";

import { CardProps, useListCards } from "../../context/useListCards";
import { useModal } from "../../context/useModal";

import * as S from "./styles";

type ModalProps = {
  card: CardProps;
  hasOpen: boolean;
  setToggle: (state: boolean) => void;
};

export const Modal = () => {
  const { typeModal, setToggleModal, toggleModal, card } = useModal();
  const { createCard, changeCard } = useListCards();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      {toggleModal && (
        <>
          <S.Container>
            <S.Overlay
              onClick={() => {
                setToggleModal(!toggleModal);
              }}
            />
            <S.ModalContent>
              <S.Header>
                <S.CloseModal onClick={() => setToggleModal(!toggleModal)}>
                  <FiX size={24} />
                </S.CloseModal>
              </S.Header>

              <S.ContentCard>
                {typeModal === "show" && (
                  <>
                    <S.Title>{card.titulo}</S.Title>

                    <S.Separator />

                    <S.Description>{card.conteudo}</S.Description>
                  </>
                )}

                {typeModal === "edit" && (
                  <>
                    <S.Title>Editar cartão</S.Title>

                    <S.Separator />

                    <S.Form
                      onSubmit={(e) => {
                        e.preventDefault();

                        changeCard({
                          titulo: title,
                          conteudo: description,
                          lista: card.lista,
                          id: card.id,
                        });

                        setTitle("");
                        setDescription("");
                      }}
                    >
                      <S.Label htmlFor="titulo">Título:</S.Label>
                      <S.Input
                        type="text"
                        id="titulo"
                        name="titulo"
                        placeholder="Título..."
                        autoComplete="off"
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setTitle(e.target.value);
                        }}
                      />

                      <S.Label htmlFor="detalhes">Detalhes:</S.Label>
                      <S.TextArea
                        id="detalhes"
                        name="detalhes"
                        placeholder="Detalhes..."
                        autoComplete="off"
                        rows={5}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />

                      <S.Button type="submit">Salvar</S.Button>
                    </S.Form>
                  </>
                )}

                {typeModal === "create" && (
                  <>
                    <S.Title>Criar cartão</S.Title>

                    <S.Separator />

                    <S.Form
                      onSubmit={(e) => {
                        e.preventDefault();

                        createCard({
                          titulo: title,
                          conteudo: description,
                          lista: "toDoList",
                        });

                        setTitle("");
                        setDescription("");
                      }}
                    >
                      <S.Label htmlFor="titulo">Título:</S.Label>
                      <S.Input
                        type="text"
                        id="titulo"
                        name="titulo"
                        placeholder="Título..."
                        autoComplete="off"
                        value={title}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setTitle(e.target.value);
                        }}
                      />

                      <S.Label htmlFor="detalhes">Detalhes:</S.Label>
                      <S.TextArea
                        id="detalhes"
                        name="detalhes"
                        placeholder="Detalhes..."
                        autoComplete="off"
                        rows={5}
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />

                      <S.Button type="submit">Criar</S.Button>
                    </S.Form>
                  </>
                )}
              </S.ContentCard>
            </S.ModalContent>
          </S.Container>
        </>
      )}
    </>
  );
};
