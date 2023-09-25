import { type DropzoneProps } from '@mantine/dropzone'

interface IDDropzoneProps extends Partial<DropzoneProps> {
    label?: string
    withAsterisk?: boolean
}

export default IDDropzoneProps
