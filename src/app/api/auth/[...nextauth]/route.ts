import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import { authOptions } from './config';

interface ResBody {
  user: {
    name: string;
    email: string;
  };
}

const handler: NextApiHandler<ResBody> = NextAuth(authOptions);
export { handler as GET, handler as POST };
