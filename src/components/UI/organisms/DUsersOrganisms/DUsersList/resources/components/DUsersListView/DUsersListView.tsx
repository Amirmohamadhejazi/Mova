import { type FC, memo, useMemo } from 'react'
import { type MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table'
import { IconDotsVertical, IconEdit, IconTrash } from '@tabler/icons-react'
import { IconUser } from '@tabler/icons-react'

import { DOrganismContainer } from '@partials/containers/DOrganismContainer'

import { DMenu } from '@molecules/DMenu'
import { DTable } from '@molecules/DTable'

import { DActionIcon } from '@atoms/DActionIcon'
import { DBadge } from '@atoms/DBadge'
import { DLink } from '@atoms/DLink'

import { RoutesEnum } from '@core/enums'
import { type TUserDataType } from '@core/types/data/users'

import { type IDUsersListViewProps } from './resources'

const DUsersListView: FC<IDUsersListViewProps> = memo(({ data }) => {
    const columns = useMemo<MRT_ColumnDef<TUserDataType>[]>(
        () => [
            {
                accessorKey: 'fullName',
                header: 'User',
                mantineTableHeadCellProps: {
                    className: 'min-w-[200px] max-w-[210px]',
                    sx: {
                        '.mantine-TableHeadCell-Content': { justifyContent: 'flex-start !important' },
                    },
                },
                mantineTableBodyCellProps: { className: 'min-w-[200px] max-w-[210px] text-left' },
                Cell: ({ row: { original } }) => (
                    <div className='flex flex-row items-center gap-x-4 min-w-[200px] max-w-[210px]'>
                        <figure className='w-9 h-9 rounded-full overflow-hidden bg-cyan-100'>
                            {/* <Image src={data.image} alt={data.fullName} /> */}
                        </figure>
                        <div className='flex flex-col justify-between'>
                            <h4 className='text-base text-gray-800 font-bold'>{original.fullName}</h4>
                            <span className='text-base text-gray-500 font-medium'>{original.email}</span>
                        </div>
                    </div>
                ),
            },
            {
                accessorKey: 'role',
                header: 'Role',
                mantineTableHeadCellProps: { className: 'min-w-[130px] max-w-[170px]' },
                mantineTableBodyCellProps: { className: 'min-w-[130px] max-w-[170px]' },
            },
            {
                accessorKey: 'status',
                header: 'Profile Status',
                mantineTableHeadCellProps: { className: 'min-w-[100px] max-w-[120px]' },
                mantineTableBodyCellProps: { className: 'min-w-[100px] max-w-[120px]' },
                Cell: ({ renderedCellValue }) => (
                    <DBadge className='mx-auto' color={renderedCellValue ? 'green' : 'red'}>
                        {renderedCellValue ? 'Enable' : 'Disable'}
                    </DBadge>
                ),
            },
            {
                header: 'Operations',
                mantineTableHeadCellProps: { className: 'min-w-[120px] max-w-[150px]' },
                mantineTableBodyCellProps: { className: 'min-w-[120px] max-w-[150px] relative overflow-visible' },
                Cell: () => (
                    <DMenu withinPortal shadow='md' width={200}>
                        <DMenu.Target>
                            <DActionIcon className='mx-auto'>
                                <IconDotsVertical />
                            </DActionIcon>
                        </DMenu.Target>
                        <DMenu.Dropdown className='text-sm'>
                            <DMenu.Item icon={<IconUser size={'1.25rem'} />}>View Profile</DMenu.Item>
                            <DMenu.Item icon={<IconEdit size={'1.2rem'} />}>
                                <DLink href={RoutesEnum.Aspects + '/123/' + RoutesEnum.AspectSettings}>
                                    Edit Profile
                                </DLink>
                            </DMenu.Item>
                            <DMenu.Divider />
                            <DMenu.Item icon={<IconTrash size={'1.2rem'} />} className='text-red-500'>
                                Delete
                            </DMenu.Item>
                        </DMenu.Dropdown>
                    </DMenu>
                ),
            },
        ],
        []
    )

    const table = useMantineReactTable({
        columns,
        data,
        enableSorting: false,
        enableColumnActions: false,
        renderTopToolbar: false,
        paginationDisplayMode: 'pages',
        initialState: { pagination: { pageIndex: 0, pageSize: 8 } },
    })

    return (
        <DOrganismContainer>
            <DTable withToolbarFeature={true} table={table} />
        </DOrganismContainer>
    )
})

DUsersListView.displayName = 'DUsersListView'

export default DUsersListView
