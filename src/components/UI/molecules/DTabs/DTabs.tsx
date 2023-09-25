import { Tabs } from '@mantine/core'

import { DTabsList, DTabsPanel, DTabsTab, type TDTabsType } from './resources'

/**
 * You Cannot access .Notation selector from a client module on the server component. You can only pass the imported name through.
 * Make sure to use this component inside a client component instead of server component.
 */

const DTabs: TDTabsType = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from TDTabsType
     */
    return (
        <Tabs className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Tabs>
    )
}

DTabs.Panel = DTabsPanel

DTabs.List = DTabsList

DTabs.Tab = DTabsTab

export default DTabs
