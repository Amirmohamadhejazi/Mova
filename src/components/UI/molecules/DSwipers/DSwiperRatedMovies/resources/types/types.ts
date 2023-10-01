import { type StaticImageData } from 'next/image'

export type TRatedMoviesData = {
    name: string
    genre: string
    episode: number
    banner: StaticImageData
    id: number
}
export interface IDataSwiperRatedMoviesProps {
    dataSwiper: TRatedMoviesData[]
}
