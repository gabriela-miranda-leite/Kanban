import { ListCards, Modal } from "../../components";
import { useListCards } from "../../context/useListCards";

import * as S from "./styles";

const Home = () => {
  const { toDoList, doingList, doneList } = useListCards();

  return (
    <S.Container>
      <S.Title>Kanban Board</S.Title>

      <S.ContainerList>
        <ListCards titulo="To do" color="green" card={toDoList} />
        <ListCards titulo="Doing" color="violet" card={doingList} />
        <ListCards titulo="Done" color="blue" card={doneList} />
      </S.ContainerList>

      <Modal />
    </S.Container>
  );
};

export default Home;
