import { forwardRef } from 'react'
import { PasswordInput, type PasswordInputProps } from '@mantine/core'

const DPasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
    ({ className = '', classNames, ...rest }, ref) => {
        /**
         * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
         * We can overwrite its style in specific situations for fine-tuned adjustments.
         * Spread remaining props from PasswordInputProps
         */
        return <PasswordInput className={`${className}`} classNames={{ ...classNames }} {...rest} ref={ref} />
    }
)

DPasswordInput.displayName = 'DPasswordInput'

export default DPasswordInput
