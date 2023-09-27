'use client'
import { type FC } from 'react'
import { HiPlus } from 'react-icons/hi'
import { Rating } from '@mantine/core'
import { SwiperSlide } from 'swiper/react'

import { DSwiperCarts } from '@molecules/DSwipers'

import { extraction2Thumbnail, lokiThumbnail, rikThumbnail } from '@public/images/common'

import { type TPopularMovieData } from './resources'

const PopularMovies: FC = () => {
    const dataSwipePopularMovies: TPopularMovieData[] = [
        {
            name: 'Loki',
            rate: 4,
            banner: lokiThumbnail,
            id: 0,
        },
        {
            name: 'Extraction 2',
            rate: 2,
            banner: extraction2Thumbnail,
            id: 1,
        },
        {
            name: 'Rick and morti',
            rate: 1,
            banner: rikThumbnail,
            id: 2,
        },
    ]
    return (
        <div className='flex flex-col gap-y-5 text-white mt-8'>
            <span className='font-bold text-2xl '>محبوب ترین فیلم ها</span>

            <div>
                <DSwiperCarts>
                    <>
                        {dataSwipePopularMovies.map((items) => (
                            <SwiperSlide key={items.id}>
                                <div
                                    className='flex flex-col gap-y-32 rounded-xl p-5  bg-cover backdrop-blur-sm bg-opacity-30'
                                    style={{ backgroundImage: `url(${items.banner.src})` }}
                                >
                                    <div>
                                        <div className='truncate text-xl font-bold '>{items.name}</div>
                                        <Rating value={items.rate} readOnly size='xs' />
                                    </div>

                                    <div className='flex justify-between items-center '>
                                        <div className=' px-5 py-2 flex items-center justify-center cursor-pointer shadow-lg rounded-md bg-yellow-400 '>
                                            <span className='text-dark-950 font-extrabold text-sm'>اطلاعات بیشتر</span>
                                        </div>
                                        <div className='flex  px-2 py-2 justify-center items-center rounded-md  backdrop-blur-sm bg-opacity-30 bg-gray-400 cursor-pointer'>
                                            <HiPlus size={20} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </>
                </DSwiperCarts>
            </div>
        </div>
    )
}

export default PopularMovies