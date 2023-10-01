import { type FC } from 'react'
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { DSwiperRatedMovies } from '@molecules/DSwipers'

import { dataSwiper } from './resources/data/data'

const TopRated: FC = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex  items-center justify-between w-full'>
                <div className='flex  items-center gap-x-2 '>
                    <span className='text-white'>رتبه های برتر </span>
                    <div className='flex '>
                        <MdOutlineKeyboardArrowRight className='text-primary hover:text-yellow-400 cursor-pointer ' />
                        <MdOutlineKeyboardArrowLeft className='text-primary hover:text-yellow-400  cursor-pointer ' />
                    </div>
                </div>
                <div className='flex font-medium text-primary items-center gap-x-2'>
                    <span>مشاهده</span>
                    <MdKeyboardArrowLeft className=' ' />
                </div>
            </div>

            <div>
                <DSwiperRatedMovies dataSwiper={dataSwiper} />
            </div>
        </div>
    )
}

export default TopRated
