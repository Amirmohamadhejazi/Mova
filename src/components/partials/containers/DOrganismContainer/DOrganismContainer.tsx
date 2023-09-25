import { type FC } from 'react'

import { type IDOrganismContainerProps } from './resources'

const DOrganismContainer: FC<IDOrganismContainerProps> = ({ children, className = '' }) => {
    return <div className={`w-full bg-white p-6 rounded-xl shadow ${className}`}>{children}</div>
}

export default DOrganismContainer
