import type { NextApiRequest, NextApiResponse } from "next";
import { createCategory } from "@/app/category/category.controller";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, ...otherProps } = req.body;

    if (!name) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }
    const data = await createCategory({ name, ...otherProps });
    if (!data) {
      res.status(422).json({ message: "Category already exists" });
      return;
    }
    const categoryObject = { message: "Category created", data: data } as any;
    res.status(201).json(categoryObject);
    return;
  } else {
    res.status(500).send({ message: "Invalid Route" });
  }
}
