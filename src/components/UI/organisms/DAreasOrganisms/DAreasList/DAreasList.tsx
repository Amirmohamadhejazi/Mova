import { type FC } from 'react'
import { Controller } from 'react-hook-form'
import { useDisclosure } from '@mantine/hooks'

import { DOrganismContainer } from '@partials/containers/DOrganismContainer'

import { DField } from '@molecules/DField'
import { DPagination } from '@molecules/DPagination'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DModal } from '@atoms/DModal'
import { DMultiSelect } from '@atoms/DMultiSelect'
import { DSwitch } from '@atoms/DSwitch'
import { DTextInput } from '@atoms/DTextInput'

import { DAreaCard } from './resources'

const DAreasList: FC = () => {
    const [opened, { open, close }] = useDisclosure(false)

    return (
        <>
            <div className='flex flex-col gap-y-6'>
                <DOrganismContainer className='flex flex-col gap-y-9'>
                    {/* Heading */}
                    <div className='flex flex-wrap flex-row items-center justify-between'>
                        <h3 className='text-gray-800 text-lg font-semibold'>Areas List</h3>
                        <DButton onClick={open}>Add Area</DButton>
                    </div>
                    {/* Rendering areas list */}
                    <div className='flex flex-col gap-y-2'>
                        <DAreaCard />
                        <DAreaCard />
                    </div>
                </DOrganismContainer>
                {/* Footer section, includes data counts and pagination */}
                <div className='flex flex-col-reverse gap-y-4 md:flex-row items-center md:justify-between'>
                    <p className='text-sm text-gray-700 font-medium text-center'>Showing 1 to 5 of 8 entries</p>
                    <DPagination total={10} />
                </div>
            </div>
            <DModal opened={opened} onClose={close} centered title='Add Area' size='xl'>
                {/* Not Completed ! Should merge this with edit area form */}
                <DHookForm
                    defaultValues={{
                        areaTypeName: '',
                        status: false,
                        aspects: [],
                        sort: '',
                    }}
                    onSubmit={(values) => console.log(values)}
                >
                    {({ control, formState: { errors }, setValue }) => (
                        <div className='flex flex-col'>
                            {/* fileName field */}
                            <Controller
                                name='areaTypeName'
                                control={control}
                                render={({ field }) => (
                                    <DField fieldName={field.name} fieldError={errors}>
                                        <DTextInput label='Area Type Name' withAsterisk {...field} />
                                    </DField>
                                )}
                            />

                            {/* aspects field */}
                            <Controller
                                name='aspects'
                                control={control}
                                render={({ field }) => (
                                    <DField fieldName={field.name} fieldError={errors}>
                                        <DMultiSelect data={[]} label='Aspects' withAsterisk {...field} />
                                    </DField>
                                )}
                            />

                            {/* sort field */}
                            <Controller
                                name='sort'
                                control={control}
                                render={({ field }) => (
                                    <DField
                                        fieldName={field.name}
                                        fieldError={errors}
                                        containerClassName='col-span-full'
                                    >
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
                            <div className='col-span-full flex flex-row justify-end mt-9'>
                                <DButton type='submit' className='w-full sm:w-auto'>
                                    Submit
                                </DButton>
                            </div>
                        </div>
                    )}
                </DHookForm>
            </DModal>
        </>
    )
}

export default DAreasList
