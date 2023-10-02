import { forwardRef } from 'react'
import { Checkbox, type CheckboxProps } from '@mantine/core'

const DCheckbox = forwardRef<HTMLInputElement, CheckboxProps>(({ className = '', classNames, ...rest }, ref) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from CheckboxProps
     */
    return (
        <Checkbox
            className={`${className}`}
            classNames={{
                body: 'items-center cursor-pointer',
                label: 'text-sm font-medium pt-0.5  cursor-pointer',
                input: 'cursor-pointer',
                ...classNames,
            }}
            {...rest}
            ref={ref}
        />
    )
})

DCheckbox.displayName = 'DCheckbox'

export default DCheckbox
