'use client'
import { type FC, useState } from 'react'
import Image from 'next/image'
import { HiPlus } from 'react-icons/hi'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
// import required modules
import { Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css'

import { type IDataSwiperMoviesLargeProps, type TStyleSwiperMoviesLarge } from './resources'

const DSwiperMoviesLarge: FC<IDataSwiperMoviesLargeProps> = ({ dataSwiper }) => {
    const [slideIndex, SetSlideIndex] = useState(0)
    const SwiperButtons = ({ type }: { type: string }) => {
        const swiper = useSwiper()
        return (
            <div
                className='flex justify-center items-center text-4xl p-[6px] rounded-lg  backdrop-blur-sm bg-opacity-30 bg-gray-400 cursor-pointer'
                onClick={() => (type === 'next' ? swiper.slideNext() : swiper.slidePrev())}
            >
                {type === 'next' ? <MdOutlineKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />}
            </div>
        )
    }
    const stylesSwiper: TStyleSwiperMoviesLarge = {
        '--swiper-pagination-bottom': '32px',
        '--swiper-pagination-color': '#FFBA08',
        '--swiper-pagination-bullet-inactive-color': '#999999',
        '--swiper-pagination-bullet-inactive-opacity': '0.4',
        '--swiper-pagination-bullet-size': '10px',
        '--swiper-pagination-bullet-horizontal-gap': '4px',
    }
    return (
        <Swiper
            pagination={{ clickable: true }} // Enable clickable pagination
            modules={[Pagination]}
            style={stylesSwiper}
            spaceBetween={10}
            className='mySwiper h-[320px] rounded-lg relative ' // Correct class name
            onSlideChange={(e) => SetSlideIndex(e.realIndex)}
            loop
        >
            {dataSwiper.map((itemsSwipe) => (
                <SwiperSlide key={itemsSwipe.id}>
                    <Image
                        alt={itemsSwipe.name}
                        src={itemsSwipe.banner}
                        className='relative h-full w-full rounded-lg object-cover'
                    />
                    <span className='absolute top-10 left-10 text-3xl font-extrabold  text-white'>
                        {itemsSwipe.name}
                    </span>
                </SwiperSlide>
            ))}
            <div className='w-full flex justify-between px-5 absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-10 text-white'>
                <SwiperButtons type='prev' />
                <SwiperButtons type='next' />
            </div>
            <div className='w-full justify-between flex absolute bottom-5 text-white font-bold px-5 z-10'>
                <div
                    className='px-4 py-[10px] flex items-center justify-center
                 shadow-lg rounded-xl bg-gray-400  backdrop-blur-sm cursor-pointer bg-opacity-30	'
                    onClick={() => console.log(dataSwiper[slideIndex])}
                >
                    <span>اضافه کردن به لیست</span>
                    <HiPlus className='text-xl' />
                </div>
                <div
                    className='px-4 py-[10px] flex items-center justify-center cursor-pointer shadow-lg rounded-xl bg-yellow-400 '
                    onClick={() => console.log(dataSwiper[slideIndex])}
                >
                    <span className='text-dark-950 '> هم اکنون تماشا کنید!</span>
                </div>
            </div>
        </Swiper>
    )
}

export default DSwiperMoviesLarge
