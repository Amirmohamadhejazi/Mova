import { type FC } from 'react'
import { Tabs, type TabsListProps } from '@mantine/core'

const DTabsList: FC<TabsListProps> = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from TabsListProps
     */
    return (
        <Tabs.List className={`${className}`} {...rest}>
            {children}
        </Tabs.List>
    )
}

export default DTabsList
