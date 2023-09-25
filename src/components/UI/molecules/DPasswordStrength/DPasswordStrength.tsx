import { type FC } from 'react'

import { type IDPasswordStrengthProps, usePasswordStrength } from './resources'

const DPasswordStrength: FC<IDPasswordStrengthProps> = ({ password }) => {
    const { strength, strengthColor } = usePasswordStrength(password)

    return (
        <div className='mb-2'>
            <div className='w-full h-2 text-secondary-200 rounded-full'>
                <div className={'h-full rounded-full ' + strengthColor} style={{ width: `${strength}%` }} />
            </div>
        </div>
    )
}

export default DPasswordStrength
