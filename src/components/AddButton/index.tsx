import { FiPlus } from "react-icons/fi";

import { useModal } from "../../context/useModal";

import * as S from "./styles";

export const AddButton = () => {
  const { setToggleModal, toggleModal, setTypeModal } = useModal();

  return (
    <S.Container
      onClick={() => {
        setTypeModal("create");
        setToggleModal(!toggleModal);
      }}
    >
      <FiPlus size={24} />
    </S.Container>
  );
};
