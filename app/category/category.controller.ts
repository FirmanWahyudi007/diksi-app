import connectDB from "@/lib/db";
import CategoryModel, { ICategory } from "./category.model";
import slugify from "slugify";
type CategoryX = Omit<ICategory, "createdAt" | "updatedAt">;

export const createCategory = async (category: CategoryX) => {
  await connectDB();
  const categoryAdded: CategoryX = {
    ...category,
    slug: slugify(category.name).toLowerCase(),
  };
  const findcategory = await CategoryModel.findOne({
    name: categoryAdded.name,
  });
  if (findcategory) return null;
  const newCategory = await CategoryModel.create(categoryAdded);
  return newCategory.toObject();
};

export const getCategories = async () => {
  await connectDB();
  const categories = await CategoryModel.find({});
  if (!categories) throw new Error("No Categories Found");
  return categories;
};
