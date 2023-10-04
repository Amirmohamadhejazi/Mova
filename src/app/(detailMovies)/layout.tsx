import { type FC } from 'react'

import { DDetailLayout } from '@partials/layouts/DDetailLayout'

import { type ILayoutProps } from '@core/types'

const Layout: FC<ILayoutProps> = ({ children }) => {
    return <DDetailLayout>{children}</DDetailLayout>
}

export default Layout
