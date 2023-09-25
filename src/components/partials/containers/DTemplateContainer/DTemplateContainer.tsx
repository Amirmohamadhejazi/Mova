import { type FC } from 'react'

import { DBreadcrumbs } from '@molecules/DBreadcrumbs'

import { type IDTemplateContainerProps } from './resources'

const DTemplateContainer: FC<IDTemplateContainerProps> = ({
    children,
    heading,
    breadcrumbItems = null,
    rightSection = null,
}) => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col gap-y-1'>
                    {/* Template title */}
                    <h2 className='text-xl text-gray-900 font-bold'>{heading}</h2>
                    {/* Rendering breadcrumb based on certain conditions */}
                    {breadcrumbItems && <DBreadcrumbs breadcrumbItems={breadcrumbItems} />}
                </div>
                {/* Rendering right section based on certain conditions */}
                {rightSection && rightSection}
            </div>
            {/* Template content */}
            {children}
        </div>
    )
}

export default DTemplateContainer
