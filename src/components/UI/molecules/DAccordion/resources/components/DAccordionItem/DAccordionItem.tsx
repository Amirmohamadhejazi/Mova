import { type FC } from 'react'
import { Accordion, type AccordionItemProps } from '@mantine/core'

const DAccordionItem: FC<AccordionItemProps> = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from AccordionItemProps
     */
    return (
        <Accordion.Item className={`${className}`} {...rest}>
            {children}
        </Accordion.Item>
    )
}

export default DAccordionItem
