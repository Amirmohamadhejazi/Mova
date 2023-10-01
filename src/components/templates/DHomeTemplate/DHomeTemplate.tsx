import { type FC } from 'react'

import { BannerSlider, CategoryContentMovies, ContinueMovies, Genres, TopRated } from './resources'

const DHomeTemplate: FC = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-8 flex-grow gap-x-2 w-full overflow-hidden text-dark-700 h-full gap-y-5 md:gap-y-0'>
            {/* content */}
            <div className='col-span-1 md:col-span-6 flex flex-col mx-5 xl:mx-12 gap-y-5 md:gap-y-0'>
                <BannerSlider />
                <CategoryContentMovies />
            </div>

            {/* left sidebar */}
            <div className=' col-span-1 md:col-span-2 flex flex-col gap-y-3 md:gap-y-8 mx-5 md:mx-0 '>
                <ContinueMovies />
                <TopRated />
                <Genres />
            </div>
        </div>
    )
}

export default DHomeTemplate
