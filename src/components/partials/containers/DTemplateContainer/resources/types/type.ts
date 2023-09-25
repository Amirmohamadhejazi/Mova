import { type ReactNode } from 'react'

interface IDTemplateContainerProps {
    children: ReactNode
    heading: string
    breadcrumbItems?: { title: string; href: string }[] | null
    rightSection?: JSX.Element | null
}

export default IDTemplateContainerProps
