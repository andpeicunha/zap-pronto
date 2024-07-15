import GoogleProvider from 'next-auth/providers/google';

export const nextAuthOptions = {
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
