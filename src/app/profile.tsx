import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <section>
      <div>
        <h1>PROFILE: Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </section>
  );
}
