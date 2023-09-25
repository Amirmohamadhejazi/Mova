import { type FC } from 'react'
import { ErrorMessage } from '@hookform/error-message'

import { type IDFieldProps } from './resources'

const DField: FC<IDFieldProps> = ({ children, fieldName, fieldError, containerClassName = '' }) => {
    return (
        <div className={`w-full items-start  ${containerClassName}`}>
            {children}
            {fieldError && (
                <div className='min-h-[35px] flex items-center justify-start'>
                    <ErrorMessage
                        name={fieldName}
                        errors={fieldError}
                        render={({ message }) => <p className='block text-xs font-medium text-danger-500'>{message}</p>}
                    />
                </div>
            )}
        </div>
    )
}

export default DField
