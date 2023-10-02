import { type FC } from 'react'

import { type ILayoutProps } from '@core/types'

const DDetailMoviesLayout: FC<ILayoutProps> = ({ children }) => {
    return <div className='flex flex-col min-h-screen text-[#F9F9F9] bg-[#000000fa]'>{children}</div>
}
export default DDetailMoviesLayout
