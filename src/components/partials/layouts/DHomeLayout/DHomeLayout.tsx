import { type FC } from 'react'

import { type ILayoutProps } from '@core/types'

import { DHomeHeader, DHomeSidebar } from './resources'

const DHomeLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen text-[#F9F9F9] bg-dark-700'>
            <DHomeHeader />
            <div className='w-full flex  px-4'>
                <DHomeSidebar />
                <main className='flex-grow w-full overflow-hidden'>{children}</main>
            </div>
        </div>
    )
}
export default DHomeLayout
