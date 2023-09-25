import { type FC, useMemo } from 'react'
import { type MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table'

import { DTable } from '@molecules/DTable'

import { STATIC_DATA, type TStaticDataType } from './resources'

const DUsersLoginLogsTable: FC = () => {
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
                accessorKey: 'date',
                header: 'Date',
                mantineTableHeadCellProps: {
                    className: 'min-w-[200px] max-w-[300px]',
                    sx: {
                        '.mantine-TableHeadCell-Content': { justifyContent: 'flex-start !important' },
                    },
                },
                mantineTableBodyCellProps: { className: 'min-w-[200px] max-w-[300px] text-left' },
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

export default DUsersLoginLogsTable
