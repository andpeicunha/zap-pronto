import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { Navbar } from '@/app/main/';
import { Dashboard } from '@/components/dashboard/dashboard';
import { getServerSession } from 'next-auth';
import Image from 'next/image';

import S from './page.module.scss';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <main className="flex flex-col h-screen w-screen justify-start align-middle">
        <Navbar />
        <Image
          src="/images/logotipo.png"
          width={577}
          height={82}
          alt={'logotipo clientX'}
          priority
          className="bg-red-500"
        />
      </main>
    );
  }

  return (
    <main className={S.mainLogin}>
      <Dashboard />
    </main>
  );
}
