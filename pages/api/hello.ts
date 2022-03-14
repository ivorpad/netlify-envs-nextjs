// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import getConfig from 'next/config'

const { serverRuntimeConfig } = getConfig();

export const SELF_URL =
  process.env.SELF_URL ||
  (process.env.CONTEXT === "production"
    ? process.env.URL
    : process.env.DEPLOY_PRIME_URL);


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
