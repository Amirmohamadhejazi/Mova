import { type FC } from 'react'
import { Button, type ButtonProps, createPolymorphicComponent } from '@mantine/core'

const CustomButton: FC<ButtonProps> = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from ButtonProps
     */
    return (
        <Button className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Button>
    )
}

// Since the MantineButton is a polymorphic component, we are creating a polymorphic component using createPolymorphicComponent.
const DButton = createPolymorphicComponent<'button', ButtonProps>(CustomButton)

export default DButton
