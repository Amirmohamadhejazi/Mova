'use client'
import { type FC } from 'react'
import Image from 'next/image'
import { Progress } from '@mantine/core'
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/pagination'
import 'swiper/css'

import { type IDataSwiperWatchCartProps } from './resources'
//  IDataSwiperWatchCartLargeProps, TWatchCartData
const DSwiperWatchCart: FC<IDataSwiperWatchCartProps> = ({ dataSwiper }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            className='mySwiperCartPrev rounded-lg text-white select-none relative ' // Correct class name
        >
            {dataSwiper.map((itemsSwiper) => (
                <SwiperSlide className='    h-full' key={dataSwiper.id}>
                    <div className='bg-[#16181E] flex flex-col text-white p-2   rounded '>
                        <div className='flex gap-x-2 '>
                            <div>
                                <Image
                                    alt={itemsSwiper.banner.src}
                                    src={itemsSwiper.banner.src}
                                    width={80}
                                    height={90}
                                    className='h-full w-16 object-cover rounded-md '
                                />
                            </div>
                            <div className='flex-grow flex flex-col gap-y-2'>
                                <span className='font-bold text-sm'>{itemsSwiper.name}</span>
                                <span className='text-sm text-gray-500'>{itemsSwiper.episodeLeft} قسمت باقی مانده</span>

                                <Progress color='#F8B319' size='sm' value={itemsSwiper.Progress} />
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-x-3   text-sm mt-5'>
                            <div className=' col-span-1 py-2 flex items-center justify-center cursor-pointer shadow-lg rounded-md bg-yellow-400 '>
                                <span className='text-dark-950 font-extrabold'>تماشا</span>
                            </div>
                            {/* <div className=' col-span-3 flex  py-2 justify-center items-center rounded-md  backdrop-blur-sm bg-opacity-30 bg-gray-400 cursor-pointer'>
                                <span>بیخیال</span>
                            </div> */}
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default DSwiperWatchCart
