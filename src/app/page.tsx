import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

import { Dashboard } from '@/app/main/dashboard';
import Home from './main/home/home';

export default async function Page() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    return <Home />;
  }

  return <Dashboard />;
}
