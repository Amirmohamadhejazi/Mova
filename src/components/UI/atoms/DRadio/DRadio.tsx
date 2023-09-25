import { type FC } from 'react'
import { Radio, type RadioProps } from '@mantine/core'

const DRadio: FC<RadioProps> = ({ className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from RadioProps
     */
    return (
        <Radio
            className={`${className}`}
            classNames={{
                body: 'flex-row items-center gap-1 cursor-pointer',
                label: 'text-xs sm:text-sm font-semibold text-dark p-0 cursor-pointer',
                inner: 'mt-0.5',
                radio: 'w-4 h-4 cursor-pointer',
                ...classNames,
            }}
            {...rest}
        />
    )
}

export default DRadio
