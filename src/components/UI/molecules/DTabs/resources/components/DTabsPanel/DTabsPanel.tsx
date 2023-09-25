import { type FC } from 'react'
import { Tabs, type TabsPanelProps } from '@mantine/core'

const DTabsPanel: FC<TabsPanelProps> = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from TabsPanelProps
     */
    return (
        <Tabs.Panel className={`${className}`} {...rest}>
            {children}
        </Tabs.Panel>
    )
}

export default DTabsPanel
