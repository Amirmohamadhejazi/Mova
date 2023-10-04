import { type FC } from 'react'
import { type Metadata } from 'next'

import { type ILayoutProps } from '@core/types'
import { yekan } from '@core/utils'

import '@styles/globals.css'

import Providers from '../components/partials/Providers/Providers'

export const metadata: Metadata = {
    title: 'Mova',
    description: 'download and watch free movie and series',
}

const RootLayout: FC<ILayoutProps> = ({ children }) => {
    return (
        <html lang='fa' className={`${yekan.variable} bg-black select-none`}>
            <body dir='rtl'>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}

export default RootLayout
