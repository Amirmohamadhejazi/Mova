import { type FC } from 'react'
import { Badge, type BadgeProps } from '@mantine/core'

const DBadge: FC<BadgeProps> = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from BadgeProps
     */
    return (
        <Badge className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Badge>
    )
}

export default DBadge
