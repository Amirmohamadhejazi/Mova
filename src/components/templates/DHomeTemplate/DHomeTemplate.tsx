'use client'
import { type FC } from 'react'

import DSwiperMoviesLarge from '@molecules/DSwiperMoviesLarge/DSwiperMoviesLarge'

const DHomeTemplate: FC = () => {
    return (
        <div className='grid grid-cols-8 flex-grow gap-x-2 w-full overflow-hidden text-dark-700 h-full'>
            <div className='col-span-6   text-center mx-12'>
                <DSwiperMoviesLarge />
            </div>

            <div className='col-span-2 bg-gray-800 text-center rounded-md'>more items</div>
        </div>
    )
}

export default DHomeTemplate
