/* eslint-disable @next/next/no-img-element */
'use client'
import { type FC, useState } from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import { HiPlus } from 'react-icons/hi'
// import required modules
import { Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

import 'swiper/css/pagination'
import 'swiper/css'

import { type IDataSwiperMoviesLargeProps, type TStyleSwiperMoviesLarge } from './resources'

const DSwiperMoviesLarge: FC<IDataSwiperMoviesLargeProps> = ({ dataSwiper }) => {
    const [slideIndex, SetSlideIndex] = useState(0)
    // Swiper next and prev btn
    const SwiperButtons = ({ type }: { type: string }) => {
        const Swiper = useSwiper()
        return (
            <div
                className='flex justify-center items-center text-3xl p-2 rounded-lg bg-opacity-20 bg-gray-500 cursor-pointer'
                onClick={() => (type === 'next' ? Swiper.slideNext() : Swiper.slidePrev())}
            >
                {type === 'next' ? <IconChevronLeft /> : <IconChevronRight />}
            </div>
        )
    }

    const stylesSwiper: TStyleSwiperMoviesLarge = {
        '--swiper-pagination-bottom': '0px',
        '--swiper-pagination-color': '#FFBA08',
        '--swiper-pagination-bullet-inactive-color': '#999999',
        '--swiper-pagination-bullet-inactive-opacity': '0.4',
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-bullet-horizontal-gap': '4px',
    }

    return (
        <div>
            <Swiper
                pagination={{ clickable: true }} // Enable clickable pagination
                modules={[Pagination]}
                style={stylesSwiper}
                spaceBetween={10}
                className='mySwiper h-[280px] rounded-lg relative ' // Correct class name
                onSlideChange={(e) => SetSlideIndex(e.realIndex)}
                loop
            >
                {dataSwiper.map((itemsSwipe) => {
                    return (
                        <SwiperSlide key={itemsSwipe.id}>
                            <img src={itemsSwipe.banner.src} alt='' />
                            <span className='absolute top-8 left-8 text-xl md:text-3xl font-bold  text-white'>
                                {itemsSwipe.name}
                            </span>
                            <div className='absolute bottom-5 text-white font-bold left-5 z-10'>
                                <div
                                    className='p-3 xl:px-6 xl:py-3 flex items-center justify-center cursor-pointer shadow-lg rounded-full xl:rounded-lg bg-yellow-400 '
                                    onClick={() => console.log(dataSwiper[slideIndex])}
                                >
                                    <span className='text-dark-950 hidden xl:flex'> نمایش فیلم</span>
                                    <BsPlayCircle className='flex text-dark-950 text-2xl xl:hidden' />
                                </div>
                            </div>
                            <div className='absolute bottom-5 text-white font-bold right-5 z-10'>
                                <div
                                    className='p-3 xl:px-5 xl:py-3 flex items-center justify-center gap-x-1.5
                shadow-lg rounded-full xl:rounded-lg bg-gray-400  cursor-pointer bg-opacity-30	'
                                    onClick={() => console.log(dataSwiper[slideIndex])}
                                >
                                    <HiPlus className='text-xl xl:mb-1' />
                                    <span className='hidden xl:block'>لیست تماشا</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                {/* next slider */}
                <div className='absolute left-0 pl-5 top-1/2 transform -translate-y-1/2 z-10 text-white'>
                    <SwiperButtons type='next' />
                </div>
                {/* prev slider */}
                <div className='absolute right-0 pr-5 top-1/2 transform -translate-y-1/2 z-10 text-white'>
                    <SwiperButtons type='prev' />
                </div>

                {/* 2 boxes under slider */}
            </Swiper>
        </div>
    )
}

export default DSwiperMoviesLarge
