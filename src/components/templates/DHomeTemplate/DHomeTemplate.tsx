'use client'
import { type FC } from 'react'
const DHomeTemplate: FC = () => {
    return (
        <div className='grid grid-cols-8 flex-grow gap-x-2 w-full overflow-hidden text-dark-700'>
            <span className='col-span-6 bg-red-200 text-center mx-12'>content</span>
            <span className='col-span-2 bg-red-400 text-center'>more items</span>
        </div>
    )
}

export default DHomeTemplate
