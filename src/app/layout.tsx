"use client";
import "./globals.css";

import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import { THEME } from "./theme/theme";

//redux
import { Provider } from "react-redux";
import { store } from "./store";

export const metadata = {
  title: "ClientX - Mensagens automáticas via WhatsApp",
  description:
    "O ClientX é um sistema para envio de mensagens personalizadas para seus clientes, de forma simples e muito prática você cadastra, agenda e envia mensagens pros seus clientes, com texto personalizado, de forma automática e com a frequencia que desejar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <ThemeProvider theme={THEME}>
        <Provider store={store}>
          <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </body>
        </Provider>
      </ThemeProvider>
    </html>
  );
}
