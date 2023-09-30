'use client'
import { type FC, type ReactNode } from 'react' // import required modules
// import required modules
import { Scrollbar } from 'swiper/modules'
// Import Swiper React components
import { Swiper } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css'
import 'swiper/css/scrollbar'

const DSwiperCarts: FC<{ children: ReactNode }> = ({ children }) => {
    const breakSwiper = {
        360: {
            slidesPerView: 1,
        },
        577: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
    }

    return (
        <Swiper
            breakpoints={breakSwiper}
            slidesPerView={1}
            spaceBetween={30}
            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar]}
            className='mySwiper  rounded-lg   select-none relative ' // Correct class name
        >
            {children}
        </Swiper>
    )
}

export default DSwiperCarts
