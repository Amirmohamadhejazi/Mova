import { type FC } from 'react'

import { DCheckboxGroup } from '@molecules/DCheckboxGroup'

import { DButton } from '@atoms/DButton'
import { DHookForm } from '@atoms/DHookForm'

const DUsersPermissionForm: FC = () => {
    return (
        <DHookForm onSubmit={() => console.log('first')}>
            <div className='flex flex-col gap-y-12'>
                <DCheckboxGroup
                    groupLabel='Provinces'
                    initialValues={[
                        { label: 'Add', checked: false, key: '1' },
                        { label: 'Edit', checked: false, key: '2' },
                        { label: 'Delete', checked: false, key: '3' },
                    ]}
                />
                <DCheckboxGroup
                    groupLabel='City'
                    initialValues={[
                        { label: 'Add', checked: false, key: '1' },
                        { label: 'Edit', checked: false, key: '2' },
                        { label: 'Delete', checked: false, key: '3' },
                    ]}
                />
                <DCheckboxGroup
                    groupLabel='Project Type'
                    initialValues={[
                        { label: 'Add', checked: false, key: '1' },
                        { label: 'Edit', checked: false, key: '2' },
                        { label: 'Delete', checked: false, key: '3' },
                        { label: 'Set Admin', checked: false, key: '4' },
                    ]}
                />
                <DCheckboxGroup
                    groupLabel='Projects'
                    initialValues={[
                        { label: 'Add', checked: false, key: '1' },
                        { label: 'Edit', checked: false, key: '2' },
                        { label: 'Delete', checked: false, key: '3' },
                        { label: 'Project Member', checked: false, key: '4' },
                        { label: 'Project Area', checked: false, key: '5' },
                        { label: 'Project Aspects', checked: false, key: '6' },
                    ]}
                />
                {/* Form actions */}
                <div className='flex flex-col-reverse sm:flex-row gap-4 sm:justify-end sm:items-center mt-4'>
                    <DButton type='button' variant='subtle' className='w-full sm:w-auto'>
                        Reset
                    </DButton>
                    <DButton type='submit' className='w-full sm:w-auto'>
                        Submit
                    </DButton>
                </div>
            </div>
        </DHookForm>
    )
}

export default DUsersPermissionForm
