import { type FC } from 'react'

import { DHomeLayout } from '@partials/layouts/DHomeLayout'

import { DHomeTemplate } from '@templates/DHomeTemplate'
const Home: FC = () => {
    return (
        <DHomeLayout>
            <DHomeTemplate />
        </DHomeLayout>
    )
}

export default Home
