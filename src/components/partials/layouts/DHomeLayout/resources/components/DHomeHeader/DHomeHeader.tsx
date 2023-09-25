'use client'
import { type FC } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { AiOutlineUser } from 'react-icons/ai'
import { MdNotifications } from 'react-icons/md'
import { Popover } from '@mantine/core'

import { logoHeader } from '@public/images/common'
const DHomeHeader: FC = () => {
    const [opened, setOpened] = useState(false)
    return (
        <div className='grid grid-cols-10 items-center px-8 py-1  gap-1'>
            <div className=' w-full  col-span-12 md:col-span-2 '>
                <div className='max-w-[140px] p-2'>
                    <Image src={logoHeader} alt='logo' />
                </div>
            </div>
            <div className='text-center col-span-12 md:col-span-6'>content</div>
            <div className='flex items-center justify-end gap-6 text-center col-span-12 md:col-span-2  '>
                <div className='p-2 bg-gray-700 text-white rounded-md cursor-pointer'>
                    <MdNotifications size={25} />
                </div>

                <span className='text-yellow-400  font-bold text-xl'>Anastasia </span>

                <div
                    className='p-2 bg-gray-700 text-white rounded-md cursor-pointer '
                    onClick={() => setOpened((o) => !o)}
                >
                    <AiOutlineUser size={25} />
                </div>
                <Popover opened={opened} position='bottom' onChange={setOpened}>
                    <Popover.Dropdown className='bg-gray-700 text-white'>log out ..</Popover.Dropdown>
                </Popover>
            </div>
        </div>
    )
}

export default DHomeHeader
