'use client'
import React, { type FC } from 'react'

import { DDetailMovie } from '@templates/DDetailTemplate'

const DetailMovie: FC = ({ params }: { params: { detail: string } }) => {
    return <DDetailMovie params={params.detail} />
}

export default DetailMovie
