import { type FieldValues, useForm } from 'react-hook-form'

import { type IDHookFormProps } from './resources'

/**
 *  At first, We are not going to use the FC<> format because we wants to make sure that the component accepts the dynamic generics.
 *  Second, This component appears to be a wrapper around the useForm hook provided by the react-hook-form library.
 *  This wrapper aims to simplify the usage of the form handling logic and provide a more structured and reusable way to manage forms in our application.
 *  We can easily use this component without using useForm hook directly. (like Formik component)
 *  The conditional rendering of children allows us to have flexible rendering options for the content within the form,
 *  We can pass in child components directly or as a function that receives the form methods.
 */

const DHookForm = <T extends FieldValues>({ children, className = '', onSubmit, ...rest }: IDHookFormProps<T>) => {
    // Initialize form methods using useForm hook with provided props
    const methods = useForm<T>(rest)
    const { handleSubmit } = methods

    return (
        <form className={`${className}`} onSubmit={handleSubmit(onSubmit)}>
            {typeof children === 'function' ? children(methods) : children}
        </form>
    )
}

export default DHookForm
