"use client";
import "./global.css";
import { NextAuthProvider } from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <NextAuthProvider>
        <body>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
