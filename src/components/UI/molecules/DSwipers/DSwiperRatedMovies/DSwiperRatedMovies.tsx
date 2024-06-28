/* eslint-disable @next/next/no-img-element */
'use client'
import { type FC } from 'react'
import { HiPlus } from 'react-icons/hi'
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css'

import { type IDataSwiperRatedMoviesProps } from './resources'
const DSwiperRatedMovies: FC<IDataSwiperRatedMoviesProps> = ({ dataSwiper }) => {
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
            className='DSwiperRatedMovies rounded-lg text-white   relative ' // Correct class name
        >
            {dataSwiper.map((itemsSwiper) => (
                <SwiperSlide className='flex mt-3  relative' key={itemsSwiper.id}>
                    <div className='filter brightness-50  h-[130px] w-full'>
                        <img
                            alt={itemsSwiper.banner}
                            src={itemsSwiper.banner}
                            className='w-full h-full object-cover rounded-md '
                        />
                    </div>
                    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-2 text-white'>
                        <div className='w-full flex gap-x-2'>
                            <div className='flex-grow flex flex-col gap-y-2'>
                                <span className='font-bold text-sm'>{itemsSwiper.name}</span>
                                <div className='flex justify-between text-sm'>
                                    <span>{itemsSwiper.episode} قسمت</span>
                                    <span>{itemsSwiper.genre}</span>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-8 gap-x-3 text-sm mt-3'>
                            <div className='col-span-6 py-2 flex items-center justify-center cursor-pointer shadow-lg rounded-md bg-yellow-400'>
                                <span className='text-dark-950 font-extrabold'>تماشا</span>
                            </div>
                            <div className='col-span-2 flex py-3 justify-center items-center rounded-md bg-gray-400 bg-opacity-30 filter grayscale cursor-pointer'>
                                <HiPlus size={20} />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default DSwiperRatedMovies
