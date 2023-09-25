import { type FC } from 'react'

import { DOrganismContainer } from '@partials/containers/DOrganismContainer'

import { DButton } from '@atoms/DButton'
import { DLink } from '@atoms/DLink'

import { RoutesEnum } from '@core/enums'

import { DAspectsTable } from './resources'

const DAspectsList: FC = () => {
    return (
        <DOrganismContainer>
            <div className='flex flex-col gap-y-10'>
                {/* Heading */}
                <div className='flex flex-wrap flex-row items-center justify-between'>
                    <h3 className='text-gray-800 text-lg font-semibold'>Aspects List</h3>
                    <DButton component={DLink} href={RoutesEnum.AddAspects}>
                        Add Aspect
                    </DButton>
                </div>
                {/* Table */}
                <DAspectsTable />
            </div>
        </DOrganismContainer>
    )
}

export default DAspectsList
