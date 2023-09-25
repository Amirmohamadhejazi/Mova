import { type FC } from 'react'
import { Menu, type MenuLabelProps } from '@mantine/core'

const DMenuLabel: FC<MenuLabelProps> = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from MenuLabelProps
     */
    return (
        <Menu.Label className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Menu.Label>
    )
}

export default DMenuLabel
