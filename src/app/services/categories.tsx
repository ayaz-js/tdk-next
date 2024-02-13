import { Category } from "@/models/category";

export const getCategories = async (): Promise<Category[]> => {
  return [
    {
      name: "Дробильное оборудование",
      slug: "crushing-equipment",
      subcategories: [
        {
          name: "Холодные фрезы",
          slug: "cold-milling-machines",
          image: "/images/subcategories/subcategory_1.webp",
        },
        {
          name: "Ресайклеры и стабилизаторы",
          slug: "recyclers-and-stabilizers",
          image: "/images/subcategories/subcategory_1.webp",
        },
        {
          name: "Карьерный комбайн",
          slug: "quarry-combine",
          image: "/images/subcategories/subcategory_1.webp",
        },
        {
          name: "Асфальтоукладчики",
          slug: "asphalt-pavers",
          image: "/images/subcategories/subcategory_1.webp",
        },
      ],
    },
    {
      name: "Грохота, Классификаторы",
      slug: "roar-classifiers",
      subcategories: [
        {
          name: "Холодные фрезы",
          slug: "cold-milling-machines",
          image: "/images/subcategories/subcategory_1.webp",
        },
        {
          name: "Ресайклеры и стабилизаторы",
          slug: "recyclers-and-stabilizers",
          image: "/images/subcategories/subcategory_1.webp",
        },
        {
          name: "Карьерный комбайн",
          slug: "quarry-combine",
          image: "/images/subcategories/subcategory_1.webp",
        },
        {
          name: "Асфальтоукладчики",
          slug: "asphalt-pavers",
          image: "/images/subcategories/subcategory_1.webp",
        },
      ],
    },
  ];
};

export const getCategory = async (
  slug: string
): Promise<Category | undefined> => {
  const categories: Category[] = await getCategories();

  return categories.find((category) => category.slug === slug);
};
