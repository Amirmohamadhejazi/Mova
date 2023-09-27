import { type FC } from 'react'
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

import { BannerSlider, PopularMovies } from './resources'

const DHomeTemplate: FC = () => {
    return (
        <div className='grid grid-cols-8 flex-grow gap-x-2 w-full overflow-hidden text-dark-700 h-full'>
            <div className='col-span-6 mx-12'>
                <BannerSlider />
                <PopularMovies />
            </div>

            <div className='col-span-2  '>
                <div className='flex flex-col'>
                    <div className='flex  text-xl items-center justify-between w-full'>
                        <div className='flex  items-center gap-x-2 '>
                            <span className='text-white'>ادامه</span>
                            <div className='flex text-2xl'>
                                <MdOutlineKeyboardArrowRight className='text-primary hover:text-yellow-400 cursor-pointer ' />
                                <MdOutlineKeyboardArrowLeft className='text-primary hover:text-yellow-400  cursor-pointer ' />
                            </div>
                        </div>
                        <div className='flex font-medium text-primary items-center gap-x-2'>
                            <span>مشاهده</span>
                            <MdKeyboardArrowLeft className=' text-2xl' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DHomeTemplate
