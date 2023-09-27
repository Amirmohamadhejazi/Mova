import { type FC } from 'react'

import DSwiperMoviesLarge from '@molecules/DSwiperMoviesLarge/DSwiperMoviesLarge'

import { dataSwiper } from '../..'

const BannerSlider: FC = () => {
    return <DSwiperMoviesLarge dataSwiper={dataSwiper} />
}

export default BannerSlider
