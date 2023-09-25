import { type FC } from 'react'
import { Controller } from 'react-hook-form'

import { DDropzone } from '@molecules/DDropzone'
import { DField } from '@molecules/DField'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DSwitch } from '@atoms/DSwitch'
import { DTextArea } from '@atoms/DTextArea'
import { DTextInput } from '@atoms/DTextInput'

const DAspectSettingsForm: FC = () => {
    return (
        <DHookForm
            defaultValues={{
                aspectName: '',
                aspectSort: '',
                aspectStyle: '',
                aspectWeight: '',
                aspectDescription: '',
                aspectImage: '',
                aspectStatus: true,
            }}
            onSubmit={(values) => console.log(values)}
        >
            {({ control, formState: { errors }, setValue, reset }) => (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-9'>
                    {/* aspectName field */}
                    <Controller
                        name='aspectName'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput label='Aspect Name' withAsterisk {...field} />
                            </DField>
                        )}
                    />

                    {/* aspectSort field */}
                    <Controller
                        name='aspectSort'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput label='Aspect Sort' withAsterisk {...field} />
                            </DField>
                        )}
                    />

                    {/* aspectStyle field */}
                    <Controller
                        name='aspectStyle'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput label='Aspect Style' {...field} />
                            </DField>
                        )}
                    />

                    {/* aspectWeight field */}
                    <Controller
                        name='aspectWeight'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput label='Aspect Weight' {...field} />
                            </DField>
                        )}
                    />

                    {/* aspectDescription field */}
                    <Controller
                        name='aspectDescription'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors} containerClassName='col-span-full'>
                                <DTextArea label='Aspect Description' {...field} />
                            </DField>
                        )}
                    />

                    {/* aspectImage field */}
                    <div className='col-span-full mb-8'>
                        <DDropzone label='Image' />
                    </div>

                    {/* aspectStatus field */}
                    <Controller
                        name='aspectStatus'
                        control={control}
                        render={({ field }) => (
                            <div className='flex flex-row items-center gap-x-2'>
                                <label htmlFor={field.name} className='text-sm'>
                                    Disable
                                </label>
                                <DSwitch
                                    label='Enable'
                                    id={field.name}
                                    name={field.name}
                                    checked={field.value}
                                    onChange={() => setValue(field.name, !field.value)}
                                />
                            </div>
                        )}
                    />

                    {/* Form actions */}
                    <div className='col-span-full flex flex-col-reverse sm:flex-row gap-4 sm:justify-end sm:items-center mt-9'>
                        <DButton type='button' variant='subtle' className='w-full sm:w-auto' onClick={() => reset()}>
                            Reset
                        </DButton>
                        <DButton type='submit' className='w-full sm:w-auto'>
                            Sign In
                        </DButton>
                    </div>
                </div>
            )}
        </DHookForm>
    )
}

export default DAspectSettingsForm
