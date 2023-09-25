import { type FC } from 'react'
import { Menu, type MenuDividerProps } from '@mantine/core'

const DMenuDivider: FC<MenuDividerProps> = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from MenuDividerProps
     */
    return (
        <Menu.Divider className={`${className}`} {...rest}>
            {children}
        </Menu.Divider>
    )
}

export default DMenuDivider
