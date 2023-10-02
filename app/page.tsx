'use client'
import SigninButton from "@/components/SigninButton";
import {signOut, useSession} from 'next-auth/react'


export default function Home() {
  const session = useSession();
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <SigninButton/>
        <div>{session?.data?.user?.name}</div>
        <button onClick={()=>signOut()}>Logout</button>
      </div>
    </main>
  );
}
