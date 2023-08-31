import {NextPage} from "next";
import Link from "next/link";

interface PageProps {
    params: {
        category:string,
    }
}

const getCategories = async () => {
    return await Promise.resolve().then(()=>[
        {
            name:'Дробильное оборудование',
            slug:'crushing-equipment',
            subcategories: [
                {
                    name:'Холодные фрезы',
                    slug:'cold-milling-machines'
                },
                {
                    name:'Ресайклеры и стабилизаторы',
                    slug:'recyclers-and-stabilizers'
                },
                {
                    name:'Карьерный комбайн',
                    slug:'quarry-combine'
                },
                {
                    name:'Асфальтоукладчики',
                    slug:'asphalt-pavers'
                },
            ]
        }
    ])
}

export async function generateStaticParams() {
    const categories = await getCategories()

    return categories.map((category) => ({category:category.slug}))
}
const Layout = ({children}:{children:React.ReactNode}) => {

    return (
        children
    )
};

export default Layout;
