import getData from "@/utils/data";
import type { NextApiRequest, NextApiResponse } from "next";
import { ProductGroup } from "@/utils/types";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<ProductGroup>>
) {
  const data = getData();
  res.status(200).json(data);
}
