import React from 'react'
import Image from 'next/image'
import { Card } from '@mantine/core'

import { DButton } from '@atoms/DButton'
import { DSelect } from '@atoms/DSelect'
import { DTextInput } from '@atoms/DTextInput'

import dummyUsers from '@core/constants/dummy/dummy-users'
// - - - Imports End - - - - - - - - - - - - - - - - - - - - - -

// types
interface AddMemberModalProps {
    closeHandler: () => void
}

function AddMemberModal({ closeHandler }: AddMemberModalProps) {
    return (
        <div>
            <form action=''>
                {/* search box */}
                <label htmlFor='user-search' className='font-semibold'>
                    Search Users
                </label>
                <DTextInput id='user-search' placeholder='Enter Username/Email Users' className='mt-2' />
                {/* search results */}
                <div className='mt-5'>
                    {dummyUsers.map((user) => (
                        // each card
                        <Card
                            className={`my-3 flex flex-col md:flex-row gap-2 justify-between items-center border  ${
                                user.isUserSelected && 'bg-blue-50'
                            }`}
                            key={user.id}
                        >
                            {/* left side */}
                            <div className='flex '>
                                <Image
                                    alt='user avatar'
                                    width={50}
                                    height={50}
                                    src={user.imageUrl}
                                    className=''
                                ></Image>
                                {/* info */}
                                <div className='ml-2'>
                                    <p className='font-semibold'>{user.name}</p>
                                    <p className='text-gray-500 text-sm'>{user.email}</p>
                                </div>
                            </div>
                            {/* right side */}
                            {user.isUserSelected && (
                                <div>
                                    <DSelect
                                        withinPortal
                                        placeholder='Select a Role'
                                        // defaultValue='Team Member'
                                        data={['Team Member', 'Team Leader']}
                                        className='shrink-0 block'
                                    />
                                </div>
                            )}
                        </Card>
                    ))}
                </div>
                <footer className='flex justify-center gap-3 mt-10 mb-3'>
                    <DButton variant='default' onClick={closeHandler}>
                        Discard
                    </DButton>
                    <DButton>Submit</DButton>
                </footer>
            </form>
        </div>
    )
}

export default AddMemberModal
