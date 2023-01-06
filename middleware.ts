import { NextResponse, userAgent } from 'next/server';
import type { NextRequest } from 'next/server';

// export const config = {
//   matcher: ['/posts/:id/'],
// };

const middleware = (request: NextRequest) => {
  const {
    nextUrl: { pathname },
  } = request;

  if (pathname.startsWith('/posts')) {
    console.log('🌵 中间件: middleware');
    console.log(request.nextUrl.pathname);
  }

  const ua = userAgent(request);
  console.log(ua);

  if (pathname === '/articles') {
    // return NextResponse.redirect('http://localhost:3000/posts');
    // return NextResponse.redirect(new URL('/posts', request.url));

    const nextUrl = request.nextUrl.clone();
    nextUrl.pathname = '/posts';

    return NextResponse.redirect(nextUrl);
  }

  if (pathname === '/about') {
    const cookieName = 'testing';
    let cookieValue = request.cookies.get(cookieName)?.value;

    if (!cookieValue) {
      cookieValue = Math.random() < 0.5 ? 'normality' : 'variation';
    }

    const rewritePath =
      cookieValue === 'variation' ? `/variation${pathname}` : pathname;

    const response = NextResponse.rewrite(new URL(rewritePath, request.url));

    if (!request.cookies.get(cookieName)) {
      response.cookies.set(cookieName, cookieValue);
    }

    return response;
  }
};

export default middleware;
