import UserModel, { IUser } from "./user.model";
import bcryptjs from "bcryptjs";
import connectDB from "@/lib/db";

type UserX = Omit<IUser, "createdAt" | "updatedAt">;
export const createUser = async (user: UserX) => {
  await connectDB();
  const userAdded: UserX = {
    ...user,
    password: bcryptjs.hashSync(user.password, 10),
  };
  // console.log("Request to add user: ", userAdded);
  const finduser = await UserModel.findOne({
    email: userAdded.email,
  });
  if (finduser) return null;
  const newUser = await UserModel.create(userAdded);
  return newUser.toObject();
};
