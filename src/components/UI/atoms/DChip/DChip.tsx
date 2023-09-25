import { type FC } from 'react'

import { type IDChipProps } from './resources'

const DChip: FC<IDChipProps> = ({ children, color, className = '' }) => {
    return (
        <div
            data-color={color}
            className={`text-white font-medium text-xs p-2 select-none rounded-[4px] w-max data-[color=dark]:bg-dark-500 data-[color=gray]:bg-gray-500 data-[color=red]:bg-red-500 data-[color=pink]:bg-pink-500 data-[color=grape]:bg-grape-500 data-[color=violet]:bg-violet-500 data-[color=indigo]:bg-indigo-500 data-[color=blue]:bg-blue-500 data-[color=cyan]:bg-cyan-500 data-[color=green]:bg-green-500 data-[color=lime]:bg-lime-500 data-[color=yellow]:bg-yellow-500 data-[color=orange]:bg-orange-500 data-[color=teal]:bg-teal-500 ${className}`}
        >
            <span>{children}</span>
        </div>
    )
}

export default DChip
