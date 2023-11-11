import type { NextApiRequest, NextApiResponse } from "next";

interface Props {
  data: any;
}

interface ProductNotExist {
  status: number;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Props | ProductNotExist>
) {
  if (req.method === "GET") {
    const response = await fetch(
      `https://dev.obtenmas.com/catom/api/challenge/banks`
    );

    const jsonResponse: any = await response.json();

    return res.status(200).json({ data: jsonResponse });
  }
}
