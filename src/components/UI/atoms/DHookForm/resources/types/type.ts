import { type HTMLAttributes, type ReactNode } from 'react'
import { type FieldValues, type SubmitHandler, type UseFormProps, type UseFormReturn } from 'react-hook-form'

interface IDHookFormProps<T extends FieldValues> extends UseFormProps<T> {
    onSubmit: SubmitHandler<T>
    children: ((hookFormBag: UseFormReturn<T>) => ReactNode) | ReactNode
    className?: HTMLAttributes<HTMLFormElement>['className']
}

export default IDHookFormProps
