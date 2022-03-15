// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'
import { SELF_URL } from '../../constants';

const { serverRuntimeConfig } = getConfig();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json({
    name: "John Doe",
    key: serverRuntimeConfig.API_KEY || "NOT_FOUND",
    context: serverRuntimeConfig.CONTEXT || "NOT_FOUND",
    selfUrl: SELF_URL,
    apiUi: process.env.API_KEY || "NOT_FOUND",
    apiServerConfig: serverRuntimeConfig.API_KEY || "NOT_FOUND",
  });
}
