import React from 'react'
import { Controller } from 'react-hook-form'
import { MultiSelect, Switch } from '@mantine/core'

import { DField } from '@molecules/DField'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DTextArea } from '@atoms/DTextArea'
import { DTextInput } from '@atoms/DTextInput'
// - - - Imports End - - - - - - - - - - - - - - - - - - - - - -

function AddTeamModal() {
    return (
        <DHookForm
            defaultValues={{ teamName: '', aspect: '', area: '', teamDescription: '', sort: '' }}
            onSubmit={(values) => console.log(values)}
        >
            {({ control, formState: { errors } }) => (
                <>
                    {/* team name */}
                    <Controller
                        name='teamName'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput
                                    required
                                    placeholder='Enter Team Name'
                                    label={<span className='font-semibold'>Team Name</span>}
                                    {...field}
                                />
                            </DField>
                        )}
                    />
                    {/* aspect & area */}
                    <div className='flex gap-5'>
                        <Controller
                            name='aspect'
                            control={control}
                            render={({ field }) => (
                                <DField fieldName={field.name} fieldError={errors}>
                                    <MultiSelect
                                        required
                                        withinPortal
                                        placeholder='Select Aspect'
                                        data={['Aspect 1', 'Aspect 2']}
                                        label={<span className='font-semibold'>Aspect</span>}
                                    />
                                </DField>
                            )}
                        />
                        <Controller
                            name='area'
                            control={control}
                            render={({ field }) => (
                                <DField fieldName={field.name} fieldError={errors}>
                                    <MultiSelect
                                        required
                                        withinPortal
                                        placeholder='Select Area'
                                        data={['Area 1', 'Area 2']}
                                        label={<span className='font-semibold'>Area</span>}
                                    />
                                </DField>
                            )}
                        />
                    </div>
                    {/* team description */}
                    <Controller
                        name='teamDescription'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextArea label={<span className='font-semibold'>Team Description</span>} {...field} />
                            </DField>
                        )}
                    />
                    {/* sort */}
                    <Controller
                        name='sort'
                        control={control}
                        render={({ field }) => (
                            <DField fieldName={field.name} fieldError={errors}>
                                <DTextInput required label={<span className='font-semibold'>Sort</span>} {...field} />
                            </DField>
                        )}
                    />
                    <div className='flex gap-2 items-center '>
                        <span className='text-sm text-gray-700 font-medium'>Disable</span>
                        <Switch defaultChecked />
                        <span className='text-sm text-gray-700 font-medium'>Enable</span>
                    </div>
                    {/* Form actions */}
                    <footer className='text-center mt-10'>
                        <DButton type='submit' className='w-full lg:w-auto'>
                            Sumbit
                        </DButton>
                    </footer>
                </>
            )}
        </DHookForm>
    )
}

export default AddTeamModal
