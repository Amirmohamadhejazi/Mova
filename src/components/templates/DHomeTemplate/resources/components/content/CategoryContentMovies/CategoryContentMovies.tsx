'use client'
import { type FC } from 'react'
import Link from 'next/link'
import { HiPlus } from 'react-icons/hi'
import { Rating } from '@mantine/core'
import { SwiperSlide } from 'swiper/react'
import { useQuery } from '@tanstack/react-query'

import { EmptyBoundary } from '@partials/boundaries/EmptyBoundary'
import { DFetchingContainer } from '@partials/containers/DFetchingContainer'

import { DSwiperCarts } from '@molecules/DSwipers'

import { dataStructure } from './resources'

const CategoryContentMovies: FC = () => {
    const {
        isFetching: isFetchingGeneral,
        isError: isErrorGeneral,
        isSuccess: isSuccessGeneral,
        data: dataGeneral,
    } = useQuery({
        queryKey: ['general'],
        queryFn: () => fetch('https://6651de3f20f4f4c44278f8b0.mockapi.io/api/v1/general').then((res) => res.json()),
    })

    return (
        <div className='flex flex-col gap-y-10'>
            {dataStructure.map((itemStructure) => (
                <div className='flex flex-col gap-y-5 text-white' key={itemStructure.id}>
                    <span className='font-bold text-lg md:text-xl '>{itemStructure.title}</span>

                    <DFetchingContainer
                        isSuccess={isSuccessGeneral}
                        isError={isErrorGeneral}
                        isFetching={isFetchingGeneral}
                        emptyBoundary={dataGeneral?.length === 0 && <EmptyBoundary />}
                    >
                        {dataGeneral && dataGeneral[itemStructure.id] ? (
                            <div>
                                <DSwiperCarts>
                                    <>
                                        {dataGeneral[itemStructure.id].data.map((items) => (
                                            <SwiperSlide key={items.id}>
                                                <div
                                                    className='filter brightness-75 h-[250px] w-full object-cover object-top text-white bg-cover  rounded'
                                                    style={{ backgroundImage: `url('${items.banner}')` }}
                                                ></div>
                                                <div className='w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-32  rounded-xl p-3 '>
                                                    <div>
                                                        <div className='truncate text-xl font-bold drop-shadow-2xl'>
                                                            {items.name}
                                                        </div>
                                                        <Rating value={items.rate} readOnly size='xs' />
                                                    </div>

                                                    <div className='flex justify-between items-center '>
                                                        <Link href={`/`}>
                                                            <div className=' px-5 py-2 flex items-center justify-center cursor-pointer shadow-lg rounded-md bg-yellow-400 '>
                                                                <span className='text-dark-950 font-extrabold text-sm'>
                                                                    اطلاعات بیشتر
                                                                </span>
                                                            </div>
                                                        </Link>

                                                        <div className='flex  px-2 py-2 justify-center items-center rounded-md  bg-opacity-30 bg-gray-400 cursor-pointer'>
                                                            <HiPlus size={20} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </>
                                </DSwiperCarts>
                            </div>
                        ) : (
                            <EmptyBoundary />
                        )}
                    </DFetchingContainer>
                </div>
            ))}
        </div>
    )
}

export default CategoryContentMovies
