import { NextResponse } from 'next/server'
//  https://nextjs.org/docs/app/building-your-application/routing/middleware 
// This function can be marked `async` if using `await` inside

export function middleware(request) {

    const currentCookie = request.cookies.get("nextjs-token")
    const dummyUserData = {
        role: "user",
        email: "rest@gmail.com"
    }
    let isServicesPage = request.nextUrl.pathname.startsWith("/services")
    let isAdmin = dummyUserData.role == 'admin'

    if (isServicesPage && !isAdmin) {
        return NextResponse.redirect(new URL('/login',request.url))
    }
  return NextResponse.next()
}
// export function middleware(request) {
//   return NextResponse.redirect(new URL('/', request.url))
// }

// export const config = {
//   matcher: '/about/:path*',
// }