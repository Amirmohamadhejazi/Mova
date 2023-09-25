import { type FC } from 'react'
import Image from 'next/image'
import { IconTrash } from '@tabler/icons-react'

import { DActionIcon } from '@atoms/DActionIcon'

import { type IDPreviewFileCardProps } from './resources'

const DPreviewFileCard: FC<IDPreviewFileCardProps> = ({ file, removeFileHandler }) => {
    return (
        <div className='flex items-center justify-between py-2 px-4 border border-[#DDDDDD] rounded-lg'>
            <div className='flex flex-row items-center gap-x-3'>
                <Image src={URL.createObjectURL(file)} alt={file.name} width={48} height={48} className='object-fill' />
                <span>{file.name}</span>
            </div>
            <div>
                <DActionIcon className='group hover:bg-transparent p-0' onClick={removeFileHandler}>
                    <IconTrash className='group-hover:text-danger-200' />
                </DActionIcon>
            </div>
        </div>
    )
}

export default DPreviewFileCard
