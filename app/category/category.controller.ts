import CategoryModel, { ICategory } from "./category.model";
import slugify from 'slugify';
type CategoryX = Omit<ICategory, 'createdAt' | 'updatedAt'>;

export const createCategory = async (category: CategoryX) => {
    console.log('Request to add category: ', category)
    const categoryAdded: CategoryX = {
        ...category,
        slug: slugify(category.name).toLowerCase(),
    }
    console.log('Request to add category: ', categoryAdded);
    const findcategory = await CategoryModel.findOne({
        name: categoryAdded.name
    });
    if(findcategory) throw new Error("Category Found, Change Name");
    const newCategory = await CategoryModel.create(categoryAdded);
    return newCategory;
}