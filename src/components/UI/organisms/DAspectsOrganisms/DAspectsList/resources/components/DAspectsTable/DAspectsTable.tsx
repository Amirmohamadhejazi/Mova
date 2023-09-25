import { type FC, memo, useMemo } from 'react'
import Image from 'next/image'
import { type MRT_ColumnDef, useMantineReactTable } from 'mantine-react-table'
import { IconDotsVertical, IconEdit, IconListCheck, IconPaperclip, IconTrash } from '@tabler/icons-react'

import { DMenu } from '@molecules/DMenu'
import { DTable } from '@molecules/DTable'

import { DActionIcon } from '@atoms/DActionIcon'
import { DBadge } from '@atoms/DBadge'
import { DLink } from '@atoms/DLink'

import { RoutesEnum } from '@core/enums'

import { STATIC_DATA, type TStaticDataType } from './resources'

const DAspectsTable: FC = memo(() => {
    const data: TStaticDataType[] = STATIC_DATA
    const columns = useMemo<MRT_ColumnDef<TStaticDataType>[]>(
        () => [
            {
                accessorKey: 'aspectName',
                header: 'Aspect Name',
                mantineTableHeadCellProps: {
                    className: 'min-w-[200px] max-w-[210px]',
                    sx: {
                        '.mantine-TableHeadCell-Content': { justifyContent: 'flex-start !important' },
                    },
                },
                mantineTableBodyCellProps: { className: 'min-w-[200px] max-w-[210px] text-left' },
                Cell: ({ row: { original } }) => (
                    <div className='flex flex-row gap-x-2 min-w-[200px] max-w-[210px]'>
                        <figure className='w-5 h-5 overflow-hidden'>
                            <Image src={original.aspectImage} alt={original.aspectName} width={20} height={20} />
                        </figure>
                        <h4>{original.aspectName}</h4>
                    </div>
                ),
            },
            {
                accessorKey: 'aspectSort',
                header: 'Sort',
                mantineTableHeadCellProps: { className: 'min-w-[130px] max-w-[170px]' },
                mantineTableBodyCellProps: { className: 'min-w-[130px] max-w-[170px]' },
            },
            {
                accessorKey: 'aspectStatus',
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
                    <DMenu withinPortal shadow='md' width={200}>
                        <DMenu.Target>
                            <DActionIcon className='mx-auto'>
                                <IconDotsVertical />
                            </DActionIcon>
                        </DMenu.Target>
                        <DMenu.Dropdown className='text-sm'>
                            <DMenu.Item icon={<IconListCheck size={16} />}>
                                <DLink href={RoutesEnum.Aspects + '/123/' + RoutesEnum.AspectCheckList}>
                                    Checklist
                                </DLink>
                            </DMenu.Item>
                            <DMenu.Item>
                                <DLink
                                    href={RoutesEnum.Aspects + '/123/' + RoutesEnum.AspectRequirements}
                                    className='w-full h-full flex flex-row gap-x-2'
                                >
                                    <IconPaperclip size={16} />
                                    Requirement Files
                                </DLink>
                            </DMenu.Item>
                            <DMenu.Item icon={<IconEdit size={16} />}>
                                <DLink href={RoutesEnum.Aspects + '/123/' + RoutesEnum.AspectSettings}>Edit</DLink>
                            </DMenu.Item>
                            <DMenu.Divider />
                            <DMenu.Item icon={<IconTrash size={16} />} className='text-red-500'>
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

    return <DTable withToolbarFeature={true} table={table} />
})

DAspectsTable.displayName = 'DAspectsTable'

export default DAspectsTable
