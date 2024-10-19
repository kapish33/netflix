import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-current-url', pathname); 

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  response.headers.set('x-current-url', pathname);

  return response;
}
