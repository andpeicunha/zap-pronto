"use client";
import "./globals.css";

import StyledComponentsRegistry from "./registry";
import { ThemeProvider } from "styled-components";
import { THEME } from "./theme/theme";

//redux
import { Provider } from "react-redux";
import { store } from "./store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
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
