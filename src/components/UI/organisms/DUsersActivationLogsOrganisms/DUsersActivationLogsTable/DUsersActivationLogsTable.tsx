import { type FC, useMemo } from 'react'
import { type MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table'

import { DTable } from '@molecules/DTable'

import { DBadge } from '@atoms/DBadge'

import { STATIC_DATA, type TStaticDataType } from './resources'

const DUsersActivationLogsTable: FC = () => {
    const data: TStaticDataType[] = STATIC_DATA
    const columns = useMemo<MRT_ColumnDef<TStaticDataType>[]>(
        () => [
            {
                accessorKey: 'target',
                header: 'Target',
                mantineTableHeadCellProps: {
                    className: 'min-w-[200px] max-w-[210px]',
                    sx: {
                        '.mantine-TableHeadCell-Content': { justifyContent: 'flex-start !important' },
                    },
                },
                mantineTableBodyCellProps: { className: 'min-w-[200px] max-w-[210px] text-left' },
            },
            {
                accessorKey: 'code',
                header: 'Code',
                mantineTableHeadCellProps: { className: 'min-w-[130px] max-w-[170px]' },
                mantineTableBodyCellProps: { className: 'min-w-[130px] max-w-[170px]' },
            },
            {
                accessorKey: 'createdAt',
                header: 'Created At',
                mantineTableHeadCellProps: { className: 'min-w-[130px] max-w-[170px]' },
                mantineTableBodyCellProps: { className: 'min-w-[130px] max-w-[170px]' },
            },
            {
                accessorKey: 'expireAt',
                header: 'Expire At',
                mantineTableHeadCellProps: { className: 'min-w-[130px] max-w-[170px]' },
                mantineTableBodyCellProps: { className: 'min-w-[130px] max-w-[170px]' },
            },
            {
                accessorKey: 'usedAt',
                header: 'Used At',
                mantineTableHeadCellProps: { className: 'min-w-[130px] max-w-[170px]' },
                mantineTableBodyCellProps: { className: 'min-w-[130px] max-w-[170px]' },
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
}

export default DUsersActivationLogsTable
