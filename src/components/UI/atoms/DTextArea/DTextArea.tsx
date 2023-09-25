import { forwardRef } from 'react'
import { Textarea, type TextareaProps } from '@mantine/core'

const DTextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className = '', classNames, ...rest }, ref) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from TextareaProps
     */
    return <Textarea className={`w-full relative ${className}`} classNames={{ ...classNames }} {...rest} ref={ref} />
})

DTextArea.displayName = 'DTextArea'

export default DTextArea
