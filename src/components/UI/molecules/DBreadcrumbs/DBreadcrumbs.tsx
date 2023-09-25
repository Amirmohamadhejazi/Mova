import { type FC } from 'react'
import { usePathname } from 'next/navigation'
import { Breadcrumbs } from '@mantine/core'

import { DLink } from '@atoms/DLink'

import { type IDBreadCrumbProps } from './resources'

const DBreadcrumbs: FC<IDBreadCrumbProps> = ({ breadcrumbItems, className = '', classNames, ...rest }) => {
    const pathname = usePathname()

    // Rendering breadcrumb items into the jsx
    const renderBreadcrumbItems = () =>
        breadcrumbItems.map((item, index) => (
            <DLink
                key={index}
                href={item.href}
                className={`${pathname === item.href ? 'text-gray-800' : 'text-gray-500'}`}
            >
                {item.title}
            </DLink>
        ))

    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from BreadcrumbsProps
     */
    return (
        <Breadcrumbs
            className={`${className}`}
            classNames={{ breadcrumb: 'text-sm font-medium', ...classNames }}
            {...rest}
        >
            {renderBreadcrumbItems()}
        </Breadcrumbs>
    )
}

export default DBreadcrumbs
