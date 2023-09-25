import { MantineReactTable, MRT_Table } from 'mantine-react-table'

import type IDTableProps from './resources/types/type'

const DTable = <T extends Record<string, unknown>>({ withToolbarFeature = false, table }: IDTableProps<T>) => {
    return (
        <div className='w-full overflow-x-auto Table_Selector_2419'>
            {withToolbarFeature ? <MantineReactTable table={table} /> : <MRT_Table table={table} />}
        </div>
    )
}

export default DTable
