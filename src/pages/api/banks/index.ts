import type { NextApiRequest, NextApiResponse } from "next";

import { ProductsResponse } from "@/interfaces/products";
import { Author, SerializedData } from "@/interfaces/serialized-data";

interface Props {
  data: SerializedData;
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

    console.log(jsonResponse);

    return res.status(200).json({ data: [] });
  }
}
