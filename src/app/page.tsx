"use client";
import Head from "next/head";

import type { RootState } from "./store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slice/counterSlice";

import { Main } from "./styles/page.styles";

export const metadata = {
  title: "ClientX - Pages",
  description:
    "O ClientX é um sistema para envio de mensagens personalizadas para seus clientes, de forma simples e muito prática você cadastra, agenda e envia mensagens pros seus clientes, com texto personalizado, de forma automática e com a frequencia que desejar.",
};

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Main>
        Seu projeto está pronto para iniciar
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </Main>
    </>
  );
}
