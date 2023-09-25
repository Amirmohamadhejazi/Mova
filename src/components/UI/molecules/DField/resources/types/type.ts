import { type ReactNode } from 'react'
import { type FieldErrors, type FieldValues } from 'react-hook-form'

/**
 *  We are making fieldError prop optional because of different choices that we have for implement and showing the error box.
 *  for example, in login page we have a forgot-pass button beside of error message element.
 *  for this kind of renderers, we can set the fieldError specially to the *NULL* and handle it in the parent component.
 */

interface IDFieldProps {
    children: ReactNode
    fieldName: keyof FieldValues
    fieldError: FieldErrors<FieldValues> | null
    containerClassName?: string
}

export default IDFieldProps
