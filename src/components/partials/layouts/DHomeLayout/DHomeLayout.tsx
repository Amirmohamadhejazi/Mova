import { type FC } from 'react'

import { type ILayoutProps } from '@core/types'

import { DHomeHeader, DHomeSidebar } from './resources'

const DHomeLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <div className='xl:container transition-all duration-1000 mx-auto flex flex-col min-h-screen text-[#F9F9F9] '>
            <DHomeHeader />
            <div className='w-full flex md:px-4'>
                <div className='hidden lg:block '>
                    <DHomeSidebar />
                </div>

                <div className='grow'>{children}</div>
            </div>
        </div>
    )
}
export default DHomeLayout
