import { type StaticImageData } from 'next/image'

export type TWatchCartData = {
    name: string
    episodeLeft: number
    Progress: number
    banner: StaticImageData
    id: number
}
export interface IDataSwiperWatchCartProps {
    dataSwiper: TWatchCartData[]
}
