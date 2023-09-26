'use client'
import { type FC } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineUser } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { MdLogout, MdOutlineNotificationsActive } from 'react-icons/md'
import { TextInput } from '@mantine/core'
import { Popover } from '@mantine/core'

import { logoHeader } from '@public/images/common'

import { categoriesData, type TCategoriesDataHeader } from './resources'

const DHomeHeader: FC = () => {
    const pathname = usePathname()
    const [opened, setOpened] = useState(false)

    const HandlerLink = ({ children, items }: { children: React.JSX.Element; items: TCategoriesDataHeader }) => {
        const isActive = pathname === items?.link
        return isActive ? children : <Link href={items?.link}>{children}</Link>
    }
    return (
        <div className='flex w-full px-4 pt-5'>
            <div className='shrink-0 hidden lg:block lg:w-[250px]  '>
                <Image src={logoHeader} alt='logo' />
            </div>
            <div className='grid grid-cols-8 flex-grow  gap-x-2 w-full  text-dark-700 '>
                <div className='col-span-6 flex text-center justify-between items-center  mx-12'>
                    <div className='flex items-start gap-x-5'>
                        {categoriesData.map((items) => (
                            <HandlerLink key={items.id} items={items}>
                                <div className='flex flex-col gap-y-1' key={items.id}>
                                    <span
                                        className={`font-semibold ${
                                            pathname.includes(items?.link) ? 'text-yellow-400 ' : 'text-primary'
                                        } `}
                                    >
                                        {items.name}
                                    </span>
                                    {pathname.includes(items?.link) && (
                                        <div className='h-[2.7px] rounded bg-yellow-400 border-0 ' />
                                    )}
                                </div>
                            </HandlerLink>
                        ))}
                    </div>
                    <TextInput
                        rightSectionPointerEvents='none'
                        rightSection={<BiSearchAlt size={20} className='text-gray-500' />}
                        placeholder='جستجو'
                        styles={{
                            input: {
                                background: ' #495057',
                                border: '0',
                                color: 'white',
                            },
                        }}
                    />
                </div>

                <div className='col-span-2 flex items-center justify-between gap-6 text-center'>
                    <div
                        className='p-2 bg-gray-700 text-white rounded-md cursor-pointer relative'
                        onClick={() => setOpened((o) => !o)}
                    >
                        <AiOutlineUser size={20} className='text-primary' />
                        <Popover
                            opened={opened}
                            position='bottom'
                            withArrow
                            styles={{
                                arrow: {
                                    right: '50%',
                                    transform: 'translate(50%, 0)',
                                    border: '1px solid #495057',
                                },
                            }}
                            onChange={setOpened}
                        >
                            <Popover.Dropdown className='bg-gray-700   border-0 px-3 -top-1/4 right-1/2 transform  translate-x-1/2  translate-y-1/2 text-white'>
                                <div className='flex flex-col gap-y-4 min-w-[110px] font-medium'>
                                    <div className='text-sm flex items-center justify-between pt-2'>
                                        <span>پروفایل </span>
                                        <CgProfile className='text-white ' size={23} />
                                    </div>
                                    <hr />
                                    <div className='text-sm flex items-center justify-between pb-2'>
                                        <span>خروج</span>
                                        <MdLogout className='text-red-500 ' size={21} />
                                    </div>
                                </div>
                            </Popover.Dropdown>
                        </Popover>
                    </div>

                    <span className='text-yellow-400  font-bold text-xl'>Anastasia </span>

                    <div className='p-2 bg-gray-700 text-white rounded-md cursor-pointer '>
                        <MdOutlineNotificationsActive size={20} className='text-primary transform   rotate-45' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DHomeHeader
