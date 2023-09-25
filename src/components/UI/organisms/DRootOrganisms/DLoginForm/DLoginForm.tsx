import { type FC } from 'react'
import { Controller } from 'react-hook-form'

import { DField } from '@molecules/DField'

import { DButton } from '@atoms/DButton'
import { DCheckbox } from '@atoms/DCheckbox'
import { DHookForm } from '@atoms/DHookForm'
import { DLink } from '@atoms/DLink'
import { DPasswordInput } from '@atoms/DPasswordInput'
import { DTextInput } from '@atoms/DTextInput'

import { RoutesEnum } from '@core/enums'

const DLoginForm: FC = () => {
    return (
        <DHookForm
            defaultValues={{ email: '', password: '', rememberMe: '' }}
            onSubmit={(values) => console.log(values)}
        >
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
                    {/* Password field */}
                    <Controller
                        name='password'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors} containerClassName=''>
                                <DPasswordInput
                                    className='w-full flex flex-col'
                                    label={
                                        <div className='w-full flex justify-between'>
                                            <span className=''>Password</span>
                                            {/* Forgot password field */}

                                            <DLink href='/forgot-password' className=' text-blue-600'>
                                                Forgot Password?
                                            </DLink>
                                        </div>
                                    }
                                    {...field}
                                />
                            </DField>
                        )}
                    />
                    {/* Remember me field */}
                    <Controller
                        name='rememberMe'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DCheckbox label='Remember Me' {...field} />
                            </DField>
                        )}
                    />
                    {/* Form actions */}
                    <div className='text-center'>
                        <DButton component={DLink} href={RoutesEnum.Panel} type='submit' className='w-full lg:w-auto'>
                            Sign In
                        </DButton>
                    </div>
                </>
            )}
        </DHookForm>
    )
}

export default DLoginForm
