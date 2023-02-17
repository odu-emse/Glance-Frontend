import { Button } from "@/components/common/button/button"
import { useSession, signIn, signOut } from "next-auth/react"

export function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <Button onClick={() => signOut()}>Sign Out</Button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  )
}