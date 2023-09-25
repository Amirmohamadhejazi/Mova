import { forwardRef } from 'react'
import { TextInput, type TextInputProps } from '@mantine/core'

const DTextInput = forwardRef<HTMLInputElement, TextInputProps>(({ className = '', classNames, ...rest }, ref) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from TextInputProps
     */
    return (
        <TextInput
            className={`w-full relative ${className}`}
            classNames={{ ...classNames }}
            autoComplete='off'
            {...rest}
            ref={ref}
        />
    )
})

DTextInput.displayName = 'DTextInput'

export default DTextInput
