'use client'
import React, { type FC } from 'react'
import { Popover, Transition } from '@headlessui/react'

import { type ILayoutProps } from '@core/types'

const DPopUpHeadless: FC<ILayoutProps> = ({ children }) => {
    const logoutHandler = () => {
        return console.log('log out')
    }

    return (
        <Popover className='relative w-full '>
            <Popover.Button className='flex items-center focus:outline-none focus:ring-transparent '>
                {children}
            </Popover.Button>
            <Transition
                enter='transition duration-100 ease-out'
                enterFrom='transform scale-95 opacity-0'
                enterTo='transform scale-100 opacity-100'
                leave='transition duration-75 ease-out'
                leaveFrom='transform scale-100 opacity-100'
                leaveTo='transform scale-95 opacity-0'
            >
                <Popover.Panel open={false}>
                    <div className='flex flex-col w-full overflow-hidden bg-white border rounded-sm text-red-600 absolute left-0 top-2 '>
                        <div className='flex gap-x-1 items-center cursor-pointer px-5 py-2' onClick={logoutHandler}>
                            1<span className='text-sm transition-all font-medium'>خروج</span>
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}

export default DPopUpHeadless
