import { type FC } from 'react'
import { Pagination, type PaginationProps } from '@mantine/core'

const DPagination: FC<PaginationProps> = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Note that we are not gonna use the Compound pagination format. Just using Regular pagination.
     * Spread remaining props from PaginationProps
     */
    return <Pagination className={`${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DPagination
