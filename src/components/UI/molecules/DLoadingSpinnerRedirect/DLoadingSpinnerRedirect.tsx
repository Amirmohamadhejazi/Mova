import { type FC, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { DLoadingSpinner } from '@atoms/DLoadingSpinner'

import { type IDLoadingSpinnerRedirectProps } from './resources'

const DLoadingSpinnerRedirect: FC<IDLoadingSpinnerRedirectProps> = ({ href }) => {
    const { push } = useRouter()

    useEffect(() => {
        const navigate = setTimeout(() => push(href), 3000)
        return () => clearTimeout(navigate)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [push])

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <DLoadingSpinner />
        </div>
    )
}

export default DLoadingSpinnerRedirect
