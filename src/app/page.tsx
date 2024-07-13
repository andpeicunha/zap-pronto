import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { Navbar } from '@/app/main/';
import { Dashboard } from '@/components/dashboard/dashboard';
import { getServerSession } from 'next-auth/next';
import Image from 'next/image';

import { Title } from '@/components/ui/title';
import S from './page.module.scss';

export default async function Home() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    return (
      <main className="flex flex-col h-screen w-screen justify-start items-center align-middle">
        <Navbar />
        <section className="flex flex-col items-center mt-[10%]">
          <Image
            src="/images/logotipo.png"
            width={577}
            height={82}
            alt={'logotipo clientX'}
            priority
            className="w-[400px] h-auto"
          />
          <Title type="h2">Aqui</Title>
        </section>
      </main>
    );
  }

  return (
    <main className={S.mainLogin}>
      <Dashboard />
    </main>
  );
}
