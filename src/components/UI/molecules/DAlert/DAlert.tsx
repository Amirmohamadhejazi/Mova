import { type FC } from 'react'
import { Alert, type AlertProps } from '@mantine/core'

const DAlert: FC<AlertProps> = ({ children, color = 'green', className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from AlertProps
     */
    return (
        <Alert color={color} className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Alert>
    )
}

export default DAlert
