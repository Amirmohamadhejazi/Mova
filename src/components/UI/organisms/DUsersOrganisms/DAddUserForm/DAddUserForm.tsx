import { type FC } from 'react'
import { Controller } from 'react-hook-form'

import { DField } from '@molecules/DField'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'
import { DPasswordInput } from '@atoms/DPasswordInput'
import { DSelect } from '@atoms/DSelect'
import { DSwitch } from '@atoms/DSwitch'
import { DTextInput } from '@atoms/DTextInput'

import { type IDAddUserFormProps } from './resources'

const DAddUserForm: FC<IDAddUserFormProps> = ({ close }) => {
    return (
        <DHookForm
            defaultValues={{
                image: '',
                firstName: '',
                middleName: '',
                lastName: '',
                email: '',
                password: '',
                cellPhone: '',
                birthDate: '',
                provinceAccess: '',
                province: '',
                city: '',
                address: '',
                role: '',
                status: true,
            }}
            onSubmit={(values) => console.log(values)}
        >
            {({ control, formState: { errors }, setValue }) => (
                <div className='flex flex-col gap-y-11'>
                    <div className='flex flex-col gap-y-5'>
                        <span>Avatar</span>
                        <figure className='w-24 h-24 rounded-lg overflow-hidden bg-cyan-100'></figure>
                        <span className='text-base text-gray-600 font-light'>Allowed file types: png, jpg, jpeg.</span>
                    </div>
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

                        {/* password field */}
                        <Controller
                            name='password'
                            control={control}
                            render={({ field }) => (
                                <DField
                                    fieldName={field.name}
                                    fieldError={errors}
                                    containerClassName='col-span-full md:col-span-3'
                                >
                                    <DPasswordInput label='Password' withAsterisk {...field} />
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
                                    <DTextInput label='Aspect Name' withAsterisk {...field} />
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

                        {/* status field */}
                        <Controller
                            name='status'
                            control={control}
                            render={({ field }) => (
                                <div className='flex flex-row items-center gap-x-2 col-span-6'>
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
                        <div className='col-span-full flex flex-col-reverse sm:flex-row gap-4 sm:justify-center sm:items-center mt-9'>
                            <DButton
                                type='button'
                                variant='subtle'
                                color='red'
                                className='w-full sm:w-auto'
                                onClick={close}
                            >
                                Discard
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

export default DAddUserForm
