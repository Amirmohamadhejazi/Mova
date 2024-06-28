'use client'
import { type FC } from 'react'
import { useQuery } from '@tanstack/react-query'

import { EmptyBoundary } from '@partials/boundaries/EmptyBoundary'
import { DFetchingContainer } from '@partials/containers/DFetchingContainer'

import { DSwiperMoviesLarge } from '@molecules/DSwipers'

const BannerSlider: FC = () => {
    const {
        isFetching: isFetchingGeneral,
        isError: isErrorGeneral,
        isSuccess: isSuccessGeneral,
        data: dataGeneral,
    } = useQuery({
        queryKey: ['movies-large-slider'],
        queryFn: () => fetch('https://6651de3f20f4f4c44278f8b0.mockapi.io/api/v1/general').then((res) => res.json()),
    })

    return (
        <DFetchingContainer
            isSuccess={isSuccessGeneral}
            isError={isErrorGeneral}
            isFetching={isFetchingGeneral}
            emptyBoundary={dataGeneral?.length === 0 && <EmptyBoundary />}
        >
            {dataGeneral && dataGeneral[0] && <DSwiperMoviesLarge dataSwiper={dataGeneral[0]} />}
        </DFetchingContainer>
    )
}

export default BannerSlider
