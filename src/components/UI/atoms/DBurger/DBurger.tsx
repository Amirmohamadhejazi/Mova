import { type FC } from 'react'
import { Burger, type BurgerProps } from '@mantine/core'

const DBurger: FC<BurgerProps> = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from BurgerProps
     */
    return (
        <Burger className={`${className}`} classNames={{ ...classNames }} {...rest}>
            {children}
        </Burger>
    )
}

export default DBurger
