import { type FC } from 'react'
import { MultiSelect, type MultiSelectProps } from '@mantine/core'

const DMultiSelect: FC<MultiSelectProps> = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from MultiSelectProps
     */
    return <MultiSelect className={`${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DMultiSelect
