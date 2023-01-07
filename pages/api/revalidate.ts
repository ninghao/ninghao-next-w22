import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  if (request.method !== 'POST') {
    return response.status(400).send('无效请求😬');
  }

  if (request.query.token !== process.env.REVALIDATION_TOKEN) {
    return response.status(401).json({ message: '无效令牌' });
  }

  const { path } = request.body;

  try {
    await response.revalidate(path);
    return response.json({ revalidated: true });
  } catch (error) {
    return response.status(500).json({ message: '再生出错了！' });
  }
};

export default handler;
