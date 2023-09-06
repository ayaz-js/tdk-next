import { NextPage } from "next";
import { getCategories } from "@/app/services/categories";
import CategoriesFilter from "@/components/CategoriesFilter";
import ProductCard from "@/components/ProductCard";

interface PageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

const getSubcategories = async (slug: string) => {
  const categories = await getCategories();
  const subcategories = categories.find(
    (category) => category.slug === slug
  )?.subcategories;
  return await Promise.resolve().then(
    () =>
      subcategories?.map((subcategory) => ({
        subcategory: subcategory.slug,
        category: slug,
      })) || []
  );
};
export const dynamicParams = false;

export async function generateStaticParams({
  params,
}: {
  params: { category: string };
}) {
  return await getSubcategories(params.category);
}

const items = Array(8).fill({
  title: "4200 SMi Hartgestein",
  specifications: [
    `Ширина срезания макс.  - <span class="text-white font-semibold">4200 мм</span>`,
    `Глубина срезания - <span class="text-white font-semibold">650 мм</span>`,
    `Норма токсичности ОГ - <span class="text-white font-semibold">В ЕС не регулируется / US EPA Tier 4f</span>`,
  ],
  image: "/images/products/product_1.webp",
});

const Page: NextPage<PageProps> = async ({ params }) => {
  const { category, subcategory } = params;

  const categories = await getCategories();

  return (
    <div className="py-[64px] flex px-[48px] gap-[48px]">
      <div id="products" className="w-full grid grid-cols-3 gap-[32px]">
        {items.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
      <div id="faq" className="min-w-[425px]">
        <CategoriesFilter
          categories={categories}
          selectedCategory={category}
          selectedSubcategory={subcategory}
        />
      </div>
    </div>
  );
};

export default Page;
