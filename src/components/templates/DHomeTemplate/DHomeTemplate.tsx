'use client'
import { type FC } from 'react'
import { Rating } from '@mantine/core'
const DHomeTemplate: FC = () => {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <Rating
                // style={{
                //     .mantine-Rating-root:{

                //     }
                // }}

                // styles={{
                //     root: {
                //         direction: 'ltr',
                //     },
                // }}
                defaultValue={2}
            />
        </div>
    )
}

export default DHomeTemplate
