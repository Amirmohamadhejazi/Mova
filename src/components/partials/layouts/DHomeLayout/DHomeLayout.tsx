import { type FC } from 'react'

import { type ILayoutProps } from '@core/types'

import { DHomeHeader, DHomeSidebar } from './resources'

const DHomeLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        // <div className='flex flex-col min-h-screen text-[#F9F9F9]  '>
        <div className='flex flex-col min-h-screen text-[#F9F9F9] bg-[#000000fa]'>
            <DHomeHeader />
            <div className='w-full flex  md:px-4'>
                <div className='hidden lg:block '>
                    <DHomeSidebar />
                </div>

                <main className='flex-grow w-full overflow-hidden'>{children}</main>
            </div>
        </div>
    )
}
export default DHomeLayout
