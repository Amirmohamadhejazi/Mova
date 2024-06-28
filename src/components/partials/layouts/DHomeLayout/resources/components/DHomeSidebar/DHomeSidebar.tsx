'use client'
import { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FiSettings } from 'react-icons/fi'
import { HiOutlineLogout } from 'react-icons/hi'

import { type IDSidebarTabPropsItem, type TDSidebarTabsDataProps } from './resources'
import { tabsData } from './resources/data/data'
const DHomeSidebar: FC = () => {
    const pathname = usePathname()
    const HandlerLink = ({ children, items }: { children: React.JSX.Element; items: IDSidebarTabPropsItem }) => {
        const isActive = pathname === items?.link
        return isActive ? children : <Link href={items?.link}>{children}</Link>
    }

    return (
        <aside className={`sticky top-24 shrink-0 lg:w-[250px]`}>
            <div className='flex flex-col h-full pt-6 gap-y-8'>
                {tabsData.map((itemsMain: TDSidebarTabsDataProps) => (
                    <div className='flex flex-col' key={itemsMain.id}>
                        {/* Category Name */}
                        <h3 className='text-gray-600 px-2 mb-2 font-medium text-base '>{itemsMain.library}</h3>

                        {/* Category List */}
                        {itemsMain.items.map((items, index) => (
                            <HandlerLink key={index} items={items}>
                                <div
                                    className={`w-full justify-between flex items-center duration-200 ${
                                        pathname.includes(items?.link)
                                            ? 'text-yellow-400'
                                            : 'hover:text-yellow-300 text-secondary'
                                    } `}
                                >
                                    <div className='flex w-full relative items-center p-2 gap-x-3'>
                                        {/* Icon */}
                                        <div className='text-[26px]'>{items.Icon}</div>

                                        {/* Link Name */}
                                        <p className={`font-normal text-base`}>{items.name}</p>

                                        {/* Line */}
                                        <div
                                            className={`w-[2.7px] h-full absolute left-0 rounded  ${
                                                pathname.includes(items?.link) ? ' bg-yellow-400' : ''
                                            }`}
                                        />
                                    </div>
                                </div>
                            </HandlerLink>
                        ))}
                    </div>
                ))}

                <div className='flex flex-col'>
                    {/* Category Name */}
                    <h3 className='text-gray-600 px-2 mb-2 font-medium text-base '>عمومی</h3>

                    {/* Category List */}
                    <div
                        className={`w-full justify-between flex items-center duration-200 hover:text-yellow-300 text-secondary  cursor-pointer`}
                    >
                        <div className='flex w-full relative items-center p-2 gap-x-3'>
                            {/* Icon */}
                            <div className='text-[26px]'>
                                <FiSettings />
                            </div>

                            {/* Link Name */}
                            <p className={`font-normal text-base`}>تنظیمات</p>
                        </div>
                    </div>
                    {/* Category List */}
                    <div
                        className={`w-full justify-between flex items-center duration-200 hover:text-yellow-300 text-secondary  cursor-pointer`}
                    >
                        <div className='flex w-full relative items-center p-2 gap-x-3'>
                            {/* Icon */}
                            <div className='text-[26px]'>
                                <HiOutlineLogout />
                            </div>

                            {/* Link Name */}
                            <p className={`font-normal text-base`}>خروج</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default DHomeSidebar
