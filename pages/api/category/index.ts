import type { NextApiRequest, NextApiResponse } from "next";
import { getCategories } from "../../../app/category/category.controller";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const data = await getCategories();
    if (!data) {
      res.status(422).json({ message: "No Categories Found" });
      return;
    }
    // sign in the user
    res.status(201).json({ message: "Categories found", ...data });
    return;
  } else {
    res.status(500).send({ message: "Invalid Route" });
  }
}
