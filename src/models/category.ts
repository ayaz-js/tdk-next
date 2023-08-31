export interface Category extends ICategory{
    subcategories: ICategory[]
}

export interface ICategory {
    name: string
    slug: string
}