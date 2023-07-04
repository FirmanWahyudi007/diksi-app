import mongoose, { Document } from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export interface ICategory extends Document {
  name: string;
  slug: string;
  description: string;
}

let CategoryModel: mongoose.Model<ICategory>;
try {
  CategoryModel = mongoose.model<ICategory>("Category");
} catch (e) {
  CategoryModel = mongoose.model<ICategory>("Category", categorySchema);
}

export default CategoryModel;
