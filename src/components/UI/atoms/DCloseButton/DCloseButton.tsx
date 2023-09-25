import { type FC } from 'react'
import { CloseButton, type CloseButtonProps, createPolymorphicComponent } from '@mantine/core'

const CustomButton: FC<CloseButtonProps> = ({ className = '', ...rest }) => {
    /**
     * Combining className to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from CloseButtonProps
     */
    return <CloseButton className={`${className}`} {...rest} />
}

// Since the MantineCloseButton is a polymorphic component, we are creating a polymorphic component using createPolymorphicComponent.
const DCloseButton = createPolymorphicComponent<'button', CloseButtonProps>(CustomButton)

export default DCloseButton
