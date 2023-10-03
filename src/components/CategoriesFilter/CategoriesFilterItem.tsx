"use client";
import { FC, useId } from "react";
import Link from "next/link";
import { Category } from "@/models/category";

interface Props extends Category {
  isSelectedCategory: boolean;
  selectedSubcategory: string;
}

const CategoriesFilterItem: FC<Props> = ({
  name,
  isSelectedCategory,
  selectedSubcategory,
  slug,
  subcategories,
}) => {
  const id = useId();
  const getLiClass = (categorySlug: string, subcategorySlug: string) => {
    return isSelectedCategory && selectedSubcategory === subcategorySlug
      ? "mb-[24px] last:mb-0 text-brand-yellow font-semibold"
      : "mb-[24px] last:mb-0 text-[#FFFFFF80] hover:text-[#FFFFFF] hover:translate-x-2 transition duration-500 easy-out";
  };

  const collapseClass = isSelectedCategory
    ? "collapse collapse-arrow bg-[#1D1D1DD9] px-[32px]"
    : "collapse collapse-arrow hover:bg-[#232323] bg-[#1D1D1DD9] px-[32px]";
  return (
    <div className={collapseClass}>
      <input
        type="checkbox"
        name={`category-collapse-${id}`}
        defaultChecked={isSelectedCategory}
      />
      <div className="collapse-title font-bold after:scale-x-150 after:right-0 after:scale-y-150 after:text-brand-yellow text-[20px] px-0 max-[1024px]:text-[16px]">
        {name}
      </div>
      <div className="collapse-content text-[18px] max-[1024px]:text-[16px]">
        <ul className="flex flex-col gap-6">
          {subcategories.map((subcategory, index) => (
            <Link href={`/products/${slug}/${subcategory.slug}`} key={index}>
              <li className={`${getLiClass(slug, subcategory.slug)}`}>
                {subcategory.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesFilterItem;
