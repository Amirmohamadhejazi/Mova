import { type FC, useState } from 'react'
import { Dropzone, type FileWithPath, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { IconUpload, IconX } from '@tabler/icons-react'

import SVGFileUp from '@public/icons/common/file-up.svg'

import { DPreviewFileCard, type IDDropzoneProps } from './resources'

const DDropzone: FC<IDDropzoneProps> = ({ label = null, withAsterisk, ...rest }) => {
    const [files, setFiles] = useState<FileWithPath[]>([])

    const removeFileHandler = (file: FileWithPath) => {
        setFiles((files) => {
            const filteredFiles = files.filter((singleFile) => singleFile !== file)
            return filteredFiles
        })
    }

    return (
        <div className='relative flex flex-col gap-y-4'>
            <div className='flex flex-col gap-y-1'>
                {/* Rendering label based on certain conditions */}
                {label && (
                    <label className='text-sm bg-white text-dark font-medium'>
                        {label}
                        {withAsterisk && <span className='text-[#ff6b6b]'> *</span>}
                    </label>
                )}
                {/* Rendering mantine dropzone */}
                <Dropzone
                    className='h-full border border-blue-200 hover:border-blue-200 bg-blue-50 focus-within:border-blue-200 flex items-center justify-start p-4 duration-500 rounded-lg'
                    onDrop={setFiles}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    {...rest}
                >
                    <div className='h-full flex flex-col items-start justify-center'>
                        <Dropzone.Accept>
                            <IconUpload size='2.7rem' stroke={1.5} className='text-blue-500' />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <IconX size='2.7rem' stroke={1.5} color='red' />
                        </Dropzone.Reject>
                        <div className='flex flex-row items-center gap-x-3'>
                            <div className='flex-shrink-0'>
                                <SVGFileUp />
                            </div>
                            <span className='text-black text-sm font-medium text-left'>
                                Drop files here or click to upload.
                            </span>
                        </div>
                    </div>
                </Dropzone>
            </div>
            {/* Preview the files that selected */}
            {files.length > 0 && (
                <div className='grid grid-cols-1 gap-4'>
                    {files.map((file, index) => (
                        <DPreviewFileCard key={index} file={file} removeFileHandler={() => removeFileHandler(file)} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default DDropzone
