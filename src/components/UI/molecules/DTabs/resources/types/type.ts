import { type FC, type ReactComponentElement } from 'react'
import { type TabProps, type TabsListProps, type TabsPanelProps, type TabsProps } from '@mantine/core'

type TAllowedChildrenType = ReactComponentElement<FC<TabsListProps>, TabsListProps> &
    ReactComponentElement<FC<TabsPanelProps>, TabsPanelProps>

interface ITabsProps extends Omit<TabsProps, 'children'> {
    children: Array<TAllowedChildrenType>
}

type TDTabsType = FC<ITabsProps> & { Panel: FC<TabsPanelProps> } & { List: FC<TabsListProps> } & {
    Tab: FC<TabProps>
}

export default TDTabsType
