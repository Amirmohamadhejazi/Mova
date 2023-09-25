import { type FC } from 'react'
import { Indicator, type IndicatorProps } from '@mantine/core'

const DIndicator: FC<IndicatorProps> = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from IndicatorProps
     */
    return (
        <Indicator className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Indicator>
    )
}

export default DIndicator
