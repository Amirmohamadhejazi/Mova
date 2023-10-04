import { type FC } from 'react'

import { DDetailMovies } from '@partials/layouts/DDetailMovies'

import { type ILayoutProps } from '@core/types'

const Layout: FC<ILayoutProps> = ({ children }) => {
    return <DDetailMovies>{children}</DDetailMovies>
}

export default Layout
