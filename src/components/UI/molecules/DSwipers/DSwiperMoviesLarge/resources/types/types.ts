import type React from 'react'

export type TStyleSwiperMoviesLarge = React.CSSProperties & {
    '--swiper-pagination-bottom': string
    '--swiper-pagination-color': string
    '--swiper-pagination-bullet-inactive-color': string
    '--swiper-pagination-bullet-inactive-opacity': string
    '--swiper-pagination-bullet-size': string
    '--swiper-pagination-bullet-horizontal-gap': string
}
export type TMovieData = {
    name: string
    banner: string
    id: number
}
export interface IDataSwiperMoviesLargeProps {
    dataSwiper: TMovieData[]
}
