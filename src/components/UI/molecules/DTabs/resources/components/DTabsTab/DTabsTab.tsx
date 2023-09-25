import { type FC } from 'react'
import { type TabProps, Tabs } from '@mantine/core'

const DTabsTab: FC<TabProps> = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from TabsProps
     */
    return (
        <Tabs.Tab
            className={`text-gray-400 font-medium aria-selected:font-bold aria-selected:text-primary-500 ${className}`}
            {...rest}
        >
            {children}
        </Tabs.Tab>
    )
}

export default DTabsTab
