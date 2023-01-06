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
};

export default middleware;
