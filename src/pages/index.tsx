import type { NextPage } from "next";

import { ListCardsProvider } from "../context/useListCards";
import { Home } from "./home";

const Page: NextPage = () => {
  return (
    <ListCardsProvider>
      <Home />
    </ListCardsProvider>
  );
};

export default Page;
