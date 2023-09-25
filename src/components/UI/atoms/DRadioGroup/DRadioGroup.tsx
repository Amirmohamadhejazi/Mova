import { forwardRef } from 'react'
import { Radio, type RadioGroupProps } from '@mantine/core'

const DRadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
    ({ children, className = '', classNames, ...rest }, ref) => {
        /**
         * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
         * We can overwrite its style in specific situations for fine-tuned adjustments.
         * Spread remaining props from RadioGroupProps
         */
        return (
            <Radio.Group className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref}>
                {children}
            </Radio.Group>
        )
    }
)

DRadioGroup.displayName = 'DRadioGroup'

export default DRadioGroup
