'use client'
import { type FC } from 'react'
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'

import { EmptyBoundary } from '@partials/boundaries/EmptyBoundary'
import { DFetchingContainer } from '@partials/containers/DFetchingContainer'

import { DSwiperWatchCart } from '@molecules/DSwipers'

const ContinueMovies: FC = () => {
    const {
        isFetching: isFetchingStatusUser,
        isError: isErrorStatusUser,
        isSuccess: isSuccessStatusUser,
        data: dataStatusUser,
    } = useQuery({
        queryKey: ['status-user-continue-movies'],
        queryFn: () =>
            fetch('https://6651de3f20f4f4c44278f8b0.mockapi.io/api/v1/status-user').then((res) => res.json()),
    })

    return (
        <div className='flex flex-col'>
            <div className='flex  items-center justify-between w-full'>
                <div className='flex   gap-x-2 '>
                    <span className='text-white font-bold'>ادامه </span>
                    <div className='flex '>
                        <MdOutlineKeyboardArrowRight className='text-primary hover:text-yellow-400 cursor-pointer ' />
                        <MdOutlineKeyboardArrowLeft className='text-primary hover:text-yellow-400  cursor-pointer ' />
                    </div>
                </div>
                <div className='flex font-medium text-primary   gap-x-2'>
                    <span>مشاهده</span>
                    <MdKeyboardArrowLeft className=' ' />
                </div>
            </div>
            <DFetchingContainer
                isSuccess={isSuccessStatusUser}
                isError={isErrorStatusUser}
                isFetching={isFetchingStatusUser}
                emptyBoundary={dataStatusUser?.length === 0 && <EmptyBoundary />}
            >
                <div className='flex mt-3'>
                    {dataStatusUser && dataStatusUser[0] && <DSwiperWatchCart dataSwiper={dataStatusUser[0]} />}
                </div>
            </DFetchingContainer>
        </div>
    )
}

export default ContinueMovies
