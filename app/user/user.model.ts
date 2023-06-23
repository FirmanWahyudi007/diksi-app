import mongoose, { Document } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "root"],
      default: "user",
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export interface IUser extends Document {
  email: string;
  name: string;
  username: string;
  role: string;
  password: string;
  avatar: string;
}
let UserModel: mongoose.Model<IUser>;
try {
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  UserModel = mongoose.model<IUser>("User", userSchema);
}

export default UserModel;
