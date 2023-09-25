import { type FC } from 'react'
import { createPolymorphicComponent, Menu, type MenuItemProps } from '@mantine/core'

const CustomMenuItem: FC<MenuItemProps> = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from MenuItemProps
     */
    return (
        <Menu.Item className={`${className}`} {...rest}>
            {children}
        </Menu.Item>
    )
}

// Since the MenuItem is a polymorphic component, we are creating a polymorphic component using createPolymorphicComponent.
const DMenuItem = createPolymorphicComponent<'button', MenuItemProps>(CustomMenuItem)

export default DMenuItem
