'use client'
import React, { type FC } from 'react'

import { DDetailMoviesTemplate } from '@templates/DDetailMoviesTemplate'

const DetailMovie: FC = ({ params }: { params: { detail: string } }) => {
    return <DDetailMoviesTemplate params={params.detail} />
}

export default DetailMovie
