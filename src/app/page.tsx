import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";

import { Navbar } from "@/app/components/navbar";
import { Dashboard } from "@/app/components/dashboard";

import S from "./page.module.scss";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <main className={S.main}>
        <Navbar />
        <Image src="/logotipo.png" width={577} height={82} alt={""} priority className={S.imgLogo} />
      </main>
    );
  }

  return (
    <main className={S.mainLogin}>

      <Dashboard />
    </main>
  );
}
