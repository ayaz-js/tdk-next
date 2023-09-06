import React from "react";
import { ProductPage } from "@/components/ProductPage";

const getStaticPath = async () => {
  return {
    paths: [{ params: { slug: "4200-smi-hartgestein" } }],
    fallback: false,
  };
};

const getStaticProps = async (context) => {
  const slug = context.params.slug;
};

const Page = () => {
  return (
    <>
      <ProductPage />
    </>
  );
};

export default Page;
