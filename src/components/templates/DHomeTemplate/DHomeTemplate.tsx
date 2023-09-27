import { type FC } from 'react'

import { BannerSlider, PopularMovies } from './resources'

const DHomeTemplate: FC = () => {
    return (
        <div className='grid grid-cols-8 flex-grow gap-x-2 w-full overflow-hidden text-dark-700 h-full'>
            <div className='col-span-6 col mx-12'>
                <BannerSlider />
                <PopularMovies />
            </div>

            <div className='col-span-2 bg-gray-900 text-white flex items-center justify-center rounded-md animate-pulse'>
                <span className='font-bold text-xl'>More items </span>
            </div>
        </div>
    )
}

export default DHomeTemplate
