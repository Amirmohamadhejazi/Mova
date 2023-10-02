'use client'
import { type FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { type IDSidebarTabPropsItem, type TDSidebarTabsDataProps } from './resources'
import { tabsData } from './resources/data/data'

const DHomeSidebar: FC = () => {
    const pathname = usePathname()
    const HandlerLink = ({ children, items }: { children: React.JSX.Element; items: IDSidebarTabPropsItem }) => {
        const isActive = pathname === items?.link
        return isActive ? children : <Link href={items?.link}>{children}</Link>
    }

    return (
        <aside className={` sticky top-0 shrink-0 lg:w-[250px]`}>
            <div className='flex flex-col h-full pt-6 gap-y-12'>
                {tabsData.map((itemsMain: TDSidebarTabsDataProps) => (
                    <div className='flex flex-col' key={itemsMain.id}>
                        <span className='text-[#F9F9F9] px-2 mb-2 font-light text-sm '>{itemsMain.library}</span>
                        {itemsMain.items.map((items) => (
                            <HandlerLink key={items.id} items={items}>
                                <>
                                    <div
                                        className={`w-full mb  justify-between flex items-center duration-200 ${
                                            pathname.includes(items?.link)
                                                ? '   text-yellow-400'
                                                : 'hover:text-yellow-300 text-primary'
                                        } `}
                                        key={items.id}
                                    >
                                        <div className='flex w-full relative items-center  p-2  gap-x-2'>
                                            <div className='text-2xl'>{items.Icon}</div>
                                            <p
                                                className={`font-semibold text-md ${
                                                    pathname.includes(items?.link) && 'text-yellow-400'
                                                }`}
                                            >
                                                {items.name}
                                            </p>
                                            <div
                                                className={`  w-[2.7px] h-full absolute left-0 rounded  ${
                                                    pathname.includes(items?.link) && ' bg-yellow-400'
                                                }`}
                                            />
                                        </div>
                                    </div>
                                </>
                            </HandlerLink>
                        ))}
                    </div>
                ))}
            </div>
        </aside>
    )
}

export default DHomeSidebar
