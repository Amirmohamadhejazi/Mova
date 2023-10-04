import { type FC } from 'react'

import { type ILayoutProps } from '@core/types'

import { animationSpiderMan } from '@public/images/common'

const DDetailLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <div
            className=' flex justify-center items-center min-h-screen  text-[#F9F9F9] bg-[#000000fa] bg-no-repeat bg-fixed pt-44 px-20'
            style={{ backgroundImage: `url('${animationSpiderMan.src}')` }}
        >
            {children}
        </div>
    )
}
export default DDetailLayout
