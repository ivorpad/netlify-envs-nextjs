// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'
import { SELF_URL } from '../../constants';

const { serverRuntimeConfig } = getConfig();

type Data = {
  name: string;
  key?: string;
  context: string;
  selfUrl?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: "John Doe",
    key: serverRuntimeConfig.API_KEY || "NOT_FOUND",
    context: serverRuntimeConfig.CONTEXT || "NOT_FOUND",
    selfUrl: SELF_URL,
  });
}
