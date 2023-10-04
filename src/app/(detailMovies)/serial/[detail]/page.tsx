'use client'
import React, { type FC } from 'react'

import { DDetailSerial } from '@templates/DDetailTemplate'

const DetailMovie: FC = ({ params }: { params: { detail: string } }) => {
    return <DDetailSerial params={params.detail} />
}

export default DetailMovie
