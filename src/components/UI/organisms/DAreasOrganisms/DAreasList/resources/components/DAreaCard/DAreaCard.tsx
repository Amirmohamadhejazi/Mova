import { type FC } from 'react'
import { IconPencil } from '@tabler/icons-react'

import { DBadge } from '@atoms/DBadge'
import { DButton } from '@atoms/DButton'
import { DLink } from '@atoms/DLink'

import { RoutesEnum } from '@core/enums'

const DAreaCard: FC = () => {
    return (
        <div className='flex flex-col gap-y-4 p-8 rounded-xl border'>
            <div className='flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row sm:items-start sm:justify-between'>
                <div className='flex flex-col gap-y-1'>
                    <h3 className='text-xl font-bold'>Lobby</h3>
                    <span className='text-sm text-gray-500'>Aug 24, 2020</span>
                </div>
                <DBadge color='green'>Enable</DBadge>
            </div>
            <div className='w-full max-w-sm flex flex-wrap flex-row gap-2'>
                <DBadge># Corner Size</DBadge>
                <DBadge># AutoCad</DBadge>
                <DBadge># Height Size</DBadge>
                <DBadge># Floor</DBadge>
            </div>
            <div className='flex flex-col-reverse md:flex-row md:items-center md:justify-end gap-4'>
                <DButton variant='subtle' color='red'>
                    Delete
                </DButton>
                <DButton
                    component={DLink}
                    href={RoutesEnum.Areas + '/123'}
                    variant='subtle'
                    className='bg-blue-50 hover:bg-blue-100/80'
                >
                    View Detail
                </DButton>
                <DButton leftIcon={<IconPencil size={'1.25rem'} />}>Edit Area</DButton>
            </div>
        </div>
    )
}

export default DAreaCard
