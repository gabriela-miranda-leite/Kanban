import { useState, useEffect } from "react";

import { FiX } from "react-icons/fi";

import { useListCards } from "../../context/useListCards";
import { useModal } from "../../context/useModal";

import * as S from "./styles";

export const Modal = () => {
  const { typeModal, setToggleModal, toggleModal, card } = useModal();
  const { createCard, changeCard } = useListCards();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [titleEdit, setTitleEdit] = useState("");
  const [descriptionEdit, setDescriptionEdit] = useState("");

  useEffect(() => {
    setTitleEdit(card.titulo);
    setDescriptionEdit(card.conteudo);
  }, [card.conteudo, card.titulo]);

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
                          titulo: titleEdit,
                          conteudo: descriptionEdit,
                          lista: card.lista,
                          id: card.id,
                        });
                        setToggleModal(!toggleModal);
                      }}
                    >
                      <S.Label htmlFor="titulo">Título:</S.Label>
                      <S.Input
                        type="text"
                        id="titulo"
                        name="titulo"
                        autoComplete="off"
                        value={titleEdit}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setTitleEdit(e.target.value);
                        }}
                      />

                      <S.Label htmlFor="detalhes">Detalhes:</S.Label>
                      <S.TextArea
                        id="detalhes"
                        name="detalhes"
                        autoComplete="off"
                        rows={5}
                        value={descriptionEdit}
                        onChange={(e) => {
                          setDescriptionEdit(e.target.value);
                        }}
                      />

                      <S.Button type="submit">Salvar</S.Button>
                    </S.Form>
                    <S.Button
                      onClick={() => {
                        setTitleEdit(card.titulo);
                        setDescriptionEdit(card.conteudo);
                        changeCard({
                          titulo: card.titulo,
                          conteudo: card.conteudo,
                          lista: card.lista,
                          id: card.id,
                        });
                      }}
                    >
                      Cancelar edição
                    </S.Button>
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

                        setToggleModal(!toggleModal);
                        setTitle("");
                        setDescription("");
                      }}
                    >
                      <S.Label htmlFor="titulo">Título:</S.Label>
                      <S.Input
                        required
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
                        required
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
