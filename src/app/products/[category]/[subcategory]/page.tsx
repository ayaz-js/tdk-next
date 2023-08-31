import {NextPage} from "next";
import {getCategories} from "@/app/services/categories";

interface PageProps {
    params: {
        category:string,
        subcategory:string
    }
}

const getSubcategories = async (slug:string) => {
    const categories = await getCategories()
    const subcategories = categories.find(category => category.slug === slug)?.subcategories
    return await Promise.resolve().then(() =>subcategories?.map((subcategory) => ({subcategory:subcategory.slug, category:slug}))||[])
}
export const dynamicParams = false;

export async function generateStaticParams({params}:{params:{category:string}}) {
    return await getSubcategories(params.category)
}
const Page:NextPage<PageProps> = async ({params}) => {
    const {category, subcategory} = params
    return <h1 className="text-[46px] text-white">{`${category} ${subcategory}`}</h1>
};

export default Page;
