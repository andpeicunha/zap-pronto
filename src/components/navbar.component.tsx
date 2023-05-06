"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export function Navbar() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        Você não está logado <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  return (
    <>
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
