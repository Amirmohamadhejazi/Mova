import { type FC, useState } from 'react'
import { IconLayoutGrid, IconLayoutRows, IconSearch } from '@tabler/icons-react'

import { DActionIcon } from '@atoms/DActionIcon'
import { DTextInput } from '@atoms/DTextInput'

import { type TUserDataType } from '@core/types/data/users'

import { DUsersGridView, DUsersListView } from './resources'
import STATIC_DATA from './static-data.json'

const DUsersList: FC = () => {
    const [view, setView] = useState<'grid' | 'list'>('grid')
    const data: TUserDataType[] = STATIC_DATA

    return (
        <div className='flex flex-col gap-y-6'>
            <div className='w-full flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row sm:items-center sm:justify-between'>
                <div className='flex flex-row items-center gap-x-4'>
                    <div className='flex flex-row gap-x-1'>
                        <h3>Users</h3>
                        <span>(38)</span>
                    </div>
                    <DTextInput className='w-44' icon={<IconSearch size={'1.25rem'} />} placeholder='Search' />
                </div>
                <div className='flex flex-row gap-x-3 justify-center sm:justify-start'>
                    <DActionIcon
                        className={`${view === 'grid' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`}
                        onClick={() => setView('grid')}
                    >
                        <IconLayoutGrid size={'1.5rem'} />
                    </DActionIcon>
                    <DActionIcon
                        className={`${view === 'list' ? 'text-blue-600 bg-blue-50' : 'text-gray-600'}`}
                        onClick={() => setView('list')}
                    >
                        <IconLayoutRows size={'1.5rem'} />
                    </DActionIcon>
                </div>
            </div>
            {view === 'grid' ? <DUsersGridView data={data} /> : <DUsersListView data={data} />}
        </div>
    )
}

export default DUsersList
