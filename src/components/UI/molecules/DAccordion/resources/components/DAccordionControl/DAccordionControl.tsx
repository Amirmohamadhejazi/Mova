import { type FC } from 'react'
import { Accordion, type AccordionControlProps } from '@mantine/core'

const DAccordionControl: FC<AccordionControlProps> = ({ children, className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from AccordionControlProps
     */
    return (
        <Accordion.Control className={`${className}`} {...rest}>
            {children}
        </Accordion.Control>
    )
}

export default DAccordionControl
