export type TRatedMoviesData = {
    name: string
    genre: string
    episode: number
    banner: string
    id: number
}
export interface IDataSwiperRatedMoviesProps {
    dataSwiper: TRatedMoviesData[]
}
