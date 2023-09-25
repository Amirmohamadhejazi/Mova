import { type FC } from 'react'
import { LoadingOverlay, type LoadingOverlayProps } from '@mantine/core'

const DLoadingOverlay: FC<LoadingOverlayProps> = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from LoadingOverlayProps
     */
    return (
        <LoadingOverlay className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </LoadingOverlay>
    )
}

export default DLoadingOverlay
