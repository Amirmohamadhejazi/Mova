import { type FC } from 'react'
import { Controller } from 'react-hook-form'

import { DField } from '@molecules/DField'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DSelect } from '@atoms/DSelect'
import { DTextInput } from '@atoms/DTextInput'

const DEditUserForm: FC = () => {
    return (
        <DHookForm
            defaultValues={{
                firstName: '',
                middleName: '',
                lastName: '',
                email: '',
                role: '',
                cellPhone: '',
                birthDate: '',
                provinceAccess: '',
                province: '',
                city: '',
                address: '',
            }}
            onSubmit={(values) => console.log(values)}
        >
            {({ control, formState: { errors }, reset }) => (
                <div className='flex flex-col gap-y-11'>
                    <div className='grid grid-cols-6 gap-x-6'>
                        {/* firstName field */}
                        <Controller
                            name='firstName'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3 xl:col-span-2'
                                >
                                    <DTextInput label='First Name' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* middleName field */}
                        <Controller
                            name='middleName'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3 xl:col-span-2'
                                >
                                    <DTextInput label='Middle Name' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* lastName field */}
                        <Controller
                            name='lastName'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3 xl:col-span-2'
                                >
                                    <DTextInput label='Last Name' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* email field */}
                        <Controller
                            name='email'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3'
                                >
                                    <DTextInput label='Email' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* role field */}
                        <Controller
                            name='role'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3'
                                >
                                    <DSelect data={[]} label='Role' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* cellPhone field */}
                        <Controller
                            name='cellPhone'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3'
                                >
                                    <DTextInput label='Cell Phone' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* birthDate field */}
                        <Controller
                            name='birthDate'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3'
                                >
                                    <DTextInput label='BirthDate' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* provinceAccess field */}
                        <Controller
                            name='provinceAccess'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3'
                                >
                                    <DSelect data={[]} label='Province Access' withAsterisk {...field} />
                                </DField>
                            )}
                        />
                        {/* province field */}
                        <Controller
                            name='province'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3'
                                >
                                    <DSelect data={[]} label='Province' withAsterisk {...field} />
                                </DField>
                            )}
                        />
                        {/* city field */}
                        <Controller
                            name='city'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3'
                                >
                                    <DSelect data={[]} label='City' withAsterisk {...field} />
                                </DField>
                            )}
                        />
                        {/* address field */}
                        <Controller
                            name='address'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3'
                                >
                                    <DTextInput label='Address' withAsterisk {...field} />
                                </DField>
                            )}
                        />

                        {/* Form actions */}
                        <div className='col-span-full flex flex-col-reverse sm:flex-row gap-4 sm:justify-end sm:items-center mt-9'>
                            <DButton
                                type='button'
                                variant='subtle'
                                className='w-full sm:w-auto'
                                onClick={() => reset()}
                            >
                                Reset
                            </DButton>
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
