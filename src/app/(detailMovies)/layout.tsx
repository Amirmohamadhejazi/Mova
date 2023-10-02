import { type FC } from 'react'

import { DDetailMoviesLayout } from '@partials/layouts/DDetailMovies'

import { type ILayoutProps } from '@core/types'

const Layout: FC<ILayoutProps> = ({ children }) => {
    return <DDetailMoviesLayout>{children}</DDetailMoviesLayout>
}

export default Layout
