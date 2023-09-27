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

const DHomeTemplate: FC = () => {
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

    return (
        <div className='grid grid-cols-8 flex-grow gap-x-2 w-full overflow-hidden text-dark-700 h-full'>
            <div className='col-span-6   text-center mx-12'>
                <Swiper
                    pagination={{ clickable: true }} // Enable clickable pagination
                    modules={[Pagination]}
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
                    <div className='w-full justify-between flex absolute bottom-10 text-white font-bold px-10 z-10'>
                        <div className='px-4 py-[10px] flex items-center justify-center shadow-lg rounded-xl bg-gray-400  backdrop-blur-sm bg-opacity-30	'>
                            <span>اضافه کردن به لیست</span>
                            <HiPlus className='text-xl' />
                        </div>
                        <div className='px-4 py-[10px] flex items-center justify-center shadow-lg rounded-xl bg-yellow-400 '>
                            <span className='text-dark-950 '> هم اکنون تماشا کنید!</span>
                        </div>
                    </div>
                </Swiper>
            </div>

            <div className='col-span-2 bg-gray-800 text-center rounded-md'>more items</div>
        </div>
    )
}

export default DHomeTemplate
