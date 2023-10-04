import { type FC } from 'react'

const DDetailSerial: FC<{ params: string }> = ({ params }) => {
    return (
        <div className='flex flex-col'>
            <span>DDetailSerial</span>
            <span>id serial: {params}</span>
        </div>
    )
}

export default DDetailSerial
