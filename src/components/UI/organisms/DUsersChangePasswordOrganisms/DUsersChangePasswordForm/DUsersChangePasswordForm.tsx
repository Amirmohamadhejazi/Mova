import { type FC } from 'react'
import { Controller } from 'react-hook-form'

import { DField } from '@molecules/DField'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DPasswordInput } from '@atoms/DPasswordInput'

const DEditUserForm: FC = () => {
    return (
        <DHookForm
            defaultValues={{
                password: '',
                confirmPassword: '',
            }}
            onSubmit={(values) => console.log(values)}
        >
            {({ control, formState: { errors } }) => (
                <div className='flex flex-col gap-y-11'>
                    <div className='grid grid-cols-2 gap-x-6'>
                        {/* password field */}
                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-1'
                                >
                                    <DPasswordInput label='Password' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* confirmPassword field */}
                        <Controller
                            name='confirmPassword'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-1'
                                >
                                    <DPasswordInput label='Confirm Password' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* Form actions */}
                        <div className='col-span-full flex flex-col sm:flex-row gap-4 sm:justify-end mt-9'>
                            <DButton type='submit' className='w-full sm:w-auto'>
                                Submit
                            </DButton>
                        </div>
                    </div>
                </div>
            )}
        </DHookForm>
    )
}

export default DEditUserForm
