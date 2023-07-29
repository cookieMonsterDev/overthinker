// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const response = NextResponse.redirect(new URL(request.nextUrl.origin));
//   return response;
// }

export { default } from "next-auth/middleware"

export const config = { matcher: ["/new-article"] };
