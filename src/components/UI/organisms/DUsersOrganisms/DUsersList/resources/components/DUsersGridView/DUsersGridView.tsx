import { type FC } from 'react'

import { DPagination } from '@molecules/DPagination'

import { DUsersCard, type IDUsersGridViewProps } from './resources'

const DUsersGridView: FC<IDUsersGridViewProps> = ({ data }) => {
    const renderData = () => data.map((item, index) => <DUsersCard key={index} data={item} />)

    return (
        <div className='flex flex-col gap-y-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10'>{renderData()}</div>
            {/* Footer section, includes data counts and pagination */}
            <div className='flex flex-col-reverse gap-y-4 md:flex-row items-center md:justify-between'>
                <p className='text-sm text-gray-700 font-medium text-center'>Showing 1 to 5 of 8 entries</p>
                <DPagination total={4} />
            </div>
        </div>
    )
}

export default DUsersGridView
