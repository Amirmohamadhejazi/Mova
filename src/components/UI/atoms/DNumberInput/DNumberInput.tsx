import { type FC } from 'react'
import { NumberInput, type NumberInputProps } from '@mantine/core'

const DNumberInput: FC<NumberInputProps> = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from NumberInputProps
     */
    return <NumberInput className={`${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DNumberInput
