import { type StaticImageData } from 'next/image'

type TCategoryContentMoviesItemsData = {
    name: string
    rate: number
    banner: StaticImageData
    category: string
    id: number
}
export type TCategoryContentMoviesData = {
    data: TCategoryContentMoviesItemsData[]
    categoryName: string
    id: number
}
