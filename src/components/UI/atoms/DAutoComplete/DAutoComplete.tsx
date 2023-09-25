import { type FC } from 'react'
import { Autocomplete, type AutocompleteProps } from '@mantine/core'

const DAutoComplete: FC<AutocompleteProps> = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from AutocompleteProps
     */
    return <Autocomplete className={`${className}`} classNames={{ ...classNames }} {...rest} />
}

export default DAutoComplete
