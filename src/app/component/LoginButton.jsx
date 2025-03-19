"use client"
import {  signIn } from "next-auth/react"
export default function LoginButton() {
  return (
    <div>  <button onClick={() => signIn()}>Sign in</button></div>
  )
}




// export default function Component() {
//   const { data: session } = useSession()
//   if (session) {
//     return (
//       <>
//         Signed in as {session.user.email} <br />
//         <button onClick={() => signOut()}>Sign out</button>
//       </>
//     )
//   }
//   return (
//     <>
//       Not signed in <br />
    
//     </>
//   )
// }