import { type FC } from 'react'
import Link from 'next/link'

import { type IDLinkProps } from './resources'

const DLink: FC<IDLinkProps> = ({ children, prefetch = false, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from IDLinkProps
     */
    return (
        <Link prefetch={prefetch} className={`${className}`} {...rest}>
            {children}
        </Link>
    )
}

export default DLink
