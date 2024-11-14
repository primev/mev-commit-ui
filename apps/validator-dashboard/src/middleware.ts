import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Clone the request headers
  const requestHeaders = new Headers(request.headers)

  // Add environment-specific variables based on hostname
  if (request.url.toString().includes("holesky")) {
    requestHeaders.set("x-environment", "holesky")
  } else {
    requestHeaders.set("x-environment", "mainnet")
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: "/:path*",
}
