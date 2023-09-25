import { type FC } from 'react'
import { Controller } from 'react-hook-form'

import { DField } from '@molecules/DField'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DSwitch } from '@atoms/DSwitch'
import { DTextArea } from '@atoms/DTextArea'
import { DTextInput } from '@atoms/DTextInput'

const DAspectCheckListForm: FC = () => {
    return (
        <DHookForm
            defaultValues={{
                fileName: '',
                status: false,
                startedAt: '',
                endedAt: '',
                maxFileSize: '',
                extension: '',
                description: '',
                sort: '',
                isRequired: true,
                weight: '',
            }}
            onSubmit={(values) => console.log(values)}
        >
            {({ control, formState: { errors }, setValue, reset }) => (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-9'>
                    {/* fileName field */}
                    <Controller
                        name='fileName'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput label='CheckList Name' withAsterisk {...field} />
                            </DField>
                        )}
                    />

                    {/* weight field */}
                    <Controller
                        name='weight'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput label='Weight' {...field} />
                            </DField>
                        )}
                    />

                    {/* startedAt field */}
                    <Controller
                        name='startedAt'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput label='Started At' withAsterisk {...field} />
                            </DField>
                        )}
                    />

                    {/* endedAt field */}
                    <Controller
                        name='endedAt'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput label='Ended At' withAsterisk {...field} />
                            </DField>
                        )}
                    />

                    {/* description field */}
                    <Controller
                        name='description'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors} containerClassName='col-span-full'>
                                <DTextArea label='CheckList Description' {...field} />
                            </DField>
                        )}
                    />

                    {/* sort field */}
                    <Controller
                        name='sort'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors} containerClassName='col-span-full'>
                                <DTextInput label='Sort' withAsterisk {...field} />
                            </DField>
                        )}
                    />

                    {/* status field */}
                    <Controller
                        name='status'
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

export default DAspectCheckListForm
