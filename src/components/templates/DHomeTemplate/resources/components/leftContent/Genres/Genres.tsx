'use client'
import { type FC } from 'react'
import { MdKeyboardArrowLeft, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'

import { EmptyBoundary } from '@partials/boundaries/EmptyBoundary'
import { DFetchingContainer } from '@partials/containers/DFetchingContainer'

import { DSwiperGenreMovies } from '@molecules/DSwipers'

const Genres: FC = () => {
    const {
        isFetching: isFetchingGenre,
        isError: isErrorGenre,
        isSuccess: isSuccessGenre,
        data: dataGenre,
    } = useQuery({
        queryKey: ['status-user-genre'],
        queryFn: () =>
            fetch('https://6651de3f20f4f4c44278f8b0.mockapi.io/api/v1/status-user').then((res) => res.json()),
    })
    return (
        <div className='flex flex-col'>
            <div className='flex  items-center justify-between w-full'>
                <div className='flex  items-center gap-x-2 '>
                    <span className='text-white'>ژانر </span>
                    <div className='flex '>
                        <MdOutlineKeyboardArrowRight className='text-primary hover:text-yellow-400 cursor-pointer ' />
                        <MdOutlineKeyboardArrowLeft className='text-primary hover:text-yellow-400  cursor-pointer ' />
                    </div>
                </div>
                <div className='flex font-medium text-primary items-center gap-x-2'>
                    <span>مشاهده</span>
                    <MdKeyboardArrowLeft className=' ' />
                </div>
            </div>

            <DFetchingContainer
                isSuccess={isSuccessGenre}
                isError={isErrorGenre}
                isFetching={isFetchingGenre}
                emptyBoundary={dataGenre?.length === 0 && <EmptyBoundary />}
            >
                <div>{dataGenre && dataGenre[2] && <DSwiperGenreMovies dataSwiper={dataGenre[2]} />}</div>
            </DFetchingContainer>
        </div>
    )
}

export default Genres
