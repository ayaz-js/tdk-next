import { Category } from "@/models/category";

export const getCategories = (): Promise<Category[]> => {
  return fetch(`${process.env.APP_URL}/api/categories`).then((res) =>
    res.json()
  );
};

export const getCategory = async (
  slug: string
): Promise<Category | undefined> => {
  const categories: Category[] = await getCategories();

  return categories.find((category) => category.slug === slug);
};
