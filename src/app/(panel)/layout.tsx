import { type FC } from 'react'

import { DHomeLayout } from '@partials/layouts/DHomeLayout'

import { type ILayoutProps } from '@core/types'

const Layout: FC<ILayoutProps> = ({ children }) => {
    return <DHomeLayout>{children}</DHomeLayout>
}

export default Layout
