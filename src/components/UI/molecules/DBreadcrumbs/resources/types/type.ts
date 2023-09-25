import { type BreadcrumbsProps } from '@mantine/core'

interface IDBreadCrumbProps extends Omit<BreadcrumbsProps, 'children'> {
    breadcrumbItems: { title: string; href: string }[]
}

export default IDBreadCrumbProps
