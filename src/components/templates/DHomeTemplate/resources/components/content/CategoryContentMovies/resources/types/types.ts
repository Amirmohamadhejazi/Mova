import { type StaticImageData } from 'next/image'

type TCategoryContentMoviesItemsData = {
    name: string
    rate: number
    banner: StaticImageData
    id: number
}
export type TCategoryContentMoviesData = {
    data: TCategoryContentMoviesItemsData[]
    categoryName: string
    id: number
}
