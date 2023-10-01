import { type StaticImageData } from 'next/image'
export type TGenresMoviesData = {
    genreName: string
    banner: StaticImageData
    id: number
}
// DSwiperGenreMovies
export type TGenreMoviesData = {
    genres: TGenresMoviesData[]
    id: number
}
export interface IDataSwiperGenreMoviesProps {
    dataSwiper: TGenreMoviesData[]
}
