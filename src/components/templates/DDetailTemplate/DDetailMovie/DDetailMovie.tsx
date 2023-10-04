import { type FC } from 'react'
import { HiPlus } from 'react-icons/hi'

const DDetailMovie: FC<{ params: string }> = ({ params }) => {
    return (
        <div className='w-full flex flex-col h-[10000px] border border-red-600'>
            <div className='flex gap-2'>
                <div className='flex  px-2 py-2 justify-center items-center rounded-md  bg-opacity-30 bg-gray-400 cursor-pointer'>
                    <HiPlus size={20} />
                </div>
                <span className='text-2xl'>برگشت به خانه </span>
            </div>
            <span>DDetailSerial</span>
            <span>id Movie: {params}</span>
        </div>
    )
}

export default DDetailMovie
