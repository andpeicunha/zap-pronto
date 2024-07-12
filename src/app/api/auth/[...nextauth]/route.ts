import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

interface ResBody {
  user: {
    name: string;
    email: string;
  };
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  // adapter: MongoDBAdapter(clientPromise),
  // pages: {
  //   verifyRequest: "/auth/verify",
  //   signIn: "/auth/signin",
  // },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

const handler: NextApiHandler<ResBody> = NextAuth(authOptions);
export { handler as GET, handler as POST };
