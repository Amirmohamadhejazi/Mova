'use client'
import { type FC } from 'react'
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css'

import { type IDataSwiperGenreMoviesProps } from './resources'

const DSwiperGenreMovies: FC<IDataSwiperGenreMoviesProps> = ({ dataSwiper }) => {
    const breakSwiper = {
        360: {
            slidesPerView: 1,
        },
        515: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 1,
        },
    }

    return (
        <Swiper
            breakpoints={breakSwiper}
            slidesPerView={1}
            spaceBetween={10}
            className='DSwiperGenreMoviess rounded-lg text-white   relative ' // Correct class name
        >
            {dataSwiper.map((itemsSwiper, index) => (
                <SwiperSlide className='flex flex-col' key={index}>
                    <div className='flex mt-3 cursor-pointer relative'>
                        <div
                            className='filter brightness-50 h-[100px] w-full  text-white bg-cover  rounded'
                            style={{ backgroundImage: `url('${itemsSwiper.genres[0].banner}')` }}
                        ></div>
                        <div className='absolute left-1/2 top-1/2 transform text-center -translate-x-1/2 -translate-y-1/2 w-full p-2 text-white'>
                            <span className='text-lg font-bold'>{itemsSwiper.genres[0].genreName} </span>
                        </div>
                    </div>

                    <div className='flex mt-3  cursor-pointer  relative'>
                        <div
                            className='filter brightness-50 h-[100px] w-full  text-white bg-cover  rounded'
                            style={{ backgroundImage: `url('${itemsSwiper.genres[1].banner}')` }}
                        ></div>
                        <div className='absolute left-1/2 top-1/2 transform text-center -translate-x-1/2 -translate-y-1/2 w-full p-2 text-white'>
                            <span className='text-lg font-bold'>{itemsSwiper.genres[1].genreName} </span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default DSwiperGenreMovies
