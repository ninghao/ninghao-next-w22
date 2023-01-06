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
};

export default middleware;
