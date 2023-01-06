import type { NextRequest } from 'next/server';

const middleware = (request: NextRequest) => {
  console.log('🌵 中间件: middleware');
  console.log(request.nextUrl.pathname);
};

export default middleware;
