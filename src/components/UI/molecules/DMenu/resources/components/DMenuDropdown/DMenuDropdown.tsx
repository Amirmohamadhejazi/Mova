import { type FC } from 'react'
import { Menu, type MenuDropdownProps } from '@mantine/core'

const DMenuDropdown: FC<MenuDropdownProps> = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from MenuDropdownProps
     */
    return (
        <Menu.Dropdown className={`${className}`} {...rest}>
            {children}
        </Menu.Dropdown>
    )
}

export default DMenuDropdown
