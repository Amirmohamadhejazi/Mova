import { type FC } from 'react'

import { type ILayoutProps } from '@core/types'

import { DHomeSidebar } from './resources'

const DHomeLayout: FC<ILayoutProps> = ({ children }) => {
    // body{
    //   background-color: #020916;
    //   color:#F9F9F9
    // }
    return (
        <main className='flex min-h-screen  text-[#F9F9F9] bg-[#020916]'>
            <DHomeSidebar />
            <section className='flex-grow w-full px-2 overflow-hidden  '>
                <div className='h-full'>{children}</div>
            </section>
        </main>
    )
}
export default DHomeLayout
