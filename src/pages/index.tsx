import type { NextPage } from "next";
import { ListCards } from "../components";

import * as S from "./styles";

const Home: NextPage = () => {
  const Array = [
    {
      title: "Bug prioridade 5",
      description: "Site não rodando, problemas que oifkdhskfdsh",
    },
    {
      title: "Bug prioridade 3",
      description: "Site não rodando, problemas que oifkdhskfdsh",
    },
  ];
  return (
    <S.Container>
      <S.Title>Kanban Board</S.Title>

      <S.ContainerList>
        <ListCards title="Done" color="brown" card={Array} />
        <ListCards title="New" color="blue" card={Array} />
        <ListCards title="To do" color="green" card={Array} />
        <ListCards title="Doing" color="violet" card={Array} />
      </S.ContainerList>
    </S.Container>
  );
};

export default Home;
