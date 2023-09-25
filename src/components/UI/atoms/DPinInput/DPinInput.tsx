import { type FC } from 'react'
import { PinInput, type PinInputProps } from '@mantine/core'

const DPinInput: FC<PinInputProps> = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from PinInputProps
     */
    return <PinInput className={`${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DPinInput
