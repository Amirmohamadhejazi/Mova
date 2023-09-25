import { type FC } from 'react'
import { Controller } from 'react-hook-form'
import { useDisclosure } from '@mantine/hooks'
import { IconPencil } from '@tabler/icons-react'

import { DOrganismContainer } from '@partials/containers/DOrganismContainer'

import { DField } from '@molecules/DField'

import { DBadge } from '@atoms/DBadge'
import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DModal } from '@atoms/DModal'
import { DMultiSelect } from '@atoms/DMultiSelect'
import { DSwitch } from '@atoms/DSwitch'
import { DTextInput } from '@atoms/DTextInput'

const DAreaDetail: FC = () => {
    const [opened, { open, close }] = useDisclosure(false)

    return (
        <>
            <DOrganismContainer className='flex flex-col gap-y-10'>
                {/* Heading */}
                <div className='flex flex-wrap flex-row items-center justify-between'>
                    <h3 className='text-gray-800 text-lg font-semibold'>Bathroom Detail</h3>
                    <DButton onClick={open} leftIcon={<IconPencil size={'1.25rem'} />}>
                        Edit Area
                    </DButton>
                </div>
                {/* Details */}
                <div className='overflow-hidden overflow-x-auto'>
                    <table className='w-full text-left'>
                        <tbody>
                            <tr>
                                <th className='py-2 whitespace-nowrap pr-2'>
                                    <h4 className='font-semibold text-black text-sm'>Area Name</h4>
                                </th>
                                <td className='py-2'>
                                    <span className='font-normal text-black text-sm line-clamp-2'>Bathroom</span>
                                </td>
                            </tr>
                            <tr>
                                <th className='py-2 whitespace-nowrap pr-2'>
                                    <h4 className='font-semibold text-black text-sm'>Aspects</h4>
                                </th>
                                <td className='py-2'>
                                    <div className='flex flex-wrap flex-row gap-2'>
                                        <DBadge># Corner Size</DBadge>
                                        <DBadge># AutoCad</DBadge>
                                        <DBadge># Height Size</DBadge>
                                        <DBadge># Floor</DBadge>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th className='py-2 whitespace-nowrap pr-2'>
                                    <h4 className='font-semibold text-black text-sm'>Created at</h4>
                                </th>
                                <td className='py-2'>
                                    <h4 className='font-normal text-black text-sm'>9/12/2023 - 16:24:02</h4>
                                </td>
                            </tr>
                            <tr>
                                <th className='py-2 whitespace-nowrap pr-2'>
                                    <h4 className='font-semibold text-black text-sm'>Updated at</h4>
                                </th>
                                <td className='py-2'>
                                    <h4 className='font-normal text-black text-sm'>9/17/2023 - 20:05:24</h4>
                                </td>
                            </tr>
                            <tr>
                                <th className='py-2 whitespace-nowrap pr-2'>
                                    <h4 className='font-semibold text-black text-sm'>Status</h4>
                                </th>
                                <td className='py-2'>
                                    <DBadge color='green'>Enable</DBadge>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </DOrganismContainer>
            <DModal opened={opened} onClose={close} centered title='Edit Bathroom' size='xl'>
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

export default DAreaDetail
