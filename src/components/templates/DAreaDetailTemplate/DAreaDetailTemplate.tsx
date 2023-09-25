import { type FC } from 'react'

import { DTemplateContainer } from '@partials/containers/DTemplateContainer'

import { DAreaDetail } from '@organisms/DAreaDetailOrganisms/DAreaDetail'

import { breadcrumbItems } from './resources'

const DAreaDetailTemplate: FC = () => {
    return (
        <DTemplateContainer heading='Areas' breadcrumbItems={breadcrumbItems}>
            <DAreaDetail />
        </DTemplateContainer>
    )
}

export default DAreaDetailTemplate
