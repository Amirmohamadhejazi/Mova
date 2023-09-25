import { type FC } from 'react'
import { Menu, type MenuTargetProps } from '@mantine/core'

const DMenuTarget: FC<MenuTargetProps> = ({ children, ...rest }) => {
    /**
     * Spread remaining props from MenuTargetProps
     */
    return <Menu.Target {...rest}>{children}</Menu.Target>
}

export default DMenuTarget
