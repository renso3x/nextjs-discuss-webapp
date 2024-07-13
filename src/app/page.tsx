import { Button } from "@nextui-org/react";

import * as actions from '@/actions'
import { auth } from "@/auth";
import Profile from "@/component/profile";

export default async function Home() {
  const session = await auth()
  return (
    <>
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>

      {
        session?.user ? <div>{JSON.stringify(session.user)}</div> : <div>Signed Out</div>
      }

      <Profile />
    </>

  );
}
