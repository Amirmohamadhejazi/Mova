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
    // Swiper next and prev btn
    const SwiperButtons = ({ type }: { type: string }) => {
        const Swiper = useSwiper()
        return (
            <div
                className='flex justify-center items-center text-3xl p-[4px] rounded-lg  backdrop-blur-sm bg-opacity-30 bg-gray-400 cursor-pointer'
                onClick={() => (type === 'next' ? Swiper.slideNext() : Swiper.slidePrev())}
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
            className='mySwiper h-[320px] rounded-lg  select-none relative ' // Correct class name
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
            {/* next slider */}
            <div className='absolute left-0 pl-5 top-1/2 transform -translate-y-1/2 z-10 text-white'>
                <SwiperButtons type='next' />
            </div>
            {/* prev slider */}
            <div className='absolute right-0 pr-5 top-1/2 transform -translate-y-1/2 z-10 text-white'>
                <SwiperButtons type='prev' />
            </div>

            {/* 2 boxes under slider */}
            <div className='absolute bottom-5 text-white font-bold left-5 z-10'>
                <div
                    className='px-6 py-[10px] flex items-center justify-center cursor-pointer shadow-lg rounded-xl bg-yellow-400 '
                    onClick={() => console.log(dataSwiper[slideIndex])}
                >
                    <span className='text-dark-950 '> هم اکنون تماشا کنید!</span>
                </div>
            </div>
            <div className='absolute bottom-5 text-white font-bold right-5 z-10'>
                <div
                    className='px-7 py-[10px] flex items-center justify-center gap-x-1.5
                 shadow-lg rounded-xl bg-gray-400  backdrop-blur-sm cursor-pointer bg-opacity-30	'
                    onClick={() => console.log(dataSwiper[slideIndex])}
                >
                    <HiPlus className='text-xl mb-1' />
                    <span>اضافه کردن به لیست</span>
                </div>
            </div>
        </Swiper>
    )
}

export default DSwiperMoviesLarge