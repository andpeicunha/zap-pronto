import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from "@/components/buttons.component";
import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";

import { User } from "@/components/user.component";
import { Navbar } from "@/components/navbar.component";

import Style from "./page.module.scss";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className={Style.main}>
      <section>
        {session ? (
          <>
            <Navbar />
            <div>Olá {JSON.stringify(session?.user?.email)}</div>
            <div>Session {JSON.stringify(session?.expires)}</div>
            <ProfileButton />
            <LogoutButton />
          </>
        ) : (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </section>
      <section>{session && <User />}</section>
    </main>
  );
}
