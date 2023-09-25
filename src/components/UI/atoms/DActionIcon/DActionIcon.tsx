import { forwardRef } from 'react'
import { ActionIcon, type ActionIconProps, createPolymorphicComponent } from '@mantine/core'

const CustomButton = forwardRef<HTMLButtonElement, ActionIconProps>(({ children, className = '', ...rest }, ref) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from ActionIconProps
     */
    return (
        <ActionIcon className={`${className}`} {...rest} ref={ref}>
            {children}
        </ActionIcon>
    )
})

CustomButton.displayName = 'CustomButton'

// Since the MantineActionIcon is a polymorphic component, we are creating a polymorphic component using createPolymorphicComponent.
const DActionIcon = createPolymorphicComponent<'button', ActionIconProps>(CustomButton)

export default DActionIcon
