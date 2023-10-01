import { type StaticImageData } from 'next/image'

export type TPopularMovieData = {
    name: string
    rate: number
    banner: StaticImageData
    id: number
}
