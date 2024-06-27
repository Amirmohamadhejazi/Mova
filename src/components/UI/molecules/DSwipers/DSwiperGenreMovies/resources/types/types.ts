export type TGenresMoviesData = {
    genreName: string
    banner: string
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
