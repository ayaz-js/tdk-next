import { Category } from "@/models/category";

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${process.env.APP_URL}/api/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
};

export const getCategory = async (
  slug: string
): Promise<Category | undefined> => {
  const categories: Category[] = await getCategories();

  return categories.find((category) => category.slug === slug);
};
