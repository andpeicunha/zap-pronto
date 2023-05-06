"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <>
      <div>Você está logado e pode ver essa página</div>
      <pre>{JSON.stringify(session?.user?.name)}</pre>
    </>
  );
};
