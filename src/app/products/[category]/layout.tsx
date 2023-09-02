import {getCategories} from "@/app/services/categories";

export async function generateStaticParams() {
    const categories = await getCategories()

    return categories.map((category) => ({category: category.slug}))
}

const Layout = ({children}: { children: React.ReactNode }) => children
export default Layout;
