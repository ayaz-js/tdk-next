import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const categories = [
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
    ]
    return NextResponse.json(categories)
}