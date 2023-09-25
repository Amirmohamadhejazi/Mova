import { type FC } from 'react'
import { Switch, type SwitchProps } from '@mantine/core'

const DSwitch: FC<SwitchProps> = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from SwitchProps
     */
    return <Switch className={`${className}`} classNames={{ ...classNames }} {...rest} />
}
DSwitch.displayName = 'DSwitch'

export default DSwitch
