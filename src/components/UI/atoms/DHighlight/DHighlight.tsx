import { type FC } from 'react'
import { Highlight, type HighlightProps } from '@mantine/core'

const DHighlight: FC<HighlightProps> = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from HighlightProps
     */
    return (
        <Highlight className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Highlight>
    )
}

export default DHighlight
