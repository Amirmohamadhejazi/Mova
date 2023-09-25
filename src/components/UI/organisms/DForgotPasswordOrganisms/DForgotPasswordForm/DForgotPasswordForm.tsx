import { type FC } from 'react'
import { Controller } from 'react-hook-form'

import { DField } from '@molecules/DField'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DLink } from '@atoms/DLink'
import { DTextInput } from '@atoms/DTextInput'

import { RoutesEnum } from '@core/enums'

const DForgotPasswordForm: FC = () => {
    return (
        <DHookForm defaultValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
            {({ control, formState: { errors } }) => (
                <>
                    {/* Email field */}
                    <Controller
                        name='email'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput label='Email' {...field} />
                            </DField>
                        )}
                    />
                    {/* Form actions */}
                    <div className='flex flex-col lg:flex-row lg:justify-center gap-4'>
                        <DButton type='submit' component={DLink} href={RoutesEnum.ResetPassword}>
                            Submit
                        </DButton>
                        {/* Goes back to Root URL */}
                        <DButton
                            component={DLink}
                            href={RoutesEnum.Root}
                            type='button'
                            variant='subtle'
                            className='bg-gray-50 hover:bg-blue-50'
                        >
                            Cancel
                        </DButton>
                    </div>
                </>
            )}
        </DHookForm>
    )
}

export default DForgotPasswordForm
