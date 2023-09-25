import { type FC } from 'react'
import { Accordion, type AccordionPanelProps } from '@mantine/core'

const DAccordionPanel: FC<AccordionPanelProps> = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from AccordionPanelProps
     */
    return (
        <Accordion.Panel className={`${className}`} {...rest}>
            {children}
        </Accordion.Panel>
    )
}

export default DAccordionPanel
