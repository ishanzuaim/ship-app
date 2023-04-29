import type { NextApiRequest, NextApiResponse } from "next";

const cart: Array<Number> = [];

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    id: number;
  };
}

export default function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Array<Number>>
) {
  if (req.method === "POST") {
    cart.push(req.body.id);
  }

  res.status(200).json(cart);
}
