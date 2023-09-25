import { type FC } from 'react'
import { usePathname } from 'next/navigation'

import { DLink } from '@atoms/DLink'

import { type IDNavigationTabProps } from './resources'

const DNavigationTab: FC<IDNavigationTabProps> = ({ navigationItems }) => {
    // Getting last segment from the url for implementing active style
    const pathname = usePathname()
    const segments = pathname.split('/')
    const lastSegment = segments.at(-1)

    // Rendering navigation items into the JSX
    const renderItems = () =>
        navigationItems.map((item, index) => (
            <DLink key={index} href={item.href} className='relative py-2 flex-shrink-0'>
                <span
                    className={`text-sm ${
                        lastSegment === item.href ? 'text-gray-800 font-semibold' : 'text-gray-500 font-medium'
                    }`}
                >
                    {item.title}
                </span>
                <div
                    className={`absolute bottom-0 left-0 w-full h-1 rounded-full ${
                        lastSegment === item.href ? 'bg-blue-500' : 'bg-transparent'
                    }`}
                ></div>
            </DLink>
        ))

    return <div className='flex flex-row gap-10 overflow-x-auto'>{renderItems()}</div>
}

export default DNavigationTab
