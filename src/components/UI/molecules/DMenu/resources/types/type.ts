import { type FC, type ReactComponentElement } from 'react'
import {
    type MenuDividerProps,
    type MenuDropdownProps,
    type MenuItemProps,
    type MenuLabelProps,
    type MenuProps,
    type MenuTargetProps,
} from '@mantine/core'

type TAllowedChildrenType = ReactComponentElement<FC<MenuDropdownProps>, MenuDropdownProps> &
    ReactComponentElement<FC<MenuItemProps>, MenuItemProps> &
    ReactComponentElement<FC<MenuLabelProps>, MenuLabelProps> &
    ReactComponentElement<FC<MenuTargetProps>, MenuTargetProps> &
    ReactComponentElement<FC<MenuDividerProps>, MenuDividerProps>

interface IMenuProps extends Omit<MenuProps, 'children'> {
    children: Array<TAllowedChildrenType>
}

type TDMenuType = FC<IMenuProps> & { Dropdown: FC<MenuDropdownProps> } & { Item: FC<MenuItemProps> } & {
    Target: FC<MenuTargetProps>
} & { Label: FC<MenuLabelProps> } & { Divider: FC<MenuDividerProps> } & FC<MenuItemProps>

export default TDMenuType
