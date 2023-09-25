import { type FC, memo, useMemo } from 'react'
import { type MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table'
import { IconDotsVertical } from '@tabler/icons-react'

import { DMenu } from '@molecules/DMenu'
import { DTable } from '@molecules/DTable'

import { DActionIcon } from '@atoms/DActionIcon'
import { DBadge } from '@atoms/DBadge'

import { STATIC_DATA, type TStaticDataType } from './resources'

const DAspectCheckListTable: FC = memo(() => {
    const data: TStaticDataType[] = STATIC_DATA
    const columns = useMemo<MRT_ColumnDef<TStaticDataType>[]>(
        () => [
            {
                accessorKey: 'fileName',
                header: 'File Name',
                mantineTableHeadCellProps: {
                    className: 'min-w-[250px] max-w-[260px]',
                    sx: {
                        '.mantine-TableHeadCell-Content': { justifyContent: 'flex-start !important' },
                    },
                },
                mantineTableBodyCellProps: { className: 'min-w-[250px] max-w-[260px] text-left' },
            },
            {
                accessorKey: 'startedAt',
                header: 'Started at',
                mantineTableHeadCellProps: { className: 'min-w-[130px] max-w-[170px]' },
                mantineTableBodyCellProps: { className: 'min-w-[130px] max-w-[170px]' },
            },
            {
                accessorKey: 'endedAt',
                header: 'Ended at',
                mantineTableHeadCellProps: { className: 'min-w-[130px] max-w-[170px]' },
                mantineTableBodyCellProps: { className: 'min-w-[130px] max-w-[170px]' },
            },
            {
                accessorKey: 'sort',
                header: 'Sort',
                mantineTableHeadCellProps: { className: 'min-w-[100px] max-w-[140px]' },
                mantineTableBodyCellProps: { className: 'min-w-[100px] max-w-[140px]' },
            },
            {
                accessorKey: 'status',
                header: 'Status',
                mantineTableHeadCellProps: { className: 'min-w-[100px] max-w-[120px]' },
                mantineTableBodyCellProps: { className: 'min-w-[100px] max-w-[120px]' },
                Cell: ({ renderedCellValue }) => (
                    <DBadge className='mx-auto' color={renderedCellValue ? 'green' : 'red'}>
                        {renderedCellValue ? 'Enabled' : 'Disabled'}
                    </DBadge>
                ),
            },
            {
                header: 'Operations',
                mantineTableHeadCellProps: { className: 'min-w-[120px] max-w-[150px]' },
                mantineTableBodyCellProps: { className: 'min-w-[120px] max-w-[150px] relative overflow-visible' },
                Cell: () => (
                    <DMenu shadow='md' width={200} withinPortal>
                        <DMenu.Target>
                            <DActionIcon className='mx-auto'>
                                <IconDotsVertical />
                            </DActionIcon>
                        </DMenu.Target>
                        <DMenu.Dropdown>
                            <DMenu.Item>Profile</DMenu.Item>
                            <DMenu.Divider />
                            <DMenu.Item>Logout</DMenu.Item>
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

    return <DTable withToolbarFeature={true} table={table} />
})

DAspectCheckListTable.displayName = 'DAspectCheckListTable'
export default DAspectCheckListTable
