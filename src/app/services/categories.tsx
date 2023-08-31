import {Category} from "@/models/category";

export const getCategories = ():Promise<Category[]> => {
    return fetch(`${process.env.APP_URL}/api/categories`).then(res=>res.json())
}