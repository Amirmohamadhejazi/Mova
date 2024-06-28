'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

import { EmptyBoundary } from '@partials/boundaries/EmptyBoundary'
import { DFetchingContainer } from '@partials/containers/DFetchingContainer'

const DCelebrityTemplate = () => {
    const {
        isFetching: isFetchingCelebrity,
        isError: isErrorCelebrity,
        isSuccess: isSuccessCelebrity,
        data: dataCelebrity,
    } = useQuery({
        queryKey: ['celebrity'],
        queryFn: () => fetch('https://667ee4a5f2cb59c38dc75ff9.mockapi.io/api/v1/celebrity').then((res) => res.json()),
    })

    return (
        <>
            <DFetchingContainer
                isSuccess={isSuccessCelebrity}
                isError={isErrorCelebrity}
                isFetching={isFetchingCelebrity}
                emptyBoundary={dataCelebrity?.length === 0 && <EmptyBoundary />}
            >
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 2xl:grid-cols-5 gap-5 sm:gap-7 pl-2 pr-2 lg:pl-0 lg:pr-12 my-8'>
                    {dataCelebrity &&
                        dataCelebrity.map((itemActor: { img: string; name: string }, indexActor: number) => (
                            <div
                                className='flex flex-col justify-between bg-dark-600 h-60 rounded-lg  text-white hover:text-yellow-400 group cursor-pointer px-2 pb-2 duration-300'
                                key={indexActor}
                            >
                                <div className='relative h-full -top-2 rounded-lg overflow-hidden'>
                                    <div
                                        className='w-full h-full bg-no-repeat bg-cover bg-center group-hover:scale-105 duration-300 filter grayscale-[20%] group-hover:grayscale-0'
                                        style={{ background: `url('${itemActor.img}')` }}
                                    />
                                </div>
                                <span className='text-center text-sm md:text-lg truncate' style={{ direction: 'ltr' }}>
                                    {itemActor.name}
                                </span>
                            </div>
                        ))}{' '}
                </div>
            </DFetchingContainer>
        </>
    )
}

export default DCelebrityTemplate
