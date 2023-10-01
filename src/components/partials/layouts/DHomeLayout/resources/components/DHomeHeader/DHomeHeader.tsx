'use client'
import { type FC } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AiOutlineCloseCircle, AiOutlineUser } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdLogout, MdOutlineNotificationsActive } from 'react-icons/md'
import { TextInput } from '@mantine/core'
import { Popover } from '@mantine/core'
import { Drawer } from '@mantine/core'

import { logoHeader } from '@public/images/common'

import { categoriesData, type TCategoriesDataHeader } from './resources'
import { DHomeSidebar } from '../..'

const DHomeHeader: FC = () => {
    const pathname = usePathname()
    const [opened, setOpened] = useState(false)
    const [drawer, setDrawer] = useState(false)

    const HandlerLink = ({ children, items }: { children: React.JSX.Element; items: TCategoriesDataHeader }) => {
        const isActive = pathname === items?.link
        return isActive ? children : <Link href={items?.link}>{children}</Link>
    }
    return (
        <div className='flex w-full mb-5 lg:mb-0 md:px-4 pt-5'>
            <div className={` shrink-0 block md:hidden lg:block  lg:w-[250px]`}>
                <Image src={logoHeader} alt='logo' />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-8 flex-grow   gap-x-2 w-full  text-dark-700 '>
                <div className='col-span-6 hidden md:flex text-center justify-between items-center mx-5 xl:mx-12'>
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
                                    <div
                                        className={`h-[2.7px] rounded border-0 ${
                                            pathname.includes(items?.link) ? 'bg-yellow-400' : 'bg-transparent '
                                        }`}
                                    />
                                </div>
                            </HandlerLink>
                        ))}
                    </div>
                    <TextInput
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

                <div className='col-span-2 flex items-center justify-end md:justify-end xl:justify-between gap-6 text-center mx-5 md:mx-0'>
                    <div className='p-2 bg-gray-700 text-white rounded-md cursor-pointer block lg:hidden'>
                        <HiMenuAlt3
                            size={20}
                            className='text-primary transform rotate-45'
                            onClick={() => setDrawer(true)}
                        />
                    </div>
                    <div
                        className='p-2 bg-gray-700 text-white rounded-md cursor-pointer relative hidden lg:block'
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
                        >
                            <Popover.Dropdown className='bg-gray-700   border-0 px-3 -top-1/4 right-1/2 transform  translate-x-1/2  translate-y-1/2 text-white'>
                                <div className='flex flex-col gap-y-4 min-w-[110px] font-medium'>
                                    <div className='text-sm flex items-center justify-between pt-2'>
                                        <CgProfile className='text-white ' size={23} />
                                        <span>پروفایل </span>
                                    </div>
                                    <hr />
                                    <div className='text-sm flex items-center justify-between pb-2'>
                                        <MdLogout className='text-red-500 ' size={21} />
                                        <span>خروج</span>
                                    </div>
                                </div>
                            </Popover.Dropdown>
                        </Popover>
                    </div>

                    <span className='hidden xl:block text-yellow-400  font-bold text-xl'>Anastasia </span>

                    <div className='p-2 bg-gray-700 text-white rounded-md cursor-pointer hidden lg:block'>
                        <MdOutlineNotificationsActive size={20} className='text-primary transform rotate-45' />
                    </div>
                </div>
            </div>
            <Drawer
                opened={drawer}
                onClose={() => setDrawer(false)}
                title=' '
                className='block lg:hidden relative '
                transitionProps={{ duration: 150, timingFunction: 'linear' }}
                size='xs'
                styles={{
                    content: { backgroundColor: '#000000fa' },
                    header: { display: 'none' },
                }}
                closeButtonProps={<AiOutlineCloseCircle />}
            >
                <div className='absolute top-5 left-5 text-3xl text-gray-400'>
                    <AiOutlineCloseCircle onClick={() => setDrawer(false)} />
                </div>

                <div className='flex items-start flex-col mt-12'>
                    <span className='text-[#F9F9F9]  mb-2 font-light text-sm '>منوی فرعی</span>
                    <div className='px-2'>
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
                                    <div
                                        className={`h-[2.7px] rounded border-0 ${
                                            pathname.includes(items?.link) ? 'bg-yellow-400' : 'bg-transparent '
                                        }`}
                                    />
                                </div>
                            </HandlerLink>
                        ))}
                    </div>
                </div>
                <DHomeSidebar />
            </Drawer>
        </div>
    )
}

export default DHomeHeader
