import type { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "@/app/user/user.controller";
type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { email, password, ...otherProps } = req.body;

    if (!email || !email.includes("@") || !password) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }
    const data = await createUser({ email, password, ...otherProps });
    if (!data) {
      res.status(422).json({ message: "User already exists" });
      return;
    }
    const myObject = { message: "User Created", data: data } as any;

    // sign in the user
    res.status(201).json(myObject);
    return;
  } else {
    res.status(500).send({ message: "Invalid Route" });
  }
}
