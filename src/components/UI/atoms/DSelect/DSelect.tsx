import { forwardRef } from 'react'
import { Select, type SelectProps } from '@mantine/core'

const DSelect = forwardRef<HTMLInputElement, SelectProps>(({ className = '', classNames, ...rest }, ref) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from SelectProps
     */
    return <Select className={`w-full relative ${className}`} classNames={{ ...classNames }} {...rest} ref={ref} />
})

DSelect.displayName = 'DSelect'

export default DSelect
