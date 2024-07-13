import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

import { Dashboard } from '@/components/dashboard/dashboard';
import Home from './main/home/home';

export default async function Page() {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    return <Home />;
  }

  return <Dashboard />;
}
