'use client'
import { type FC } from 'react'
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { DSwiperWatchCart } from '@molecules/DSwipers'
import { type TWatchCartData } from '@molecules/DSwipers/DSwiperWatchCart/resources'

import { wandaVisionSmall } from '@public/images/common'

import { BannerSlider, PopularMovies } from './resources'

const DHomeTemplate: FC = () => {
    const data: TWatchCartData[] = [
        {
            name: 'Wanda Vision',
            episodeLeft: 1,
            banner: wandaVisionSmall,
            Progress: 40,
            id: 0,
        },
        {
            name: 'Wanda Vision',
            episodeLeft: 2,
            banner: wandaVisionSmall,
            Progress: 20,
            id: 1,
        },
        {
            name: 'Wanda Vision',
            episodeLeft: 4,
            banner: wandaVisionSmall,
            Progress: 100,
            id: 2,
        },
        {
            name: 'Wanda Vision',
            episodeLeft: 1,
            banner: wandaVisionSmall,
            Progress: 60,
            id: 3,
        },
    ]

    return (
        <div className='grid grid-cols-8 flex-grow gap-x-2 w-full overflow-hidden text-dark-700 h-full'>
            <div className='col-span-6 mx-12'>
                <BannerSlider />
                <PopularMovies />
            </div>

            <div className='col-span-2 flex flex-col'>
                <div className='flex  items-center justify-between w-full'>
                    <div className='flex  items-center gap-x-2 '>
                        <span className='text-white'>ادامه </span>
                        <div className='flex '>
                            <MdOutlineKeyboardArrowRight
                                className='text-primary hover:text-yellow-400 cursor-pointer '
                                // onClick={() => SwiperButtons('prev')}
                            />
                            <MdOutlineKeyboardArrowLeft
                                className='text-primary hover:text-yellow-400  cursor-pointer '
                                // onClick={() => SwiperButtons('next')}
                            />
                        </div>
                    </div>
                    <div className='flex font-medium text-primary items-center gap-x-2'>
                        <span>مشاهده</span>
                        <MdKeyboardArrowLeft className=' ' />
                    </div>
                </div>

                <div className='flex mt-3'>
                    <DSwiperWatchCart dataSwiper={data} />
                </div>
            </div>
        </div>
    )
}

export default DHomeTemplate
