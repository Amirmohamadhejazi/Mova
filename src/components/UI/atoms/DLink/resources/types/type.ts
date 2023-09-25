import { type ReactNode } from 'react'
import { type LinkProps } from 'next/link'

interface IDLinkProps extends LinkProps {
    children: ReactNode
    className?: string
}

export default IDLinkProps
