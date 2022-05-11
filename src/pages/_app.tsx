import { useState, useEffect } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import { ThemeProvider } from "styled-components";

import { ListCardsProvider } from "../context/useListCards";
import { theme } from "../../styles/theme";
import GlobalStyles from "../../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  }
  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link rel="shortcut icon" href="assets/favicon.ico" />
        <title>Kanban</title>
        <meta
          name="description"
          content="Kanban é um sistema de gestão visual para controle de tarefas e fluxos
          de trabalho através da utilização de colunas e cartões, facilitando a
          gestão de atividades."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <ListCardsProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </ListCardsProvider>
    </>
  );
}
export default MyApp;
