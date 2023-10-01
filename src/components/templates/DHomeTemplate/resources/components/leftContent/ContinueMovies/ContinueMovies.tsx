import { type FC } from 'react'
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { DSwiperWatchCart } from '@molecules/DSwipers'

import { data } from './resources'

const ContinueMovies: FC = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex  items-center justify-between w-full'>
                <div className='flex   gap-x-2 '>
                    <span className='text-white font-bold'>ادامه </span>
                    <div className='flex '>
                        <MdOutlineKeyboardArrowRight className='text-primary hover:text-yellow-400 cursor-pointer ' />
                        <MdOutlineKeyboardArrowLeft className='text-primary hover:text-yellow-400  cursor-pointer ' />
                    </div>
                </div>
                <div className='flex font-medium text-primary   gap-x-2'>
                    <span>مشاهده</span>
                    <MdKeyboardArrowLeft className=' ' />
                </div>
            </div>

            <div className='flex mt-3'>
                <DSwiperWatchCart dataSwiper={data} />
            </div>
        </div>
    )
}

export default ContinueMovies
