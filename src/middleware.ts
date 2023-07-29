import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.redirect(new URL(request.nextUrl.origin));
  // response.cookies.set('modal', 'true');
  return response;
}

export const config = { matcher: ["/new-article"] };
