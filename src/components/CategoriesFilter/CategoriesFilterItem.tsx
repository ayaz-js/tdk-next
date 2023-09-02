'use client'

import {FC, useId} from 'react';

import Link from "next/link";
import {Category} from "@/models/category";

interface Props extends Category {
    isSelectedCategory: boolean
    selectedSubcategory: string
}

const CategoriesFilterItem: FC<Props> = ({name, isSelectedCategory, selectedSubcategory, slug, subcategories}) => {
    const id = useId()
    const getLiClass = (categorySlug: string, subcategorySlug: string) => {
        return isSelectedCategory && selectedSubcategory === subcategorySlug ? "mb-[24px] last:mb-0 text-brand-yellow font-semibold" : "mb-[24px] last:mb-0 text-[#FFFFFF80] hover: hover:font-semibold"
    }
    return (
        <div className="collapse collapse-arrow bg-brand-black px-[32px]">
            <input type="checkbox" name={`category-collapse-${id}`} defaultChecked={isSelectedCategory}/>
            <div
                className="collapse-title font-bold after:scale-x-150 after:right-0 after:scale-y-150 after:text-brand-yellow text-[20px] px-0">
                {name}
            </div>
            <div className="collapse-content text-[18px]">
                <ul>{subcategories.map((subcategory, index) =>
                    <Link href={`/products/${slug}/${subcategory.slug}`} key={index}>
                        <li className={getLiClass(slug, subcategory.slug)}>{subcategory.name}</li>
                    </Link>)}
                </ul>
            </div>
        </div>
    );
};

export default CategoriesFilterItem;