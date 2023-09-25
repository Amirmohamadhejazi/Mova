import { type FC } from 'react'
import { Controller } from 'react-hook-form'

import { DField } from '@molecules/DField'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DPasswordInput } from '@atoms/DPasswordInput'

const DResetPasswordForm: FC = () => {
    return (
        <DHookForm defaultValues={{ password: '', confirmPassword: '' }} onSubmit={(values) => console.log(values)}>
            {({ control, formState: { errors } }) => (
                <>
                    {/* Password field */}
                    <Controller
                        name='password'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors} containerClassName=''>
                                <DPasswordInput className='w-full flex flex-col' label='Password' {...field} />
                            </DField>
                        )}
                    />
                    {/* Confirm password field */}
                    <Controller
                        name='confirmPassword'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors} containerClassName=''>
                                <DPasswordInput className='w-full flex flex-col' label='Confirm Password' {...field} />
                            </DField>
                        )}
                    />
                    {/* Form actions */}
                    <div className='text-center'>
                        <DButton type='submit' className='w-full lg:w-auto'>
                            Change Password
                        </DButton>
                    </div>
                </>
            )}
        </DHookForm>
    )
}

export default DResetPasswordForm
