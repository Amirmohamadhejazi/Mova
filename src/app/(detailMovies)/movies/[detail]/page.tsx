'use client'
import React, { type FC } from 'react'

const DetailMovie: FC = ({ params }: { params: { slug: string } }) => {
    console.log(params)

    return <div>DetailMovie</div>
}

export default DetailMovie
