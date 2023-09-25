import { type FC } from 'react'
import { Modal, type ModalProps } from '@mantine/core'

const DModal: FC<ModalProps> = ({ children, className = '', classNames, ...rest }) => {
    /**
     * Combining className and classNames to establish a consistent and reusable base style for the component across the project.
     * We can overwrite its style in specific situations for fine-tuned adjustments.
     * Spread remaining props from ModalProps
     */
    return (
        <Modal
            className={`${className}`}
            classNames={{
                ...classNames,
                content: 'rounded-xl p-5 pt-0',
                body: 'p-0 pt-4',
                header: 'p-0 pb-2 border-b',
                title: 'text-lg font-medium pt-5',
            }}
            {...rest}
        >
            {children}
        </Modal>
    )
}

export default DModal
