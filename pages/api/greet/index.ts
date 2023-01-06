import { NextApiRequest, NextApiResponse } from 'next';

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'GET') {
    return response.status(400).send('无效请求 😬');
  }

  return response
    .status(200)
    .json({ message: '你好，欢迎来宁皓网学习 Next.js。' });
};

export default handler;
