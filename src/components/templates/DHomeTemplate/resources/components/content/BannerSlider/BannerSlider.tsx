import { type FC } from 'react'

import { DSwiperMoviesLarge } from '@molecules/DSwipers'

import { dataSwiper } from '../../..'

const BannerSlider: FC = () => {
    return (
        <div>
            <DSwiperMoviesLarge dataSwiper={dataSwiper} />
        </div>
    )
}

export default BannerSlider
