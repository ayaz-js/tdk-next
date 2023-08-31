export interface Category extends ICategory{
    subcategories: Subcategory[]
}

export interface ICategory {
    name: string
    slug: string
}

interface Subcategory extends ICategory{
    image:string
}