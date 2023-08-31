import {NextPage} from "next";
import Link from "next/link";
import {Category} from "@/models/category";
import {getCategories} from "@/app/services/categories";

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
       <div>
           <h1 className="text-[46px] text-white">{`${params.category}`}</h1>
           {category.subcategories.map(({name, slug}) => <Link key={slug}  href={`/products/${category.slug}/${slug}`}><article >{name}</article></Link>)}
       </div>
   )
};

export default Page;
