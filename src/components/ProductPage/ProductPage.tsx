"use client";
import { FC } from "react";
import { ProductInfo } from "./Sections/ProductInfo";
import { Breadcrumbs } from "./Sections/Breadcrumbs";
import { ProductDescription } from "./Sections/ProductDescription";

export const ProductPage: FC = () => {
  return (
    <div className="px-14 pb-[100px] max-[1024px]:px-6">
      <Breadcrumbs />
      <ProductInfo />
      <ProductDescription />
    </div>
  );
};
