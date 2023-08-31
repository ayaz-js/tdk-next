import {NextPage} from "next";
import Link from "next/link";
import {Category} from "@/models/category";
import {getCategories} from "@/app/services/categories";
import SubcategoryCard from "@/components/SubcategoryCard";

interface PageProps {
    params: {
        category:string,
    }
}


const getCategory = async (slug:string) => {
    const categories:Category[] = await getCategories()

    return categories.find(category => category.slug === slug)
}
export const dynamicParams = false;

const Page:NextPage<PageProps> = async ({params}) => {
    const category = await getCategory(params.category)
    if(!category){
        return null
    }
   return (
       <div className="py-16">
           <h1 className="text-[46px] text-white font-bold text-center mb-[56px]">{`${category.name}`}</h1>
           <div className="grid grid-cols-3 gap-[40px] px-[48px]">
               {category.subcategories.map(({name, slug, image}) => (
                   <SubcategoryCard image={image} name={name} href={`/products/${category.slug}/${slug}`} key={slug}/>
                  ))}
           </div>
       </div>
   )
};

export default Page;
