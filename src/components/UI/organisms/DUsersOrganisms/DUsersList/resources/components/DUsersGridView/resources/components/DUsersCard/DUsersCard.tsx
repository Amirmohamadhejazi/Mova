import { type FC } from 'react'

import { DBadge } from '@atoms/DBadge'
import { DButton } from '@atoms/DButton'
import { DLink } from '@atoms/DLink'

import { RoutesEnum } from '@core/enums'

import { type IDUsersCardProps } from './resources'

const DUsersCard: FC<IDUsersCardProps> = ({ data }) => {
    return (
        <div className='p-5 bg-white rounded-xl overflow-hidden'>
            <div className='relative flex flex-col items-center gap-y-6'>
                <DBadge
                    color={data.status ? 'green' : 'red'}
                    className='absolute left-1/2 -translate-x-1/2 sm:left-0 top-0 sm:-translate-x-0'
                >
                    {data.status ? 'Enable' : 'Disable'}
                </DBadge>
                <DLink href='' className='mt-8 sm:mt-0 w-16 h-16 overflow-hidden rounded-full bg-cyan-100'>
                    {/* <Image src={data.image} alt={data.fullName} /> */}
                </DLink>
                <div className='flex flex-col items-center gap-y-1 text-center'>
                    <h4 className='text-base text-gray-800 font-bold'>{data.fullName}</h4>
                    <span className='text-base text-gray-500 font-medium'>{data.role}</span>
                </div>
                <div className='w-full flex flex-col-reverse md:flex-row items-center justify-center gap-4'>
                    <DButton variant='subtle' color='red' className='w-full md:w-auto'>
                        Delete
                    </DButton>
                    <DButton
                        component={DLink}
                        href={RoutesEnum.Users + `/${data.userId}/` + RoutesEnum.UsersEdit}
                        color='gray'
                        className='w-full md:w-auto'
                    >
                        Edit
                    </DButton>
                </div>
            </div>
        </div>
    )
}

export default DUsersCard
