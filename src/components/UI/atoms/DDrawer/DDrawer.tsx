import { type FC } from 'react'
import { Drawer, type DrawerProps } from '@mantine/core'

const DDrawer: FC<DrawerProps> = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from DrawerProps
     */
    return (
        <Drawer className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Drawer>
    )
}

export default DDrawer
