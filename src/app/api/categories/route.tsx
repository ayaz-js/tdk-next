import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const categories = [
        {
            name:'Дробильное оборудование',
            slug:'crushing-equipment',
            subcategories: [
                {
                    name:'Холодные фрезы',
                    slug:'cold-milling-machines',
                    image:'/images/subcategories/subcategory_1.webp'
                },
                {
                    name:'Ресайклеры и стабилизаторы',
                    slug:'recyclers-and-stabilizers',
                    image:'/images/subcategories/subcategory_1.webp'
                },
                {
                    name:'Карьерный комбайн',
                    slug:'quarry-combine',
                    image:'/images/subcategories/subcategory_1.webp'
                },
                {
                    name:'Асфальтоукладчики',
                    slug:'asphalt-pavers',
                    image:'/images/subcategories/subcategory_1.webp'
                },
            ]
        }
    ]
    return NextResponse.json(categories)
}