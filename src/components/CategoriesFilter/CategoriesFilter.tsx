import { FC } from "react";
import { Category } from "@/models/category";
import CategoriesFilterItem from "@/components/CategoriesFilter/CategoriesFilterItem";

interface Props {
  categories: Category[];

  selectedSubcategory: string;

  selectedCategory: string;
}

const CategoriesFilter: FC<Props> = ({
  categories,
  selectedCategory,
  selectedSubcategory,
}) => {
  return (
    <div className="flex flex-col gap-[16px]">
      {categories.map((category, index) => (
        <CategoriesFilterItem
          key={index}
          isSelectedCategory={selectedCategory === category.slug}
          selectedSubcategory={selectedSubcategory}
          {...category}
        />
      ))}
    </div>
  );
};

export default CategoriesFilter;
