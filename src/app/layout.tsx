import { type FC } from 'react'
import { type Metadata } from 'next'

import { type ILayoutProps } from '@core/types'
// import { interFont } from '@core/utils'
import { yekan } from '@core/utils/fonts/fonts.utils'

import '@styles/globals.css'

import Providers from './Providers/Providers'

export const metadata: Metadata = {
    title: 'Mova',
}

const RootLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <html lang='fa' className={`${yekan.variable} bg-[#000000fa]`}>
            <body dir='rtl'>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default RootLayout
