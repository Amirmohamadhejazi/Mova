'use client'
import { type FC } from 'react'
import Image from 'next/image'
import { HiPlus } from 'react-icons/hi'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
// import required modules
import { Pagination } from 'swiper/modules'
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'

import { kingsManPic, NoBodyPic } from '@public/images/common'

import 'swiper/css/pagination'
import 'swiper/css'

import { type TStyleSwiperMoviesLarge } from './resources'
const DSwiperMoviesLarge: FC = () => {
    const SwiperButtonNext = () => {
        const swiper = useSwiper()
        return (
            <div
                className='flex justify-center items-center text-4xl p-2 rounded-lg  backdrop-blur-sm bg-opacity-30 bg-gray-400 cursor-pointer'
                onClick={() => swiper.slideNext()}
            >
                <MdOutlineKeyboardArrowLeft />
            </div>
        )
    }
    const SwiperButtonPrev = () => {
        const swiper = useSwiper()
        return (
            <div
                className='flex justify-center items-center text-4xl p-2 rounded-lg  backdrop-blur-sm bg-opacity-30 bg-gray-400 cursor-pointer'
                onClick={() => swiper.slidePrev()}
            >
                <MdOutlineKeyboardArrowRight />
            </div>
        )
    }
    const stylesSwiper: TStyleSwiperMoviesLarge = {
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
            className='mySwiper h-[350px] rounded-lg relative' // Correct class name
        >
            <SwiperSlide>
                <Image alt='NoBodyPic' src={NoBodyPic} className='relative h-full w-full object-cover' />
                <span className='absolute top-10 left-10 text-3xl font-extrabold  text-white'>No Body</span>
            </SwiperSlide>
            <SwiperSlide>
                <Image alt='kingsManPic' src={kingsManPic} />
            </SwiperSlide>
            <div className='w-full flex justify-between px-5 absolute left-0 right-0 top-1/2 transform -translate-y-1/2 z-10 text-white'>
                <SwiperButtonPrev />
                <SwiperButtonNext />
            </div>
            <div className='w-full justify-between flex absolute bottom-10 text-white font-bold px-5 z-10'>
                <div className='px-4 py-[10px] flex items-center justify-center shadow-lg rounded-xl bg-gray-400  backdrop-blur-sm bg-opacity-30	'>
                    <span>اضافه کردن به لیست</span>
                    <HiPlus className='text-xl' />
                </div>
                <div className='px-4 py-[10px] flex items-center justify-center shadow-lg rounded-xl bg-yellow-400 '>
                    <span className='text-dark-950 '> هم اکنون تماشا کنید!</span>
                </div>
            </div>
            {/* <div className='w-6 h-6 bg-red-600 text-white z-20 absolute bottom-0'>s</div> */}
        </Swiper>
    )
}

export default DSwiperMoviesLarge
